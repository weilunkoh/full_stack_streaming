# Use an official Miniconda image as the base image
FROM continuumio/miniconda3:latest

# Set the working directory in the container
WORKDIR /app

# add application code to /app
COPY . .

# Create the Conda environment
RUN conda env create -f conda_env_docker.yml

# Activate the Conda environment
SHELL ["conda", "run", "-n", "full_stack_streaming", "/bin/bash", "-c"]

# Expose the port that the Python app will run on
EXPOSE 5000

# Specify the command to run on container start
CMD ["conda", "run", "-n", "full_stack_streaming", "gunicorn", "--workers", "1", "--threads", "4", "-b", "0.0.0.0:5000", "app:app"]

