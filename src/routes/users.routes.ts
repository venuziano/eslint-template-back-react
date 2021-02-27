import { Router } from 'express';
import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import CreateUserService from '../services/Users/CreateUserService';
import User from '../models/User';

const usersRoutes = Router();

usersRoutes.get('/', async (request, response) => {
  const usersRepository = getRepository(User);
  const users = await usersRepository.find();

  return response.json(users);
});

usersRoutes.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const hashedPassword = await hash(password, 8);

    const user = await createUser.execute({
      name,
      email,
      password: hashedPassword,
    });

    // delete user.password;

    return response.json(user);
  } catch (err) {
    console.log(err);
  }
  // const { name, email, password } = request.body;

  // const createUser = new CreateUserService();

  // const hashedPassword = await hash(password, 8);

  // const user = await createUser.execute({
  //   name,
  //   email,
  //   password: hashedPassword,
  // });

  // // delete user.password;

  // return response.json(user);
});

export default usersRoutes;
