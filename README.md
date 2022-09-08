# The Phone Cave catalogue

## Description

An app to know the main characteristics of the phones in the catalogue.

## User Stories

-  **NotFound** I can see a NotFound page if I try to reach a page that does not exist so that I know it's my fault
-  **Error** I can see an Error page if there is any error in the server.
-  **List of Phones** I can see the list of phones from all the points of the app.
-  **Phone details** I can see the details of an specific phone.


# Client

## Routes

- / - Home
- /phones/:phoneId - Phone information
- /error - error page
- /* - not found page

## Pages

- Home Page
- Phone details Page
- Error Page 
- Not Found Page 

## Components

- PhonesList



## Services

- Config services
- Phones services


# Server

## Models

Phone model

```
id 
name 
manufacturer 
description
color
price
imageFileName
screen
processor
ram 
```

## API Endpoints/Backend Routes

**Phones routes**
- GET /phones  => get list of phones
- GET /phones/:id => get details of an specific phone