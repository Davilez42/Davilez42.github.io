from flask import Flask,render_template,request,flash,redirect,url_for
from config import config
import json
import time as t
app = Flask(__name__)#obtengo un objeto  para iniciar un servidor

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/solucion',methods=['POST'])
def solu():
    dato = request.get_json(force=True)
    try:
        resultado = eval(dato['0'])
    except Exception as ex:
        return json.dumps({'status':False,'operacion':dato['0']},ensure_ascii=False)
    return json.dumps({ 'status':True,'operacion':resultado},ensure_ascii=False)


if __name__ == '__main__':
    app.config.from_object(config['development'])
    app.run(port=5000)