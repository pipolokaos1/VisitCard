from flask import Flask, send_file, Response
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.after_request
def add_header(response):
    response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
    response.headers['Pragma'] = 'no-cache'
    response.headers['Expires'] = '0'
    return response

@app.route('/')
def serve_html():
    return send_file('index.html')

@app.route('/app.jsx')
def serve_jsx():
    with open('app.jsx', 'r', encoding='utf-8') as file:
        content = file.read()
        return Response(content, mimetype='text/babel')

if __name__ == '__main__':
    app.run(debug=True, port=5002)
