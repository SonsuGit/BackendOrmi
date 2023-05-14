import requests
from bs4 import BeautifulSoup

response = requests.get('http://www.paullab.co.kr/stock.html')

response.encoding = 'utf-8'
html = response.text

soup = BeautifulSoup(html, 'html.parser')

table = soup.select('.table-hover')[0]
data = table.select('tbody > tr > td.num')
volume = []

for i in range(5, len(data), 6):
    s = data[i].text
    volume.append(int(s.replace(",",'')))

print(sum(volume))