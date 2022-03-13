import { authInstance } from "./api";

export interface Login {
  email: string;
  password: string;
}

const login = () => {
  return {
    signIn: (data: Login) => authInstance.post("/signin", data),
    signUp: (data) => authInstance.post("/signup", data),
  };
};

export default login;
