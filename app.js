const express = require('express')

const app = express()
const port = 3002
const fs = require('fs');
const routes = require('./routes/routes.js')(app, fs);
// app.get('/allGames', (req, res) => {


//     try{
//         let response;
//                 let jsonObj = JSON.parse(jsonDoc) /*{ "1": { "car_model": "Ferrari", "color": "Silver" }, "2": { "car_model": "Porsche", "color": "Green" }, "3": { "car_model": "Camry", "color": "Blue" } }*/
//         console.log(jsonObj)
        
//         response.json({
//                 jsonDoc:JSON.stringify(jsonObj) 
//              });}catch(error){ /* now if anything above fails a error code can be returned to the caller and debug info can be sent to the developer*/
//         console.trace(error);// trace out the error.
//         response.sendStatus(200)// return error code to user.
//     console.log('response---',response)
//         }
//     return res.send(response);
//   });


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})