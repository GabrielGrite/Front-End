import requests
import json

db_link = 'https://unimetro---like-a-mozart-default-rtdb.firebaseio.com'

#Post
def Create_Product(name ,type, value):
    dados = {'Nome':name,'Tipo': type,'Valor':value}
    request = requests.post(f'{db_link}/Produtos/.json', data=json.dumps(dados))
    print(request)
    print(request.text)

#Get
def Search_products(filter):
        request = requests.get(f'{db_link}/Produtos/.json')
        with open("Products.json") as json_file:
            dic_request = request.json()
            for name in dic_request:
                User = dic_request[name]['Nome']
                if User == filter:
                    print(name)
                else:
                    print("Not found")
            
        json.dumps(dic_request,indent=4)
        
#Delete
def Delete_products(filter):
    request = requests.get(f'{db_link}/Produtos/.json')
    dic_request = request.json()
    for id in dic_request:
        User = dic_request[id]['Nome']
        if User == filter:
            id_delete = id
            request = requests.delete(f'{db_link}/Produtos/{id_delete}/.json')
        else:
            print("Not found")

  

#Update
def Update_products(filter):
    request = requests.get(f'{db_link}/Produtos/.json')
    dic_request = request.json()
    for id in dic_request:
        User = dic_request[id]['Nome']
        if User == filter:
            id_delete = id
            request = requests.delete(f'{db_link}/Produtos/{id_delete}/.json')
        else:
            print("Not found")

    
    

    

        
