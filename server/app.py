from flask import Flask
from flask_cors import CORS
import models


def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///nutri.db"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    models.db.init_app(app)

    with app.app_context():
        models.db.create_all()

    from routes import bp

    app.register_blueprint(bp)
    return app


app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
