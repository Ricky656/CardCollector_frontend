# Card Collector Frontend

The Card Collector is an example project of a generic card collection application, made up of a backend created with C# Asp.Net and a frontend created with React JavaScript.

I am actively working on this app, there are currently missing features and sections that require refactoring. 

## Introduction

This is the frontend of the application, created with Vite + React. While it can be run without the backend, there would be little functionality; so I would recommend
installing the backend found in my repositories and following the instructions to setup both apps.

## Tech Stack

* JavaScript
* React (19.1.8)
* Vite (7.0.0)
* Sass (1.89.2)

## Functionality

The Card Collector features basic Authentication and Authorization. There are example accounts of both 'User' and 'Admin' roles seeded into the database in the backend that you can use to log-in and explore. You can view this data in the Data/Seeder.cs file found in the backend repository. 

Cards on this App have a name and a rarity, and Users have a collection of these cards.

Booster Packs contain a list of cards they contain and Users can open these packs to gain a random selection of those cards and add them to their collections. As this is an example project, there is no cost or requirement for doing this. For a real-life application a currency/resource could be added.

Admins can create/edit/delete Cards as well as Booster Packs. They can also view a list of Users and modify their roles or delete the User entirely (Not-implemented yet).

## Local Installation

**Additional Prerequisites:** - Node.js

Clone the repository to your desired folder. 

At the top level of the directory, create a new file called `.env`. This contains environment variables required for the app. The '.env.example' file shows all required values. The default https address for the backend api, found in the CardCollector_backend directory Properties/launchSettings.json, is "https://localhost:7155/api".

Run `npm install` to install dependencies

Run `npm run dev` to start app in development environment