import time
import math
from machine import ADC, Pin
from ETboard.lib.pin_define import *
from ET_IoT_App import ET_IoT_App, setup, loop
from ETboard.lib.OLED_U8G2 import *

# 글로벌 변수
R1 = 10000
c1 = 1.009249522e-03
c2 = 2.378405444e-04
c3 = 2.019202697e-07

sensor = ADC(Pin(A2))                                # 온도 센서 핀
solar_pin = ADC(Pin(A3))                             # 태양광 센서 핀
wind_pin = ADC(Pin(A5))                              # 풍력 센서 핀

c_value = 0.000806                                   # 전압 보정 값
board_firmware_verion = "newEnergy_0.92"

solar_power = 0                                      # 태양광 전압
wind_power = 0                                       # 풍력 전압
solar_max = 0                                        # 태양광 최댓값
wind_max = 0                                         # 풍력 최댓값
temperature = 0.0                                    # 온도값 (°C)

app = ET_IoT_App()                                   # IoT 앱 초기화
oled = oled_u8g2()                                   # OLED 초기화


def et_setup():
    sensor.atten(ADC.ATTN_11DB)                     # 온도 센서 입력 모드 설정
    solar_pin.atten(ADC.ATTN_11DB)                  # 태양광 센서 입력 모드 설정
    wind_pin.atten(ADC.ATTN_11DB)                   # 풍력 센서 입력 모드 설정


def et_loop():
    global solar_power, wind_power, solar_max, wind_max, temperature

    # 태양광 및 풍력 데이터 수집
    solar_value = solar_pin.read()
    solar_power = solar_value * c_value
    if solar_power > solar_max:
        solar_max = solar_power

    wind_value = wind_pin.read()
    wind_power = wind_value * c_value
    if wind_power > wind_max:
        wind_max = wind_power

    # 온도 데이터 수집
    Vo = sensor.read()
    R2 = R1 * (4095.0 / Vo - 1.0)
    logR2 = math.log(R2)
    T = (1.0 / (c1 + c2 * logR2 + c3 * logR2 * logR2 * logR2))
    temperature = T - 273.15


def display_information():
    global board_firmware_verion, solar_power, wind_power, temperature

    string_solar = "%0.2f" % solar_power
    string_wind = "%0.2f" % wind_power
    string_temp = "%0.2f" % temperature

    oled.clear()
    oled.setLine(1, board_firmware_verion)
    oled.setLine(2, 'solar: ' + string_solar + ' V')
    oled.setLine(3, 'wind: ' + string_wind + ' V')
    oled.setLine(4, 'temp: ' + string_temp + ' C')
    oled.display()


def send_message():
    global solar_power, wind_power, solar_max, wind_max, temperature

    app.add_sensor_data("solar", solar_power)
    app.add_sensor_data("wind", wind_power)
    app.add_sensor_data("solar_max", solar_max)
    app.add_sensor_data("wind_max", wind_max)
    app.add_sensor_data("temperature", temperature)
    app.send_sensor_data()


if __name__ == "__main__":
    setup(app, et_setup)
    while True:
        loop(app, et_loop, display_information, send_message)

