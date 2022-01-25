# DOCUMENTATION PROJECT

# RestaurantChain

This project is an assignment from the DIW module of the second year of DUAL Web Application Development. It is a REST API built with Node (Express) connected to a Mongo database.

![](`r https://img.shields.io/badge/node-%3E%3D%206.9.0-brightgreen`)

![](`r https://img.shields.io/badge/npm-%3E%3D%208.0.0-brightgreen`)



## Domain 🔭

RestaurantChain is a business located in the metaverse. It is composed of a chain of restaurants, which, depending on some of their characteristics and the celebrities that reside in said metaverse, offer some changes in their main properties.

The structure of restaurant documents consists of simple properties such as **name**,**location**,**price**,**capacity**,**currency** ,**euroExchange** . It also contains two properties that are sub-documents, **celebrity** and **menu**.

```json
{
        "celebrity": {
            "celebrityName": "Shatozi  Namakoto",
            "job": "Developer"
        },
        "_id": "61efde61d4356fe39d49d6b7",
        "name": "Kakao Club",
        "location": "Cadarno City",
        "price": 1,
        "capacity": 21,
        "currency": "ADA",
        "euroExchange": "100000.25364",
        "menu": [
            {
                "menuName": "Defalut Chinese Menu",
                "first": "Fideus lopan",
                "second": "Raw steak of horse",
                "desert": "Eye of rabbit"
            },
            {
                "menuName": "21 milions of posibilities",
                "first": "Porkoin of chocolate",
                "second": "Spring rice",
                "desert": "Apple with digital gold "
            }
        ],
        "__v": 0
    },
```

When creating a new restaurant through the API, the first thing to do is to check the current price of the cryptocurrency indicated in "currency" and set "eurExchange" by multiplying the current value by the property "price".

Then the location of the restaurant will be checked to modify the properties in this way.

- If the location is "Now Yor Meta", it will increase the capacity of the restaurant by 300%.
- If the location is "Joland", it will decrease the restaurant capacity to 50%.
- If the location is "Vitpoin", it will decrease the restaurant capacity to 10%.

Then the celebrity in the Restaurant will then be evaluated.
It is only possible to find only one celebrity per restaurant, but that celebrity can be found in many restaurants at the same time, because in the metaverse everything is possible.

- If the celebrity's name is "Yanke Xan", a special menu will be added to that restaurant with the following characteristics:
    
    ```json
    { 
    	"menuName": "Defalut Chinese Menu",
    	"first": "Fideus lopan",
    	"second": "Raw steak of horse",
    	"desert": "Eye of rabbit"
    }
    ```
    

- If the celebrity's name is "Shatozi Namakoto" the price of the restaurant will be reduced to 1, the capacity will be set to 21 and  a special menu will be added to that restaurant with the following features:

```json
{
  "menuName": "21 milions of posibilities",
  "first": "Porkoin of chocolate",
  "second": "Spring rice",
  "desert": "Apple with digital gold "
}
```

These modifications are made in the order indicated, so that once the price in euros is calculated, if a celebrity is added and it modifies the property "price", the property "eurExchange" will not be modified downwards.
The price in cryptocurrencies can go down, but the price in euros would remain the same.

## Pre-requisites 📋

1. You must clone the project on your local machine.

```bash
git clone https://github.com/sgonzalezb/RestaurantChain.git
```

1. Access the root folder of the project RestaurantChain.

```bash
cd RestaurantChain
```

## Installation 🔧

1. You must install all the dependencies of the project, to do this run

```bash
npm install
```

## Testing ⚙️

This project includes unit tests to test the domain logic and integration tests to ensure the correct group operation of the different components of the application.

### Execute test 🔩

To run all the tests and obtain detailed information about each one of them, execute the following command

```
npm run test
```

## Deploy 📦

In this project there are two types of deployment depending on the environment in which it is located. 

- For a **development** **deployment, it is necessary to execute the following commands.**
    
    First this command will execute a JS script "migrateDev.js" that will remove the content from the development database and insert the content found in the celebrityCollection.js, chineseCollection.js, menuCollection.js files.
    
    ```bash
    npm run start:pre-dev
    ```
    
    Then to launch the REST API in development mode (**nodemon**) it will be necessary to execute the command.
    
    ```bash
    npm run start:dev
    ```
    
- For **production** **deployment** it is necessary to execute the next command which will deploy the service, without making any modifications to the database.
    
    ```bash
    npm run start:pro
    ```
    

## Built with 🛠️

The tools I have used to develop this project are the following:

- [NodeJs](https://nodejs.org/es/) y [Express](https://expressjs.com/es/) - Enviroment
- [npm](https://www.npmjs.com/) -  Package manager
- [MongoDB](https://www.mongodb.com/) - Database
- [VS Code](https://code.visualstudio.com/) - IDE
- [Postman](https://www.postman.com/) - Client for HTTP requests

## Versioning 📌

SemVer is used in this project for the publication of the different versions. To learn more [click here](https://semver.org/lang/es/)

## Author ✒️

- Sergio González Barbe - Development - sgonzalezb
- Sergio González Barbe - Documentation - sgonzalezb

## License 📄

MIT License

Copyright (c) 2021 Sergio González Barbe:

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.