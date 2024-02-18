# full_stack_streaming
[Next.js](https://nextjs.org/) frontend and Python Flask backend for a simple streaming application with Nginx reverse proxying.

## Pre-requisites

**Frontend**
- Install Node Package Manager (NPM): https://www.npmjs.com/package/npm
- Install Yarn: https://classic.yarnpkg.com/lang/en/docs/install/ 
- Run the following command to install the packages used by the web app:
    ```bash
    yarn install
    ```

**Backend**
- Install [Miniconda](https://docs.anaconda.com/free/miniconda/index.html).
- Create a new `Python 3.10` environment via [Conda](https://towardsdatascience.com/a-guide-to-conda-environments-bc6180fc533) by running the following command that creates an environment and installs Python packages.
  ```bash
  conda env create -f ./conda-env.yml
  ```

  If there are subsequent changes to the pip requirements, the following command can be used to update the environment.
  ```bash
  conda env update -f ./conda-env.yml
  ```

**Docker**
- Set up Docker on your local environment with [Rancher Desktop](https://docs.rancherdesktop.io/getting-started/installation/). 
- Docker is needed wrap the various applications into Docker images and run the Docker images as containers.

## Running The Codes Locally

**Frontend**

The Next.js web app can be run via the following command after setting up the environment as stated in the pre-requisites:
```bash
yarn dev
```

**Backend**

The Flask REST API app can be run via the following command in the conda environment:
```bash
  python app.py
```
The Flask app can then expose REST APIs at `localhost:5000` for the frontend web app to invoke.

## Docker Scripts

**Full Stack Deployment**
- Overview
    - Docker compose is used to start and stop multiple containers at the same time in the same Docker network.
    - Nginx is used for reverse proxying such that all traffic will route to the frontend container `fe` while all other traffic with `/api/` will route to the backend container `be` as defined in `default.conf` in the `nginx` folder.
    - With this set up, the application has a unified appearance even though the underlying applications are separate and written in different languages. 
    - There is also no need to map ports from frontend container `fe` and backend container `be` to the machine. Just mapping the nginx container will do as defined in  `docker-compose.yml`. 
- script_run_apps.bat
  - This script runs the various containers required by the project via Docker compose.
  - Update the tag numbers of the various images accordingly before running this script.
  - If the required Docker images do not exist, this script will also build the required Docker images.
  - Docker images can also be built via the below standalone scripts.
  - This script can be run by simply calling:
    ```bash
    script_run_apps.bat
    ```
- script_stop_apps.bat
  - This script stops the various containers used by the project via Docker compose.
  - This script can be run by simply calling:
    ```bash
    script_stop_apps.bat
    ```

**Frontend Standalone**
- Before Dockerising for purposes that do not use Nginx, update `next.config.mjs` with the appropriate backend URL for the web app to invoke REST APIs from the correct endpoint host.
- script_dockerise.bat

  This script is for building a Docker image. To use this script, run the following command with a specified tag number.
  ```bash
  script_dockerise.bat <version no.>
  #e.g. script_dockerise.bat 0.0.1
  ```
  This script saves a Docker image on the local registry.
- script_run_app.bat

  This script runs the earlier created Docker image from the local Docker registry as a Docker container on the local machine. The container name for the created container is `full-stack-streaming-fe`. To use this script, run the following command with a specified tag number.
  ```bash
  script_run_app.bat <version no.>
  #e.g. script_run_app.bat 0.0.1
  ```
  The Next.js web app can then be viewed on the browser at `localhost:3000`.

- script_stop_app.bat

  This script stops the container created from the earlier run script. To use this script, run the following command.
  ```bash
    script_stop_app.bat
  ```
  No tag number is needed as compared to the other scripts because the container is stopped based on the container name of `full-stack-streaming-fe`.

**Backend Standalone**

- script_dockerise.bat

  This script is for building a Docker image for the Python Flask app. To use this script, run the following command with a specified tag number.
  ```bash
  script_dockerise.bat <version no.>
  #e.g. script_dockerise.bat 0.0.1
  ```
  This script saves a Docker image on the local registry.
- script_run_app.bat

  This script runs the earlier created Docker image from the local Docker registry as a Docker container on the local machine. The container name for the created container is `full-stack-streaming-be`. To use this script, run the following command with a specified tag number.
  ```bash
  script_run_app.bat <version no.>
  #e.g. script_run_app.bat 0.0.1
  ```
  The Next.js web app can then be viewed on the browser at `localhost:5000`.

- script_stop_app.bat

  This script stops the container created from the earlier run script. To use this script, run the following command.
  ```bash
    script_stop_app.bat
  ```
  No tag number is needed as compared to the other scripts because the container is stopped based on the container name of `full-stack-streaming-be`.

**Nginx Standalone**

- script_dockerise.bat

  This script is for building a Docker image for the Nginx app. To use this script, run the following command with a specified tag number.
  ```bash
  script_dockerise.bat <version no.>
  #e.g. script_dockerise.bat 0.0.1
  ```