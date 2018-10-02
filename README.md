# Tworent-frontend

Tworent is the bigger, better, and badder version of [Onerent](https://www.onerent.co/)

Tworent uses bleeding edge, hyper-advance technologies like React, Apollo, etc.

Tworent is the + 1 version and the future of all online renting websites.

This app was bootstrapped with https://github.com/facebook/create-react-app

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
cd tworent-frontend
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

Your app will then start and by default it uses the port 3000. If the port is being used, it will ask you if you want to use another port.

Now if you're running the app on your local system, open up your web browser and go to the following url `http://localhost:3000` or whichever port that your app is running in.

#### SEARCH

You'll now see the app running on your browser! Congratulations!

You can now enter some input into the text field and try searching for different users and/or properties. Searching is case insensitive.

You don't need to match the exact values for the fields, just typing the first partial letters of the field values will match it with those entries. However, for matching of the street field it checks if the street field contains the 'keyword' inputted by the user. This is done with an iLike %KEYWORD% matching both sides.

After inputing some values in the text field press the search button right next to it to search for any matches.

You can place multiple-keywords to match with the fields by separating them with a space. e.g. You can search with a sample input like `"Kris Davao"` (without the double quotes) and it will find all matches for the keywords 'kris' and 'davao'.

## Authors

* **Philippe Oscar Sanoy** - *Scoured through various sources of information to build this*

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## Acknowledgments

* Anyone whose code was used
* Onerent - for giving me this test and for paving the way for the success of Tworent
* Google - for helping me find learning resources
* Pldt - for my internet connection
* To anyone else who is reading this
