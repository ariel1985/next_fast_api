from fastapi import FastAPI, File, UploadFile
import os

app = FastAPI()

# Ensure the 'data' folder exists
UPLOAD_PATH = "data"
os.makedirs(UPLOAD_PATH, exist_ok=True)

@app.get("/")
def read_root():
    return {"message": "Hello, World!"}

@app.post("/upload/")
async def upload_file(file: UploadFile = File(...)):
    file_location = os.path.join(UPLOAD_PATH, file.filename)
    with open(file_location, "wb") as f:
        f.write(await file.read())
    return {"message": f"File '{file.filename}' uploaded successfully!"}

