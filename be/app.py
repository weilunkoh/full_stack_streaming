from flask import Flask, request, Response
from flask_cors import CORS 
import time
import json
import os
from dotenv import load_dotenv

load_dotenv()  # take environment variables from .env.

app = Flask(__name__)
# CORS(app) # Allow all origins
CORS(app, origins=os.getenv("FE_URL"))

@app.route('/stream_words', methods=['POST'])
def stream_words():
    input_text = request.form.get('text', '')

    # Split the input text into words
    words = input_text.split()

    def generate():
        for word in words:
            time.sleep(0.25)  # Simulate processing time
            yield word

    return Response(generate(), content_type='application/json', status=200)

if __name__ == '__main__':
    app.run(debug=True)
