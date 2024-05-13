# User CRUD Application

This is a simple Express.js application that provides CRUD (Create, Read, Update, Delete) operations for managing user data. The application uses MongoDB as the database.

## Table of Contents

1. [Introduction](#introduction)
2. [Setup](#setup)
3. [Project Structure](#project-structure)
4. [Database Configuration](#database-configuration)
5. [API Endpoints](#api-endpoints)
    - [Create User](#create-user)
    - [Get Users](#get-users)


## Introduction

This application allows you to perform Formulir operation operations on user data through a set of RESTful API endpoints. It uses sqlite for data storage, and for the frontend i cerate it using next JS

## Setup

1. **Install Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

2. **Clone the Repository**: Clone this repository to your local machine.

3. **Install Dependencies**: Navigate to the project directory and run:
   ```bash
   npm install

   node app.js
   
4. **Test API**: use A postman and test it in port 8001.

## Project Structure

```bash
    user-crud-app/
    ├── app.js
    ├── config/
    │   └── database.js
    ├── controllers/
    │   └── userController.js
    ├── models/
    │   └── users.js
    ├── node_modules/
    ├── resources/
    │   └── views/
    ├── routers/
    │   └── users.js
    ├── uploads/
    ├── database.sqlite
    ├── package.json
    └── README.md

```

## Database Configuration

    
    const Sequelize = require('sequelize');

    const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: './database.sqlite'
    });
    module.exports = sequelize;

## API Endpoints

### Create User
```
    
URL: /api/users
Method: POST
Description: Create a new user.
Request Body:
formdata
Copy code
{
   'reksa','email' => 'reksa@gmail.com',
   'phone' => '0895331493506',
   'about' => 'reksadasdasdsa',
   'birth' => '10-12-2004',
   'cover'=> new CURLFILE('/Downloads/contoh-banner-17-agustus-2022-link-download-dan-filosofi-logo-1_169.jpeg'),
   'thumb'=> new CURLFILE('/Downloads/contoh-banner-17-agustus-2022-link-download-dan-filosofi-logo-1_169.jpeg'
}
```

### Get Users
```
URL: /api/users
Method: GET
Description: Retrieve all users.
Response:
[
    {
        "id": 1,
        "name": "reksa",
        "thumb": "thumb-1715529034345.jpeg",
        "about": "reksadasdasdsa",
        "cover": "cover-1715529034345.jpeg",
        "email": "reksa@gmail.com",
        "phone": "0895331493506",
        "birth": "2004-10-11T17:00:00.000Z",
        "createdAt": "2024-05-12T15:50:34.356Z",
        "updatedAt": "2024-05-12T15:50:34.356Z",
        "thumbUrl": "/uploads/thumb-1715529034345.jpeg",
        "coverUrl": "/uploads/cover-1715529034345.jpeg"
    },
    {
        "id": 2,
        "name": "Mara Weiss",
        "thumb": "thumb-1715529041798.png",
        "about": "Recusandae Sint asp",
        "cover": "cover-1715529041805.png",
        "email": "pykucusu@mailinator.com",
        "phone": "+1 (869) 824-1584",
        "birth": "1997-12-02T00:00:00.000Z",
        "createdAt": "2024-05-12T15:50:41.811Z",
        "updatedAt": "2024-05-12T15:50:41.811Z",
        "thumbUrl": "/uploads/thumb-1715529041798.png",
        "coverUrl": "/uploads/cover-1715529041805.png"
    }
]




