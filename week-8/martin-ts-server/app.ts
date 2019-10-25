/*
============================================
; Title: Exercise 8.2
; Author: Troy Martin
; Date: 10/25/2019
; Modified By: Troy Martin
; Description: Server-Side Communications with Node.js and Express
;===========================================
*/

// import express
import * as express from 'express';

// declare the express application
const app = express();

// define the Composer interface
interface Composer {
  id: number,
  firstName: string,
  lastName: string
};

// define an array of Composers
const composers: Composer[] = [
  {id: 1, firstName: "Johann", lastName: "Bach"},
  {id: 2, firstName: "Wolfgang", lastName:"Mozart"},
  {id: 3, firstName: "Ludwig", lastName: "Beethoven"},
  {id: 4, firstName: "Giuseppe", lastName: "Verdi"},
  {id: 5, firstName: "Frederic", lastName: "Chopin"},
];

/*
; Params: none
; Response: Composer[]
; Description: Return the composers array
*/
function getComposers(): Composer[] {
  // return the array of composers
  return composers;
}

/*
; Params: composerId: number
; Response: Composer
; Description: Find the composer by id
*/
function getComposerById(composerId:  number): Composer {
  // Using the Array find method return the matching Composer
  return composers.find(c => c.id === composerId);
}

// GET the base route and return the api URL
app.get('/', (request, response) =>{
  // Respond to the route sending the URL to call for a list of composers
  response.send('The URL for composers is http://localhost:3000/api/composers');
});

// GET set route for returning a list of composers
app.get('/api/composers',(request, response) => {
  // use the log method to output that we are returning all composers
  console.log('all');
  // call the getComposers method to return the composers array in the response
  response.json(getComposers());
});

// GET set the route for returning a specific composer by id
app.get('/api/composers/:id', (request, response) =>{
  // read the id parameter off the request
  const composerId = request.params.id;

  // evaluate if we have a value and a valid id number for a Composer
  if (composerId !== '' && isNaN(+composerId) === false) {
    // Use the log method of the console to output the id
    console.log(`by id ${composerId}`);
    // Write the json response by calling the getComposerById method passing the composerId as a number
    response.json(getComposerById(+composerId));
  } else {
    // the id was not a valid value

    // use the log method to write an error out
    console.log('oops cannot handle the request');
    // send a Bad Request status (400), allow with a message
    response.status(400).send('oops, invalid id');
  }
});

// declare the server and start the app on a specific port and host
const server = app.listen(3000, 'localhost', () =>{
  // use the log method to output a message
  console.log("Listening on port 3000");
})



