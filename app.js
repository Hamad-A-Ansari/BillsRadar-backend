import express from 'express';
import { PORT } from './config/env.js';


const app = express();



//GET request to the root URL
app.get('/', (req, res) => {
  res.send('Welcome to Subscription Manager API');
});


//LISTEN on port 3000
app.listen(PORT, () => {
  console.log('Subscription Manager API is running on port:', PORT);
})


export default app;