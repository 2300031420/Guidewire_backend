from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

model = joblib.load("model.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json

    rain = data.get("rain", 0)
    temp = data.get("temp", 30)

    prediction = model.predict([[rain, temp]])

    premium = 10 + prediction[0]
    premium = max(10, min(50, premium))

    return jsonify({
        "premium": round(float(premium), 2)
    })

if __name__ == "__main__":
    print("Starting AI server...")
    app.run(port=5001, debug=True)