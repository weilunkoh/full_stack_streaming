set version_num=%1
set image_name=full-stack-streaming-be
ECHO "Running docker container for full-stack-streaming-be version %version_num%"
docker run -d -p 5000:5000 --name full-stack-streaming-be --env-file .env %image_name%:%version_num% 