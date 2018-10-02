# Tworent-frontend

Tworent is the bigger, better, and badder version of [Onerent](https://www.onerent.co/)

Tworent uses bleeding edge, hyper-advance technologies like React, Apollo, etc.

Tworent is the + 1 version and the future of all online renting websites.

## Getting Started

Clone this repository on your local system
```
git clone https://github.com/sanoyphilippe/tworent-frontend.git
```

### Prerequisites

You must have setup the backend server for this first
See https://github.com/sanoyphilippe/tworent-backend

You must have npm and nodejs installed on your local system
See https://nodejs.org for installation instructions

### Installing

A step by step series of examples that tell you how to get a development env running.

First we need to install the node_modules.
So change to the directory created in your system, after cloning this repository.

```
cd node-express-graphql-server
npm install
```
#### ENV
Next we need to configure some environment variables for running our app in a development environment.

If you're on a linux enviroment, you can use the `export` command to setup the environment variable.
```
export REACT_APP_DEV_GRAPHQL_URI=%GRAPHQL_URI%
```
`REACT_APP_DEV_GRAPHQL_URI` defines the URI for our graphql end point defined in our server.

`%GRAPHQL_URI%` just represents the actual URI that you need to place here.

If you're running the server on the same system as this application and using the default configs for the server then this would just be `http://localhost:3000/search`

#### Running the app

Now after doing all of the above, simply run the command
```
npm start
```

If you're running the app on your local system and you just used the default values, open up your web browser and go to the following url `http://localhost:3000/search`

#### GRAPHIQL

This app optionally uses `graphiql` which gives us some nice interface to test our API

If you enabled graphiql via setting `ENABLE_GRAPHIQL` to true, then on the left hand side editor you can place the following query
```
{
  users {
    id
    firstName
    lastName
    properties {
      street
      city
      rent
    }
  }
}
```
You should now see the results on the right hand side of the screen, this is what is returned to clients when they query your graphql end-point.

At the top right corner there is a button `docs`, clicking it would show some more info regarding the schema for this end-point.

## Authors

* **Philippe Oscar Sanoy** - *Scoured through various sources of information to build this*

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## Acknowledgments

* Anyone whose code was used
* Onerent - for giving me this test and for paving the way for the success of Tworent
* Google - for helping me find learning resources
* Pldt - for my internet connection
* To anyone else who is reading this
