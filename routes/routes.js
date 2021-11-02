
const appRouter = (app, fs) => {
    const jsonDoc = './jsonData/data.json';
    
    //this method will read data from the static file and prepare GET service API
    app.get('/users', (req, res) => {
        let response={}
        fs.readFile(jsonDoc, 'utf8', (err, data) => {
          if (err) {
            throw err;
          }
          response.status=200
          response.data =(JSON.parse(data))
          res.send(response);
        });
      });
    
      // this method will prepare the POST API which will accept the payload 
      app.post('/homeTeam', function(request, response){
        let myJson = request.body;      // your JSON
       let myValue = request.body.myKey;	// a value from your JSON
       response.send(myJson);	 // echo the result back
   });
    // this method will prepare the POST API which will accept the payload 
    app.post('/awayTeam', function(request, response){
        let myJson = request.body;      // your JSON
       let myValue = request.body.myKey;	// a value from your JSON
       response.send(myJson);	 // echo the result back
   });
};

module.exports = appRouter;