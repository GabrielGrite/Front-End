import userAPI
import productsAPI

class API:
    
    def __init__(self):
        self.Search_Prod("Baixo")

    
    def Create_User(self,firts_name ,last_name, age):
        userAPI.Create_User(firts_name ,last_name, age)

    #-----------------------------------
    
    def Search_User(self,firts_name):
        userAPI.Search_user(firts_name)

    #-----------------------------------

    def Delete_User(self,firts_name):
        userAPI.Delete_user(firts_name)

    #===================================

    def Create_Prod(self,name ,type, value):
        productsAPI.Create_Product(name ,type, value)

    #-----------------------------------

    def Search_Prod(self,filter):
        productsAPI.Search_products(filter)

    #-----------------------------------

    def Delete_Prod(self,filter):
        productsAPI.Delete_products(filter)

    #-----------------------------------

    def Update_Prod(self,filter):
        productsAPI.Update_products(filter)


if __name__ == '__main__':
   API()
    

