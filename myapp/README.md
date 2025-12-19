## What is Docker?

=> Docker is an open-source platform that enables developers to automate the deployment of application in an lightweight, portable containers. This containers package up everything an application needs to run, including libraries, dependencies and run-time environment. Ensuring that it can run consistently across different computing environments.

=> Docker allows you to encapsulate your application and dependencies in a single unit called container.
=> Containers are isolated from each other and from the underlying host system.

### Why should we use docker?

1. Docker simplifies the development, deployment and scaling the application in a consistent environment across different platform.
2. It enhance the collaboration among the teams by enabling the sharing of containerized application and dependencies.

### Image vs Container

<img src="/myapp/images/docker img vs container.png" width="700">

##### Here

1. Dockerfile is a specification or configuration like package.json i.e কি কি package install করা দরকার এই file এ বলা থাকবে।
2. This Dockerfile is used to create image which is worked as blueprint or you can say it's a zip file. You can run this blueprint to share applications.
3. When we run this image it will create container. You can run multiple container from one image.

<img src="/myapp/images/at_a_glance_image_vs_container.png" >

### Skeleton of Dockerfile

<img src="/myapp/images/skeleton_of_dockerfile.png">

1. Dockerfile is created in 3 steps
   -i. Base Image
   -ii. Configuration
   -iii. How to start the project

### Follow the live example

2.0 Created a server

3.0 Created a docker file (see the file Dockerfile and see the instruction there)

### Dockerfile Layers

<img src="/myapp/images/dockerfile_layers.png" width="900">

### Dockerfile Cached Layers

<img src="/myapp/images/dockerfile_cached_layers.png" width="900">

### Dockerfile Commands

<img src="/myapp/images/commands_or_instructions.png" width="900">

## QNA

Q: What is the main difference between docker image and docker container?

A: Docker image is a blueprint or template which is used to create container. Docker container is a runtime environment which is used to run the image.

Q: What is the purpose of the CMD instruction in a Dockerfile?
A: To define the default command to run when a container starts.

Q: Which Docker command is used to execute a command inside a running container?
A: Docker exec

Q: What is the main benefit of using Docker containers?
A: Simplified deployment process

Q: What is the purpose of the Dockerfile?
A: To define build steps for creating Docker images.

Q: What component of Docker is responsible for managing containers on a system?
A: Docker Daemon

What is the purpose of the Docker registry?
A: To share and distribute Docker images.

Q: What is the purpose of the WORKDIR instruction in a Dockerfile?
A: To set the working directory inside the container.

Q:What is the primary role of the Docker daemon?
A: It is responsible for managing docker containers on a system.
