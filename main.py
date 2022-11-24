from flask import Flask , redirect , url_for , render_template, request, make_response, jsonify
import productsAPI
import userAPI

app = Flask(__name__)

@app.route("/products", methods=['GET'])
def products():
    try:
        produtos = productsAPI.Search_products()

        return make_response(
            jsonify(produtos)
        )
            
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

        return status.status_code
    except Exception as e:
        return str(e)


@app.route("/gerenciamento", methods=['POST'])
def gerenciamento_remove():
    try:
        if request.method == "POST":
            product = request.form.get("productsList")
            print(product)

            status = productsAPI.Delete_products(product)

        return status.status_code
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
                status = userAPI.Search_user(user,password)
                if status.status_code == 200:
                    status_msg = "Removido com sucesso"
                else:
                    status_msg = "Falha ao Remover"

        return redirect(url_for('.home'))
    except Exception as e:
        return str(e)


if __name__ == "__main__":
    app.run()