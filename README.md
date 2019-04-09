# advanced-js-ca2
This is a CA for Advanced Javascript. 📝
It uses the MERN Stack. MongoDB,Express,React and Node.<br/>  
The client side of the application is created using ReactJS and the server side of the project is created using<br/> express, a backend REST API is created which connects the the database.<br/>
MongoDB is a noSQL database.<br/>
The project uses mongoose which allows for relationships to be created within the data.<br/>
This also provides schema validation.<br/>
There are three collections in the database for this project, adverts,hunters and users. If you are running it locally you should set these up. <br/>
It is a room-mate finding application built using react and mongo DB.<br/>
Users can view a list home advertisement, they can then click on the home and view information about the tenants that live in the home.<br/> 
A user can create an advert about themselves and describe what they are looking for in a home. <br/>
Users can be created, updated and deleted from the database. <br/>
Bulma is used for the styling of this project.<br/>

This project also references [MERN STACK](https://github.com/IADT-AdvancedJS/mern-full-stack)<br/>
# Setup 
## MongoDB
You will need access to a server running MongoDB. You may use a local server for development, but should move to a cloud database if you wish to host your project online.<br/>

## Local Database
Install MongoDB locally on your machine following these instructions. Note: you are required to create a folder /data/db on Mac or C:\data\db on Windows to act as a data store for MongoDB. Once installed you need to have mongod running on your machine and listening for connections.<br/>
You can use Robot3T or Compass as a GUI to manage the data in MongoDB. You should create database that contains a collection named users.
Your database connection URL will be similar to mongodb://localhost:27017/your-db-name. <br/>
## Connecting to a cloud database
If you wish to host the database online you can use mLabs. <br/>
Login to heroku and download heroku CLI. <br/>
Create a project on Heroku.
Then follow the instructions on this [website](https://devcenter.heroku.com/articles/mongolab#adding-mlab-as-a-heroku-add-on).<br/>
Click the mLabs Mongo DB option in the installed add-ons section of the project page. This which be the platform from where the DB will be managed. <br/>
Make note of the connection string which can be added to the index.js file in the form: <br/>
mongodb://<dbuser>:<dbpassword>@ds135036.mlab.com:35036/heroku_xcd1747x in order to connect to the cloud DB. <br/>

 
