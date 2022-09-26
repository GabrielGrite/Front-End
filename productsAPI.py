import requests
import json

configs = dict()

db_link = 'https://unimetro---like-a-mozart-default-rtdb.firebaseio.com'

#Post
def Create_Product(name ,type, value):
    dados = {'Nome':name,'Tipo': type,'Valor':value}
    request = requests.post(f'{db_link}/Produtos/.json', data=json.dumps(dados))
    print(request)
    return request

#Get
def Search_products():
    request = requests.get(f'{db_link}/Produtos/.json')
    dic_request = request.json()
    return dic_request
     
#Delete
def Delete_products(name):
    request = requests.get(f'{db_link}/Produtos/.json')
    dic_request = request.json()
    for id in dic_request:
        Nome = dic_request[id]['Nome']
        if Nome == name:
            id_delete = id
            request = requests.delete(f'{db_link}/Produtos/{id_delete}/.json')
        else:
            print("Não Achou")

    print(request)
    return request

#Update
def Update_products(name):
    request = requests.get(f'{db_link}/Produtos/.json')
    dic_request = request.json()
    for id in dic_request:
        User = dic_request[id]['Nome']
        if User == name:
            id_delete = id
            request = requests.delete(f'{db_link}/Produtos/{id_delete}/.json')
        else:
            print("Not found")