# AI Travel Planner

## Overview

AI Travel Planner is a full-stack web application that helps users generate personalized travel itineraries using Google's Gemini AI. Users can create, view, update, and delete trips while receiving AI-generated travel plans.

## Features

* User Authentication (JWT)
* AI-powered travel itinerary generation
* Create Trip
* View AI Travel Plan
* Edit Trip
* Delete Trip
* MongoDB database integration

## Tech Stack

### Frontend

* React.js
* Bootstrap
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Google Gemini AI API

## Installation

### Clone the repository

```bash
git clone https://github.com/Srs1111/Ai-travel-planner.git
```

### Install dependencies

Backend

```bash
cd backend
npm install
```

Frontend

```bash
cd frontend
npm install
```

### Environment Variables

Create a `backend/.env` file and add:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
```

### Run the project

Backend

```bash
npm start
```

Frontend

```bash
npm start
```

## Future Enhancements

* Download itinerary as PDF
* Weather forecast integration
* Google Maps integration
* Hotel recommendations
* Flight suggestions

## Author

**Suresh SR**
