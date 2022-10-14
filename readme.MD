# 📝 Simple To Do List App
This app is developed in order to complete [Binar Mock Technical Test](https://drive.google.com/file/d/1Hnw4OQe3BaniXJuuLfEk5_qJ266lbyEa/view).

## Description
Simple to do list web-app with simple auth, task saved in database and you can access it by log into your account. **This is the 🔴 Back End Side (Express)**, you can directly move to 🔵 Front End Side's (React) repository by clicking this [link](https://github.com/pashateuku/binar-mock-fe). you can see the deployed app by reaching this [link](todo-binar-api.herokuapp.com/)

## How to Run
1.  Clone this repository
```
git@github.com:pashateuku/binar-mock-be.git
```

2.  Access the directory
```
cd binar-mock-be
```
3.  Duplicate  `.env.example` file and rename it with `.env`, fill the require variable (port and database config)
4.  Install required modules
```
npm install
```
5.  Create database and migrate models 
```
sequelize db:create
sequelize db:migrate
```
4.  Run the program
```
npm start
```

## Documentation
- You can read the online documentation by clicking this [link](https://documenter.getpostman.com/view/20557546/2s8479xb2T)
- You also can read and send the actual request on Postman by using Postman JSON File that listed in `postman` folder *(make sure to change the url if you run the project in the local server)* 
- Here is the basic explaination of the endpoints:

| No | Method | Path | Explaination |
|--|--|--|--|
| 1 |  `POST`  |  `/register`  | Register new account  |
| 2 |  `POST`  |  `/login`  | Login to your account |
| 3 |  `GET`  |  `/todo/:id`  | Show all task of user by id |
| 4 |  `POST`  |  `/todo/create`  | Create new task |
| 5 |  `POST`  |  `/todo/delete/:todo_id`  | Delete task |
| 6 |  `POST`  |  `/todo/update/:id`  | Update task |
| 7 |  `POST`  |  `/todo/toggle/:id`  | Toggle task status |
