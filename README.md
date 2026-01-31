# AI-Powered E-Commerce Recommendation System

## Project Overview

Full-stack **MERN** e-commerce web app featuring **AI-driven product recommendations** based on user click history. Fetches 20 real products from a fake API, tracks user interactions, and recommends top 5 personalized suggestions using **Google Gemini AI**.

**Tech Stack:**
- **Frontend**: React.js
- **Backend**: Node.js, MongoDB
- **Data**: FakeStoreAPI (20 products)

## Features Implemented

- ✅ **Home Page**
- ✅ **Product Page**: Detailed views with click tracking
- ✅ **Recommendation Engine**: 
  - Tracks user clicks in MongoDB
  - AI analyzes history → Recommends 5 products
  - Dynamic product sorting
- ✅ **Real API Integration**: 20 products from fakestoreapi.com
- ✅ **User Tracking**: Previous clicks → Personalized recos

## Quick Start
### Clone & Install
```bash
git clone <your-repo-url>
cd ecommerce-reco-app

# Terminal 1: Backend
cd backend
node app.js  # http://localhost:5000

# Terminal 2: Frontend
cd frontend
npm start    # http://localhost:3000
