from flask import Flask , redirect , url_for , render_template, request
import productsAPI
import userAPI

app = Flask(__name__)

@app.route("/")
def index():
    return redirect(url_for('.home'))

@app.route("/home")
def home():
    try:
        return render_template('Home.html' , title="Bem vindo!")
    except Exception as e:
        return str(e)

@app.route("/about")
def about():
    try:
        return render_template('About.html' , title="About Us")
    except Exception as e:
        return str(e)

@app.route("/products")
def products():
    try:
        produtos = productsAPI.Search_products()

        return render_template('Produtos.html' , title="Products", content=produtos)
    except Exception as e:
        return str(e)

@app.route("/gerenciamento")
def gerenciamento():
    try:
        return render_template('Gerenciamento.html' , title="Gerenciamento",content = "")
    except Exception as e:
        return str(e)

@app.route("/gerenciamento", methods=['POST'])
def gerenciamento_add():
    try:
        if request.method == "POST":
            # getting input with name = fname in HTML form
            first_name = request.form.get("fnameADD")
            # getting input with name = lname in HTML form
            type = request.form.get("typeADD")
            # getting input with name = lname in HTML form
            value = request.form.get("valueADD")
            if first_name != "" and type != "" and value != "":
                status = productsAPI.Create_Product(first_name,type,value)
                if status.status_code == 200:
                    status_msg = "Cadastrado com sucesso"
                else:
                    status_msg = "Falha ao cadastrar"

        return redirect(url_for('.gerenciamento'))
    except Exception as e:
        return str(e)

@app.route("/gerenciamento", methods=['POST','GET'])
def gerenciamento_remove():
    try:
        if request.method == "POST":
            # getting input with name = fname in HTML form
            first_name = request.form.get("fnameRemove")
            # getting input with name = lname in HTML form
            type = request.form.get("typeRemove")
            # getting input with name = lname in HTML form
            value = request.form.get("valueRemove")

            if first_name != "" and type != "" and value != "":
                status = productsAPI.Delete_products(first_name,type,value)
                if status.status_code == 200:
                    status_msg = "Removido com sucesso"
                else:
                    status_msg = "Falha ao Remover"

        return redirect(url_for('.gerenciamento'))
    except Exception as e:
        return str(e)

@app.route("/login")
def login():
    try:
        return render_template('Login.html' , title="Login")
    except Exception as e:
        return str(e)

@app.route("/login", methods=['POST'])
def login_post():
    try:

        if request.method == "POST":
            # getting input with name = fname in HTML form
            user = request.form.get("email")
            # getting input with name = lname in HTML form
            password = request.form.get("pass")

            if user != "" and password != "":
                status = productsAPI.Delete_products(user,password)
                if status.status_code == 200:
                    status_msg = "Removido com sucesso"
                else:
                    status_msg = "Falha ao Remover"

        return redirect(url_for('.home'))
    except Exception as e:
        return str(e)


if __name__ == "__main__":
    app.run()