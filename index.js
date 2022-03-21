import urllib, urllib.request, http.client
import time
import json
import sys
# эти модули нужны для генерации подписи API
import hmac, hashlib

# ключи API, которые предоставила exmo
API_KEY = ''
# обратите внимание, что добавлена 'b' перед строкой
API_SECRET = b''

# Тонкая настройка
CURRENCY_1 = 'BTC' 
CURRENCY_2 = 'USD'

CURRENT_PAIR = CURRENCY_1 + '_' + CURRENCY_2
