from os import link
import requests
import json

db_link = 'https://unimetro---like-a-mozart-default-rtdb.firebaseio.com'

#Post
def Create_User(firts_name ,last_name, age):
    dados = {'Nome':firts_name,'UltimoNome': last_name,'Idade':age}
    request = requests.post(f'{db_link}/User/.json', data=json.dumps(dados))
    print(request)
    print(request.text)

#Get
def Search_user(firts_name):
    request = requests.get(f'{db_link}/User/.json')
    dic_request = request.json()
    for name in dic_request.items():
        User = dic_request[name]['Nome']
        if User == firts_name:
            print(name)
        
#Delete
def Delete_user(firts_name):
    request = requests.get(f'{db_link}/User/.json')
    dic_request = request.json()
    for id in dic_request:
        User = dic_request[id]['Nome']
        if User == firts_name:

            id_delete = id
            request = requests.delete(f'{db_link}/User/{id_delete}/.json')
        else:
            print("Not found")
        

    
    

    

        
