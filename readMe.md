# Creating a basic learning project using the MERN stack
<hr> 

### Getting the correct File Structure:

First, create the main directory. <br>
```$ mkdir mern-learning-project && cd mern-learning-project```

<br>

Initialize the React app called client. This will automatically create a new directory called 'client'. This directory will contain all the front-end React code. <br>
```$ npx create-react-app client```

<br>
Create another separate directory called 'server' to store all the server-side code.<br>

```$ cd ..``` <br>
```$ mkdir server && cd server``` <br>

We will also initialize ```package.json``` using: <br>
```npm init -y```


### Working on the Server Side code:

- Create ```server.js```. This will contain the backend driver code.
- Create ```config.env``` to store the constants like ```ATLAS_URI``` and ```PORT```.
- Create a new directory ```db``` which will contain the ```conn.js``` file. This file will contain the DB details and methods to connect to the DB.
- Create a new directory ```routes```. It will contain the ```record.js``` file. The ```record.js```  file will contain the route details to handle various requests and the service implementations for each of the cases.

### Working on the Client Side code:

- ```create-react-app``` does all the file creation work for us.
- We delete all the files inside ```src``` using this command: ```rm src/*```. And we create two new files - ```App.js``` and ```index.js``` inside the ```src``` directory.
- We also create a separate directory for components inside the ```src``` directory.


### Running the code on your local system:
- In a terminal instance, execute ```node server.js``` to run the backend server.
- In another terminal instance, run ```npm start``` to start the React frontend server.
- You should be redirected to your browser window, where the app will be deployed.

<hr>