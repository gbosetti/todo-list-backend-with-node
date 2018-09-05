var JsonServer = require('json-server');
var server = JsonServer.create(); //Instance of the server

class AuthComponent{

  // Sample JWT token for demo purposes
  getNewToken(){
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGVtbyIsImlhdCI6MTUxNjIzOTAyMn0.5ewumk4Xo-NrsZXBAY8CSkjS2A-TRASiTAQIs8I9Rbg';
  }
  // Check whether request is allowed
  isAuthorized(req) {
    /*let bearer = req.get('Authorization');
    console.log(bearer);
    if (bearer === 'Bearer ' + this.getNewToken()) {
        return true;
    }
    return false;*/
    return true;
  }
}

var authComp = new AuthComponent(); 

server.use(JsonServer.defaults()); // to use default middlewares, as CORS or static
server.use(require('body-parser').json()); // to make sure JSONs are parsed correctly

server.use(function(req, res, next) {

  // to check aunthorization
  if (authComp.isAuthorized(req)) {
    console.log('Access granted');
    next();
  } else {
    console.log('Access denied: invalid token');
    res.sendStatus(401);
  }
});

// Handle sign-in requests
server.post('/sign-in', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if(username === 'demo' && password === 'demo') {
    res.json({
      name: 'Demo',
      token: authComp.getNewToken()
    });
  }
  res.send(422, 'Invalid username or password');
});

// Reading the list of items
server.use(JsonServer.router('items.json'));

// Start the server
server.listen(3000, () => { console.log('JSON Server is running in port 3000'); });


