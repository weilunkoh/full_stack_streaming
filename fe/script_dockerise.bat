set version_num=%1
set image_name=full-stack-streaming-fe
ECHO "Building full-stack-streaming-fe version %version_num%"
docker build -t %image_name%:%version_num% .