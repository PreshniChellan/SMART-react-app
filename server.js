const express = require('express');
const PORT = process.env.PORT || 5000;
const path = require('path');

const app = express();


// MAKE SURE THIS IS BELOW ROUTES
//Serve static assets in production
// if(process.env.NODE_ENV === 'production'){
//   //Set statis folder
//   app.use(express.static('smart-react-app/build'));
//
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'smart-react-app', 'build', 'index.html'));
//   })
// }

app.listen(PORT, () => console.log(`Listening on port ${PORT}` ));
