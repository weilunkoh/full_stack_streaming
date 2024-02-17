from flask import Flask, request, Response
from flask_cors import CORS 
import time
import json

app = Flask(__name__)
# CORS(app) # Allow all origins
CORS(app, origins="http://localhost:3000")

@app.route('/stream_words', methods=['POST'])
def stream_words():
    input_text = request.form.get('text', '')

    # Split the input text into words
    words = input_text.split()

    def generate():
        for word in words:
            print(word)
            time.sleep(0.5)  # Simulate processing time
            yield word + " "

    return Response(generate(), content_type='application/json', status=200)

if __name__ == '__main__':
    app.run(debug=True)
