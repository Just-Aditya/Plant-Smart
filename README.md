# PlantSmart

## Overview

PlantSmart is a smart agriculture application that uses machine learning and IoT to support crop recommendation and agricultural planning.

The system provides crop recommendations based on soil nutrient values (NPK), pH, geographical location, and seasonal parameters. It also uses historical temperature and rainfall data to generate environmental predictions.

The application integrates a React frontend, FastAPI backend, machine learning models, and ESP32-based soil sensor communication.

## Features

- Crop recommendation using soil nutrient values and geographical parameters.
- Temperature prediction using historical weather data.
- Rainfall prediction using historical rainfall data.
- Soil data acquisition through ESP32-based hardware integration.
- Backend APIs for processing inputs and generating predictions.
- React-based interface for interacting with the prediction system.

## Machine Learning

The project implements classification and regression models for agricultural predictions.

### Crop Recommendation

- Algorithm: Random Forest Classifier
- Number of estimators: 300
- Input parameters:
  - Nitrogen (N)
  - Phosphorus (P)
  - Potassium (K)
  - Soil pH
  - State
  - District
  - Year
  - Month

The model classifies suitable crops based on soil characteristics and geographical and seasonal information.

### Temperature Prediction

- Algorithm: Gradient Boosting Regressor
- Number of estimators: 300

Uses historical temperature and geographical data to predict temperature.

### Rainfall Prediction

- Algorithm: Gradient Boosting Regressor
- Number of estimators: 300

Uses historical rainfall and geographical data to predict rainfall.

## Hardware Integration

The hardware component uses an ESP32 microcontroller and soil sensors for data acquisition.

**Communication Configuration**

| Parameter | Value |
|---|---|
| Microcontroller | ESP32 |
| Interface | UART2 |
| RX Pin | GPIO 16 |
| TX Pin | GPIO 17 |
| DE Pin | GPIO 4 |
| RE Pin | GPIO 5 |
| Baud Rate | 9600 |
| Protocol | Modbus RTU |

## Technology Stack

| Component | Technology |
|---|---|
| Frontend | React.js |
| Backend | Python, FastAPI |
| Machine Learning | Scikit-learn |
| Classification | Random Forest |
| Regression | Gradient Boosting |
| Data Processing | Pandas, NumPy |
| Hardware | ESP32 |
| Communication | UART, RS485, Modbus RTU |

## Project Structure

```text
Plant-Smart/
│
├── backened/
│
├── frontened/
│
└── README.md
```

## Setup

### Clone the Repository

```bash
git clone https://github.com/Just-Aditya/Plant-Smart.git

cd Plant-Smart
```

### Backend

```bash
cd backened

python -m venv venv
```

Activate the virtual environment:

**Windows**
```bash
venv\Scripts\activate
```

**Linux / macOS**
```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start the backend using the configured FastAPI entry point.

### Frontend

```bash
cd frontened

npm install

npm run dev
```

