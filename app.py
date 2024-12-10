from flask import Flask, render_template
import pymysql

app = Flask(__name__)

# MariaDB 연결 설정
DB_HOST = "172.17.199.142"  # 라즈베리파이1의 IP
DB_USER = "root"
DB_PASSWORD = "1234"
DB_NAME = "sensor_data"

def get_latest_temperature():
    connection = pymysql.connect(
        host=DB_HOST,
        user=DB_USER,
        password=DB_PASSWORD,
        database=DB_NAME
    )
    cursor = connection.cursor()
    cursor.execute("SELECT temperature, timestamp FROM temperature_data ORDER BY id DESC LIMIT 1")
    result = cursor.fetchone()
    connection.close()
    return result

# 기본 페이지 (index.html)
@app.route('/')
def index():
    temperature, timestamp = get_latest_temperature()
    return render_template('index.html', temperature=temperature, timestamp=timestamp)

# 추천 페이지 (recommend.html)
@app.route('/recommend')
def recommend():
    temperature, timestamp = get_latest_temperature()  # 최근 온도값 가져오기
    return render_template('recommend.html', temperature=temperature, timestamp=timestamp)

# 메모 페이지 (memo.html)
@app.route('/memo')
def memo():
    return render_template('memo.html')

# 날씨 페이지 (weather.html)
@app.route('/weather')
def weather():
    return render_template('weather.html')

if __name__ == '__main__':
    app.run(debug=True)
