set version_num=%1
set image_name=full-stack-streaming-nginx
ECHO "Building full-stack-streaming-nginx version %version_num%"
docker build -t %image_name%:%version_num% .