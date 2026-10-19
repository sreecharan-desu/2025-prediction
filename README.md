# 2025-prediction

a playful 2025 predictions board.

## stack

react + vite + tailwind css frontend · express + mongodb (mongoose) api

## run locally

needs node 20.6+.

```bash
cd backend && npm install && cp .env.example .env && node --env-file=.env index.js
cd frontend && npm install && npm run dev
```

## env

copy `backend/.env.example` to `backend/.env` and set `MONGODB_URI`.
