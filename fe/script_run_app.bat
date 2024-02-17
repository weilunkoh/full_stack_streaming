set version_num=%1
set image_name=full-stack-streaming-fe
ECHO "Running docker container for full-stack-streaming-fe version %version_num%"
docker run -d -p 3000:3000 --rm --name full-stack-streaming-fe %image_name%:%version_num% 