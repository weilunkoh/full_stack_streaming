# Use an official Miniconda image as the base image
FROM continuumio/miniconda3:latest

# Set the working directory in the container
WORKDIR /app

# add application code to /app
COPY . .


# Create a Conda environment and activate it
RUN conda env create -f conda_env_docker.yml && \
    conda init bash && \
    echo "source activate $(head -1 conda_env_docker.yml | cut -d' ' -f2)" > ~/.bashrc

# Expose the port that the Python app will run on
EXPOSE 5000

# Specify the command to run on container start
CMD ["bash", "-c", "source activate $(head -1 conda_env_docker.yml | cut -d' ' -f2) && gunicorn --workers 1 --threads 4 -b 0.0.0.0:5000 app:app"]

