# 3.0 Created a docker file

# Following are the steps according to the picture
# 3.1. Base Image
FROM node:latest

# 3.2. Preparation Command/ Settings

# 3.2.1 working directory will be app in docker i.e if we run anything it will run in /app route in docker
WORKDIR /app

# 3.2.2 copy the package.json and package-lock.json and run in /app route which is declared by (./)
COPY package*.json ./ 

# 3.2.3 as package.json file is copied so we will run npm Command
RUN npm install

#  3.2.4 as we also need the source code so we will copy the source code using the Command "COPY . ."

# but the problem is from the upper Command it will also copy the node_modules so to igonre it we will create .dockerignore 


COPY . .

# 3.2.5 define the port using EXPOSE
EXPOSE 3000

# 3.3. Startup Command (Final command to run the application) which is CMD and give the command in an array. as we run in terminal node index.js but here we will split it like following
CMD [ "node", "index.js" ]

# 3.4 Now in terminal run the command "docker build -t myapp ."

#  3.5 after build run the command "docker run -it -p 3001:3000 myapp" here "-it" is for interactive terminal, "-p 3001:3000" is for port mapping and "3001" is the Port on your computer (host) and "3000" is the Port inside the Docker container and "myapp" is the name of the image. Now in your browser go to "http://localhost:3001/" you will find "Ok"

# Note: If u run multiple container from one image then run the command "docker run -it -p 3002:3000 myapp" multiple times. Now in your browser go to "http://localhost:3002/" you will find "Ok".

#  Now to stop the container run the command go to the VS code container extension and click on the container and click on the "Stop" button or open the docker desktop and click on the container and click on the "Stop" button
