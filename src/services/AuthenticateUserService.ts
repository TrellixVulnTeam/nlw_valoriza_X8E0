import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { compare } from "bcryptjs"
import { sign, TokenExpiredError } from "jsonwebtoken"

interface IAuthenticateRequest{
    email: string,
    password: string
}

class AuthenticateUserService {
  async execute ({ email, password}: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    //verificar email existente
    const user = await usersRepositories.findOne({ email });
    if(!user){
      throw new Error("Email/Password incorrect")
    }

    //verificar a senha correta
    const passwordMatch = await compare(password, user.password);
    if(!passwordMatch){
      throw new Error("Password/Email incorrect")
    }

    // gerar token
    const token = sign({
      email: user.email
    }, "5dd7dc026672663dfde6c9a308cfd2b5", {
      subject: user.id,
      expiresIn: "1d"
    }
    
    );

    return token;
  }
}
//	5dd7dc026672663dfde6c9a308cfd2b5 => hash

export { AuthenticateUserService }