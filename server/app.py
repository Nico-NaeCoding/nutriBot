from flask import Flask, jsonify
from flask_cors import CORS
import os

def create_app():
    app = Flask(__name__)
    CORS(app, supports_credentials=True)

    @app.get("/health")
    def health():
        return jsonify(status="ok")

    return app

app = create_app()

if __name__ == "__main__":
    # 개발용 실행: python app.py
    app.run(host="0.0.0.0", port=int(os.getenv("PORT", 5000)), debug=True)
