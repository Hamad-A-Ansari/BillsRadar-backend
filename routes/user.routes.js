import { Router } from "express";

const userRouter = Router();

//GET all users
userRouter.get('/', (req, res) => {
  res.send({ title: 'GET all Users'});
});

//GET a specific user by ID
userRouter.get('/:id', (req, res) => {
  res.send({ title: 'GET user details'});
});

//POST function to create a new user
userRouter.post('/', (req, res) => {
  res.send({ title: 'CREATE new user'});
});

//PUT function to update a user by ID
userRouter.put('/:id', (req, res) => {
  res.send({ title: 'UPDATE user'});
});

//DELETE function to delete a user by ID
userRouter.delete('/:id', (req, res) => {
  res.send({ title: 'DELETE user'});
});


export default userRouter;