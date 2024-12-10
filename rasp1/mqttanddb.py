import paho.mqtt.client as mqtt
import pymysql
import json
from datetime import datetime

# MariaDB 연결 정보
DB_HOST = "localhost"
DB_USER = "root"       # MariaDB 사용자 이름
DB_PASSWORD = "1234"   # MariaDB 비밀번호a
DB_NAME = "sensor_data"  # MariaDB 데이터베이스 이름

# MQTT 브로커 정보
BROKER_ADDRESS = "broker.hivemq.com"
PORT = 1883
TOPIC = "0B:8E:74/et/smpl/tele/sensor"

try:
    # MariaDB 연결
    connection = pymysql.connect(
        host=DB_HOST,
        user=DB_USER,
        password=DB_PASSWORD,
        database=DB_NAME
    )
    cursor = connection.cursor()
    print("[INFO] MariaDB에 성공적으로 연결되었습니다!")
except Exception as e:
    print(f"[ERROR] MariaDB 연결에 실패했습니다: {e}")
    exit()

# MQTT 메시지 처리
def on_message(client, userdata, message):
    print(f"[MQTT] 메시지 수신: {message.payload.decode('utf-8')} (토픽: {message.topic})")
    
    try:
        # JSON 파싱
        data = json.loads(message.payload.decode('utf-8'))
        temperature = data.get("temperature")  # 온도 값 가져오기
        
        if temperature is not None:
            # 데이터베이스에 삽입
            timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            query = "INSERT INTO temperature_data (temperature, timestamp) VALUES (%s, %s)"
            cursor.execute(query, (temperature, timestamp))
            connection.commit()
            print(f"[DB] 온도 데이터 저장 완료: {temperature} (시간: {timestamp})")
        else:
            print("[WARNING] JSON 데이터에 'temperature' 키가 없습니다.")
    except json.JSONDecodeError as e:
        print(f"[ERROR] JSON 파싱 실패: {e}")
    except Exception as e:
        print(f"[ERROR] 데이터베이스 삽입 중 오류 발생: {e}")

# MQTT 설정
client = mqtt.Client()
client.on_message = on_message  # 메시지 수신 시 호출될 콜백 함수 설정
try:
    client.connect(BROKER_ADDRESS, PORT)
    print(f"[INFO] MQTT 브로커에 성공적으로 연결되었습니다: {BROKER_ADDRESS}:{PORT}")
except Exception as e:
    print(f"[ERROR] MQTT 브로커 연결 실패: {e}")
    exit()

# 특정 토픽 구독
client.subscribe(TOPIC)
print(f"[INFO] MQTT 토픽 구독 중: {TOPIC}")

# MQTT 메시지 수신 대기 시작
try:
    client.loop_forever()
except KeyboardInterrupt:
    print("[INFO] 프로그램이 종료되었습니다.")
finally:
    # 종료 시 데이터베이스 닫기
    connection.close()
    print("[INFO] MariaDB 연결이 종료되었습니다.")
