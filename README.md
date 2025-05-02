# Simple Video Upload Web App
GitHub Repository: [next_fast_api](http://github.com/ariel1985/next_fast_api)

## Goal
**Basic web application for uploading video files using Next.js for the frontend and FastAPI for the backend.**
This project demonstrates a simple integration between a React-based frontend and a Python-based backend.

## Table of Contents
- **frontend** (Next.js) - Handles the user interface, including a form for uploading videos.
- **backend** (FastAPI) - Processes and saves uploaded video files.
- **data** (for uploaded videos) - Stores the uploaded video files.

## Features
- A simple web form to upload video files.
- Backend API to handle file uploads and save them to the file system.
- Frontend built with Next.js, supporting client-side interactivity.

## Setup

### Prerequisites
- Node.js and npm installed (for the frontend).
- Python 3 and pip installed (for the backend).

### Steps
1. Clone or download this repository:
   ```bash
   git clone <repository-url>
   cd next_fast_api
   ```

2. Navigate to the frontend directory and install dependencies:
   ```bash
    cd frontend
    npm install
    ```
3. Navigate to the backend directory and install dependencies:
    ```bash
    cd backend
    pip install -r requirements.txt
    ```
    or 
    ```bash
    pip install fastapi uvicorn
    ```
4. Create a directory for uploaded videos:
    ```bash
    mkdir data
    ```
5. Start the backend server:
    ```bash
    cd backend
    uvicorn main:app --reload
    ```
    To test:
    ```bash
    curl -X POST "http://localhost:8000/upload/" -F "file=@/home/username/image.png"
    ```
    Replace `path_to_your_video_file` with the absolute or relative path to a video file on your system. For example, if the video file is in the same directory as the backend folder, you can use a relative path like `./example_video.mp4`.
    You should see a response indicating the file was uploaded successfully.
    `

6. Start the frontend server:
    ```bash
    cd frontend
    npm run dev
    ```
7. Open your browser and go to `http://localhost:3000` to access the web app.

## Usage
1. Open the web app in your browser.
2. Use the form to select a video file and click "Upload".
3. The video will be uploaded to the backend and saved in the `data` directory.
4. You can check the console for any errors or logs during the upload process.

## Notes
- Ensure that the backend server is running before starting the frontend server.
- The uploaded video files will be saved in the `data` directory.

## Folder structure
```
next_fast_api/
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── data/
├── frontend/
│   ├── pages/
│   │   ├── index.js
│   │   └── api/
│   ├── public/
│   ├── styles/
│   ├── package.json
│   └── next.config.js
└── README.md
```
