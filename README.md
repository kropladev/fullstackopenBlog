1) Installation of nodes modules (based on package.json - if doesn't exist than will create one)
```shell
    npm init
````

3) Install `nodemon` module for automate fetch changes in dev code with deployed/run locally application
```shell
    npm install --save-dev nodemon
```

4) Install `express` module for ease of serving REST methods
```shell
    npm install express
```

5) Automation of the module starts
   package.json modification
```json
    "scripts": {
      "start": "node index.js",
      "dev": "nodemon index.js",
      "test": "echo \"Error: no test specified\" && exit 1"
    },
```

6) Install dotenv to store environment properties (like mongo connection URL)
```shell
    npm install dotenv
```

7) Install mongoose for connect to mongoDB
```shell
    npm install mongoose
```

8) Create `.env` file in root project directory. Here we will store env properties like MongoUrl. File should be removed from git (add it to .gitignore)
