import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User from '../../models/User';
import AuthConfig from '../../config/auth';
import AppError from '../../error/AppError';

interface Request {
  email: string;
  password: string;
}

interface UserAuth {
  user: User;
  token: string;
}

class AutheticationUserService {
  public async execute({ email, password }: Request): Promise<UserAuth> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ where: { email } });

    if (!user) {
      throw new AppError('Invalid email/password, try again.', 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('Invalid email/password, try again.', 401);
    }

    const { secret, expiresIn } = AuthConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default AutheticationUserService;
