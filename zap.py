from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

# Inicializa o driver do Chrome
driver = webdriver.Chrome()

# Abre o WhatsApp Web
driver.get("https://web.whatsapp.com/")
time.sleep(10)  # Espera 10 segundos para que o usuário possa escanear o código QR manualmente

# Seleciona o campo de pesquisa
search_box = driver.find_element_by_xpath('//div[@class="_2_1wd copyable-text selectable-text"]')
search_box.send_keys("66996693733" + Keys.ENTER)  # Substitua "Seu Nome" pelo nome do seu contato

# Espera um segundo antes de enviar a mensagem
time.sleep(1)

# Envia a mensagem
message_box = driver.find_element_by_xpath('//div[@class="_2_1wd copyable-text selectable-text"]')
message_box.send_keys("Olá, esta é uma mensagem automática!")  # Mensagem que você quer enviar
message_box.send_keys(Keys.ENTER)

# Fecha o navegador
driver.quit()
