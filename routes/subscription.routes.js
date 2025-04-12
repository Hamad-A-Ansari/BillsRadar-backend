import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";

const subsriptionRouter = Router();

//GET all subscriptions
subsriptionRouter.get('/', (req, res) => {
  res.send({ title: 'GET all subscriptions'});
}); 

//GET a specific subscription by ID
subsriptionRouter.get('/:id', (req, res) => {
  res.send({ title: 'GET subscription details'});
});

//POST function to create a new subscription
subsriptionRouter.post('/', authorize, createSubscription);

//PUT function to update a subscription by ID
subsriptionRouter.put('/:id', (req, res) => {
  res.send({ title: 'UPDATE subscription'});
});

//DELETE function to delete a subscription by ID
subsriptionRouter.delete('/:id', (req, res) => {
  res.send({ title: 'DELETE subscription'});
});


//GET all subscriptions for a specific user
subsriptionRouter.get('/user/:id',authorize, getUserSubscriptions);

//PUT function to cancel all user subscriptions
subsriptionRouter.put('/:id/cancel', (req, res) => {
  res.send({ title: 'CANCEL all subscriptions for a user'});
});

//GET function to get all upcoming renewals
subsriptionRouter.get('/upcoming-renewals', (req, res) => {
  res.send({ title: 'GET all upcoming renewals'});
});

export default subsriptionRouter;
