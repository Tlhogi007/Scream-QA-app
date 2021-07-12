# Scream-QA-app
A Node.js Express social media Rest API using MongoDB. 

## Description
Build a real-world social media app REST API with login, register, and all CRUD operations and learn how to use MongoDB models with Node.js routers.

## Getting Started

### Dependencies
* [bycrpt](https://www.npmjs.com/package/bcrypt)
* [express](https://www.npmjs.com/package/express)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [mongoose](https://www.npmjs.com/package/mongoose)
* [nodemon](https://www.npmjs.com/package/nodemon)
* [helmet](https://www.npmjs.com/package/helmet)
* [morgan](https://www.npmjs.com/package/morgan)

## Usage

Get into the server directory

```
cd server
```

then install the dependencies

```
npm install
```

then start server 

```
npm start

```
Server will run on [http://localhost:8080](http://localhost:8080)

## Authentication Routes
To register a new user and login.

|METHOD| URL ENDPOINTS|
|---|---|
|POST| Register : http://localhost:8080/api/auth/register |
|POST| Login :  http://localhost:8080/api/auth/login |

### Authentication Body Request In Json Format
#### Register User
```
{
    "username":"masego",
    "email":"masego@gmail.com",
    "password":"123456"
}
```

#### Login User
```
{
    "email":"masego@gmail.com",
    "password":"123456"
}
```

## User Routes
To update user, get user , delete user , follow user, and unfollow user

|METHOD| URL ENDPOINTS|
|---|---|
|PUT| Update User With id : http://localhost:5000/api/users/60e7128858a6f5491c3d041d |
|GET| Get User with id : http://localhost:5000/api/users/60e7128858a6f5491c3d041d |
|DELETE| Delete User with id : http://localhost:5000/api/users/60e7128858a6f5491c3d041d |
|PUT| Follow User with id: http://localhost:5000/api/users/60e708270c76ec0c584e4f90/follow |
|PUT| Unfollow User with id: http://localhost:5000/api/users/60e708270c76ec0c584e4f90/unfollow |

#### Update User

Pass the user id on the url request and also pass it as a parameter in your json request
e.g 
```
{
   "desc":"Account updated",
   "userId":"60e7128858a6f5491c3d041d"
}
```

#### Delete User
```
{
   "userId":"60e7128858a6f5491c3d041d"
}
```

##### Follow User
To follow another user, make sure there are two user already registered then pass your user id in the url parameters, then
pass the user you want to follow in the json request
e.g

```
  http://localhost:5000/api/users/60e708270c76ec0c584e4f90/follow 
```

```
{
    //User to follow
    "userId":"60e708270c76ec0c584e4f90"
}
```

#### Unfollow User
To unfollow another user, make sure there are two user already registered then pass your user id in the url parameters, then
pass the user you want to follow in the json request
e.g

```
  http://localhost:5000/api/users/60e708270c76ec0c584e4f90/follow 
```

```
{
    //User to unfollow
    "userId":"60e708270c76ec0c584e4f90"
}
```

