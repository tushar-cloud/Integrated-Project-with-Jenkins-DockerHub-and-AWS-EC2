# Integrated Project with Jenkins DockerHub and AWS(EC2)

A web application that uses Jenkins for CI/CD pipeline to automatically pull code from GitHub, build images on Docker Hub and, deploy it to Amazon Elastic Compute Cloud (EC2).

1. Set up a Github repository for the project and commit code to it.
2. Launch an AWS EC2 instance and install Dokcer and Jenkins on it.
3. Install the necessary plugins in Jenkins for building and deploying Docker images.
   - Recommanded Plugins: Git, Git Client, Docker API, Docker, Pipeline plugin, AWS EC2 etc.
4. Create a new Jenkins pipeline job and configure it to pull the code from Github repository.
5. Write a Jenkinsfile to define the pipeline stages and steps for building and deploying the web application.
6. Install Docker on the EC2 instance and configure it to allow Jenkins to access Docker commands.
7. Write a Dockerfile to define the Docker image for the web application.
8. Use the Docker plugin in Jenkins to build the Docker image and push it to a Docker Hub.
9. Use the AWS EC2 plugin in Jenkins to deploy the Docker image to an EC2 instance.
10. Set up a webhook in Github to trigger the Jenkins pipeline job on code changes.
