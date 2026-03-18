import numpy as np
from sklearn.linear_model import LinearRegression
import joblib

# Fake training data
X = [
 [0.1, 28],
 [0.3, 32],
 [0.5, 35],
 [0.7, 38],
 [0.9, 42],
 [1.0, 45]
]

y = [12, 18, 22, 28, 35, 40]  # weekly premium

model = LinearRegression()
model.fit(X, y)

joblib.dump(model, "model.pkl")