# NextGen AI Studio

NextGen AI Studio is a MERN-based AI creator platform with multiple studio tools in one app. The client is built with React + Vite + Tailwind CSS v4, and the backend uses Node.js, Express, MongoDB, Cloudinary, and Gemini APIs.

## What Is Implemented

The codebase currently includes:

- User authentication with register, login, protected profile data, and credit handling
- Caption Studio for image upload, AI caption generation, and caption history
- Image Studio for AI image generation and image history
- Resume Builder with a protected create flow on the backend
- Resume Analyzer and Video/Thumbnail pages as work-in-progress surfaces in the client

## Repo Layout

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
- Cloudinary for media upload
- Gemini APIs for AI generation

## Mounted API Routes

Base prefix: `/api`

### User

- `POST /api/user/register`
- `POST /api/user/login`
- `POST /api/user/handlecredit` - protected
- `GET /api/user/data` - protected

### Image

- `POST /api/image/generate-image` - protected
- `GET /api/image/get-images` - protected
- `GET /api/image/default-images`

### Caption

- `POST /api/caption/upload` - protected, multipart image upload
- `POST /api/caption/generate-caption` - protected
- `GET /api/caption/user-captions` - protected

### Resume

- `POST /api/resume` - protected

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
CLOUDINARY_API_KEY=your_cloud_key
CLOUDINARY_API_SECRET=your_cloud_secret
```

## Local Setup

1. Install dependencies

```bash
cd client && npm install
cd ../server && npm install
```

2. Create the environment files shown above.

3. Start the backend

```bash
cd server
npm run dev
```

4. Start the frontend

```bash
cd client
npm run dev
```

The frontend runs on the Vite dev server, and the backend listens on port `5000` unless overridden.

## Scripts

### Client

- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run lint`

### Server

- `npm run dev`
- `npm start`

## Notes

- `server/index.js` is the active server entry point.
- `server/src/routes/video.routes.js` is currently empty, and thumbnail functionality is not mounted yet.
- The project is functional, but production hardening still needs centralized validation, rate limiting, and stronger error handling.
