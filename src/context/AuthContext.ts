import { createContext } from 'react';

interface AuthContextData {
  name: string;
  age: number;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default AuthContext;
