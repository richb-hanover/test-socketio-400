# Test-socketio-400

This repo demonstrates the 400 error found in issue #2717 of the socket.io repo, https://github.com/socketio/socket.io/issues/2717

To use this demonstration:

1. `git clone https://github.com/richb-hanover/test-socketio-400.git`
2. `cd *destination directory*`
3. `npm install`
4. `npm start` # this starts the GUI application
5. In a separate terminal window, `API_PORT=3001 node server.js`
6. Go to http://localhost:3000/test.html
7.  In Chrome and Safari browser console, you should see the expected `time` messages:
    `{text: "Time is now: Fri Oct 21 2016 00:14:55 GMT-0400 (EDT)"}`
8. In Firefox console, you should see the 400 POST errors, indicating that the socket.io connection never completes.

## About this repo

This repo is based on Facebook's [create-react-app](https://github.com/facebookincubator/create-react-app) 
set up to proxy to a small server.js app listening on port 3001.