export interface LoginResult {
  user: {
    _id: string;
    email: string;
  };
  access_token: string
}

export interface User {
  id: string;
  email: string;
}

export interface RegisterResult {
  _id: string;
  email: string;
}

export interface LoginForm{
  email: string;
  password: string;
}
