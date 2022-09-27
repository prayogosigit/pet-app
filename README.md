# PetApp

Sample application for listing Pet identity using NodeJS and MongoDB.

<br>
<br>

# MongoDB Pre-requisites

### 1. Create database
```javascript
use pet
```

### 2. Create collection
```javascript
db.createCollection("pets")
```

### 3. Insert dummy data
```javascript
db.pets.insertMany( [
    {name:"Milo", category: "Cat", breed:"Domestic"},
    {name:"Prilly", category: "Bird", breed:"Parrot"},
    {name:"Rico", category: "Dog", breed:"Husky"},
    {name:"Jerry", category: "Mouse", breed:"Sable"},
    {name:"Tom", category: "Cat", breed:"British"}
]);
```

### 4. Check the records, the expected result must be like this
```javascript
{ "_id" : ObjectId("6332f82ff156776b164b34a7"), "name" : "Milo", "category" : "Cat", "breed" : "Domestic" }
{ "_id" : ObjectId("6332f82ff156776b164b34a8"), "name" : "Prilly", "category" : "Bird", "breed" : "Parrot" }
{ "_id" : ObjectId("6332f82ff156776b164b34a9"), "name" : "Rico", "category" : "Dog", "breed" : "Husky" }
{ "_id" : ObjectId("6332f82ff156776b164b34aa"), "name" : "Jerry", "category" : "Mouse", "breed" : "Sable" }
{ "_id" : ObjectId("6332f82ff156776b164b34ab"), "name" : "Tom", "category" : "Cat", "breed" : "British" }
```

<br>

# How to run the app

### 1. Configure environment variables
Create .env file inside .src/ folder and configure the value
```
DB_HOST=localhost
DB_PORT=27017
DB_NAME=pet
DB_USER=adminuser
DB_PASSWORD=wsxzaq1
```

### 2. Install package dependencies
```bash
npm install
```

### 3. Runing the app
```bash
npm start
```