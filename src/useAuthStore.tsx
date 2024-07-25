import {create} from 'zustand';
import axios from 'axios';

interface AuthStore {
  isSignUp: boolean;
  setIsSignUp: (isSignUp: boolean) => void;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  confirmPassword: string;
  setConfirmPassword: (confirmPassword: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  toggleMode: () => void;
  handleSignUp: (email: string, password: string, confirmPassword: string) => Promise<void>;
  handleSignIn: (email: string, password: string) => Promise<void>;
}

const useAuthStore = create<AuthStore>((set) => ({
  isSignUp: true,
  setIsSignUp: (isSignUp) => set({ isSignUp }),
  email: '',
  setEmail: (email) => set({ email }),
  password: '',
  setPassword: (password) => set({ password }),
  confirmPassword: '',
  setConfirmPassword: (confirmPassword) => set({ confirmPassword }),
  loading: false,
  setLoading: (loading) => set({ loading }),
  toggleMode: () => set((state) => ({ isSignUp: !state.isSignUp })),
  handleSignUp: async (email, password, confirmPassword) => {
    const setLoading = set;
    setLoading({ loading: true });
    try {
      if (password !== confirmPassword) {
        alert("Passwords don't match");
        return;
      }

      const response = await axios.post('https://api-stg.commanderai.com/auth/signup', {
        email,
        password,
      });

      console.log('Signup Successful', response.data);
      // Clear form fields after successful signup
      set({ email: '', password: '', confirmPassword: '' });
      // Handle success, e.g., redirect to dashboard or set token in local storage
    } catch (error:any) {
      console.error('Error signing up:', error.message);
      alert('Error signing up. Please try again.');
    } finally {
      setLoading({ loading: false });
    }
  },
  handleSignIn: async (email, password) => {
    const setLoading = set;
    setLoading({ loading: true });
    try {
      const response = await axios.post('https://api-stg.commanderai.com/auth/login', {
        email,
        password,
      });

      console.log('Login Successful', response.data);
      localStorage.setItem('token', response.data.token);
      // Clear form fields after successful login
      set({ email: '', password: '' });
      // Handle success, e.g., redirect to dashboard
    } catch (error:any) {
      console.error('Error signing in:', error.message);
      alert('Error signing in. Please check your credentials.');
    } finally {
      setLoading({ loading: false });
    }
  },
}));

export default useAuthStore;
