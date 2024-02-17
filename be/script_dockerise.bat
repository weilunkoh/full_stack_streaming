set version_num=%1
set image_name=full-stack-streaming-be
ECHO "Building full-stack-streaming-be version %version_num%"
docker build -t %image_name%:%version_num% .