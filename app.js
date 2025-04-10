import express from 'express';
import { PORT } from './config/env.js';


//import Routes
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';


const app = express();

//Routes setup
app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);



//GET request to the root URL
app.get('/', (req, res) => {
  res.send('Welcome to Subscription Manager API');
});


//LISTEN on port 3000
app.listen(PORT, () => {
  console.log('Subscription Manager API is running on port:', PORT);
})


export default app;