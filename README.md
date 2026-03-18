#  GigShield — AI-Powered Parametric Insurance for Gig Workers

## Problem

Gig workers (delivery riders, drivers, etc.) lose income due to:

* Heavy rain
* Pollution
* Heatwaves
* Curfews / lockdowns

Traditional insurance:

* Requires manual claims
* Slow processing
* Covers assets, not income

---

##  Solution

**GigShield** is an **AI-powered parametric insurance system** that:

✔ Automatically detects real-world disruptions
✔ Calculates dynamic weekly premiums using AI
✔ Triggers instant claims without user intervention
✔ Prevents fraud using smart validation
✔ Simulates real-time payouts

---

## ⚙️ How It Works

```text
User → AI Premium → Policy → Trigger Detection → Claim → Fraud Check → Payout
```

###  Flow

1. User registers (city-based)
2. AI model calculates **weekly premium**
3. Policy is created
4. System monitors disruptions (weather, curfew, etc.)
5. If trigger occurs:

   * Claim is automatically generated
   * Fraud checks applied
   * Payout processed instantly

---

##  AI Integration

We use a **Machine Learning model (Linear Regression)** to:

* Predict risk based on:

  * Rainfall 
  * Temperature 
* Dynamically calculate **weekly premium**

```text
Higher Risk → Higher Premium  
Lower Risk → Lower Premium
```

Example:

| City      | Condition    | Premium |
| --------- | ------------ | ------- |
| Hyderabad | Normal       | ₹15–20  |
| Mumbai    | Rain / Flood | ₹30–40  |

---

##  Key Features

###  AI-Powered Pricing

* Dynamic premium calculation
* Real-time adaptation to weather conditions

###  Multi-City Support

* Works across multiple locations
* City-based risk evaluation

###  Parametric Triggers

*  Rain
*  Heatwave
*  Pollution
*  Curfew

###  Fraud Detection

* Duplicate claim prevention
* Weather validation
* Rate limiting

###  Instant Payout Simulation

* Automatic claim → payout flow
* No manual intervention

###  Analytics Dashboard API

* Total users
* Total claims
* Total payouts

---

##  Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB Atlas

### AI Model

* Python
* Flask API
* Scikit-learn (Linear Regression)

### Integration

* Axios (Node ↔ AI communication)

---

##  API Endpoints

###  User

```http
POST /api/users/register
```

###  Policy (AI Powered)

```http
POST /api/policies/create
```

###  Weather Trigger

```http
GET /weather/:city
```

###  Test Trigger (Demo)

```http
GET /test-trigger
```

###  Analytics

```http
GET /api/admin/stats
```

---

##  Example API Response

### Policy Creation

```json
{
  "message": "Policy created using AI",
  "premium": 18.04
}
```

---

##  Running the Project

### 1️ Backend

```bash
npm install
npm run dev
```

---

### 2️ AI Server

```bash
cd ML
pip install -r requirements.txt
python app.py
```

---

##  Demo Flow

1. Register user
2. Create policy → AI premium shown
3. Trigger disruption (`/test-trigger`)
4. Claim auto-created
5. Fraud detection blocks duplicates
6. Payout processed
7. Analytics displayed

---

##  Why GigShield Stands Out

✔ Fully automated (no manual claims)
✔ AI-driven pricing
✔ Real-time disruption detection
✔ Instant payouts
✔ Built for gig economy

---

##  Impact

* Protects **daily income** of gig workers
* Removes claim friction
* Enables **financial resilience**

---

##  Key Idea

> **“We insure income, not assets — and we do it automatically.”**

---

##  Author

Built for hackathon innovation 
