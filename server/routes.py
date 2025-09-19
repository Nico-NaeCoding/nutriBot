from flask import Blueprint, request, jsonify
import models

bp = Blueprint("api", __name__)


@bp.post("/profile")
def upsert_profile():
    data = request.get_json(silent=True) or {}

    prof = models.Profile.query.get(1)
    if not prof:
        prof = models.Profile(id=1)

    prof.gender = data.get("gender")
    prof.age = data.get("age")
    prof.height_cm = data.get("height_cm")
    prof.weight_kg = data.get("weight_kg")

    models.db.session.add(prof)
    models.db.session.commit()

    return jsonify(
        {
            "message": "시용자 정보 저장을 성공했습니다.",
            "profile": {
                "gender": prof.gender,
                "age": prof.age,
                "height_cm": prof.height_cm,
                "weight_kg": prof.weight_kg,
            },
        }
    )
