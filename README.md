# NextGen AI Studio

NextGen AI Studio is a MERN-based AI creator platform with multiple studio-style tools in one app.

Frontend: React + Vite + Tailwind CSS v4
Backend: Node.js + Express + MongoDB + Gemini APIs

## Current Feature Status

This table reflects the current codebase implementation.

| Feature | Frontend | Backend | Status |
|---|---|---|---|
| User Authentication (register/login/protected routes) | Done | Done | Working |
| Caption Studio (upload image + AI captions + history) | Done | Done | Working |
| Image Studio | Done | Partial | In progress |
| Video Studio | Done | Not wired in server entry | In progress |
| YouTube Thumbnail Studio | UI prototype | Controller exists but not wired | In progress |
| Resume Builder | UI prototype | Not implemented | In progress |
| Resume Analyzer | Placeholder page | Not implemented | In progress |

## Project Structure

```text
NextGenAIStudio/
├─ client/
│  ├─ src/
│  │  ├─ components/
│  │  │  ├─ features/
│  │  │  │  ├─ imagecaption/
│  │  │  │  ├─ imagegeration/
│  │  │  │  ├─ resumeAnalysis/
│  │  │  │  ├─ resumeBuilder/
│  │  │  │  ├─ videogenration/
│  │  │  │  └─ ytThumbnail/
│  │  │  └─ UI/
│  │  ├─ context/
│  │  ├─ pages/
│  │  │  ├─ owner/
│  │  │  └─ *.jsx
│  │  ├─ App.jsx
│  │  └─ main.jsx
│  ├─ public/
│  └─ package.json
├─ server/
│  ├─ src/
│  │  ├─ configs/
│  │  ├─ controllers/
│  │  ├─ middlewares/
│  │  ├─ models/
│  │  └─ routes/
│  ├─ index.js
│  └─ package.json
└─ README.md
```

## Tech Stack

- React 19, Vite 7, Tailwind CSS 4
- React Router, Axios, Motion, React Hot Toast
- Node.js, Express 5
- MongoDB + Mongoose
- Cloudinary (media upload)
- Gemini APIs (image/caption generation)

## API Routes (Currently Mounted)

Base prefix from server: `/api`

### User Routes

- `POST /api/user/register`
- `POST /api/user/login`
- `POST /api/user/handlecredit` (protected)
- `GET /api/user/data` (protected)

### Image Routes

- `POST /api/image/generate-image` (protected)
- `GET /api/image/get-images` (protected)
- `GET /api/image/default-images`

### Caption Routes

- `POST /api/caption/upload` (protected, multipart image upload)
- `POST /api/caption/generate-caption` (protected)
- `GET /api/caption/user-captions` (protected)

Note: Video and thumbnail-related routes/controllers exist in the codebase but are not currently mounted in `server/index.js`.

## Environment Variables

### Client: `client/.env`

```env
VITE_BASE_URL=http://localhost:5000/api
```

### Server: `server/.env`

```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

## Local Setup

### 1) Install dependencies

```bash
cd client && npm install
cd ../server && npm install
```

### 2) Configure environment files

- Create `client/.env` and `server/.env` using the templates above.

### 3) Run backend

```bash
cd server
npm run dev
```

### 4) Run frontend

```bash
cd client
npm run dev
```

Frontend defaults to Vite dev server and backend runs on port `5000` unless overridden.

## Available Scripts

### Client

- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run lint`

### Server

- `npm run dev`
- `npm start`

## Notes

- `server/server.js` and some route/controller files are currently empty placeholders.
- For production hardening, add centralized validation, rate limiting, and stronger error handling across all routes.
