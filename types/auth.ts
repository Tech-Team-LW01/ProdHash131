export interface Credentials {
  username: string;
  password: string;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: () => void;
  signOut: () => void;
}

export interface SignInProps {
  onSignIn: () => void;
}