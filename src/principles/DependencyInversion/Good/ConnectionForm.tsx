import axios from 'axios';
import Form from './Form';

interface IAuthService {
    login: (email: string, password: string) => Promise<void>;
  }

  class AuthService implements IAuthService {
    async login(email:string,password:string): Promise<void>{
      await axios.post("https://localhost:3000/login",{email,password})
    }
  }

  const authService = new AuthService();

const ConnectionForm = () => {
    const handleSubmit = (email:string,password:string)=>{
        authService.login(email,password)
    }
  return (
    <div>
        <Form onSubmit={handleSubmit}/>
    </div>
  )
}

export default ConnectionForm