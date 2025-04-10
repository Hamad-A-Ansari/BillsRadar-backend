import { Router } from "express";

const authRouter = Router();

//POST request to the sign-up URL
authRouter.post('/sign-up', (req, res) => {
  res.send({ title: 'Sign Up Route'});
});

//POST request to the sign-in
authRouter.post('/sign-in', (req, res) => {
  res.send({ title: 'Sign Up Route'});
});

//POST request to the sign-out
authRouter.post('/sign-out', (req, res) => {
  res.send({ title: 'Sign Up Route'});
});


export default authRouter;
