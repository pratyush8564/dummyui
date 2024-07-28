import { create } from 'zustand';
import axios from 'axios';

interface CompanyDetails {
  logo_url: string;
  name: string;
}

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
  handleSearch: (keyword: string) => Promise<void>;
  handleDetails: () => Promise<void>;
  companyDetails: CompanyDetails | null; // Add companyDetails to state
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
    set({ loading: true });
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
      set({ email: '', password: '', confirmPassword: '' });
    } catch (error: any) {
      console.error('Error signing up:', error.message);
      alert('Error signing up. Please try again.');
    } finally {
      set({ loading: false });
    }
  },
  handleSignIn: async (email, password) => {
    set({ loading: true });
    try {
      const response = await axios.post('https://api-stg.commanderai.com/auth/login', {
        email,
        password,
      });
      console.log('Sign In Response:', response.data);
      if (response.data.success && response.data.data.token) {
        const { token } = response.data.data;
        localStorage.setItem('authToken', token);
        set({ email: '', password: '' });
      } else {
        console.error('Failed to get token from response');
        alert('Failed to sign in. Please try again.');
      }
    } catch (error: any) {
      console.error('Error signing in:', error.message);
      alert('Error signing in. Please check your credentials.');
    } finally {
      set({ loading: false });
    }
  },
  handleSearch: async (keyword) => {
    set({ loading: true });
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        console.log("No token found in localStorage");
        return;
      }
      const response = await axios.get('https://api-stg.commanderai.com/companies/99e01fb7-6eaa-425d-ad18-08544ba1fa12/company_prospects', {
        params: {
          prospect_status: '',
          keyword: keyword,
          page: 1,
          limit: 15,
          source: 'hubspot'
        },
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Search Response:', response.data);
    } catch (error: any) {
      console.error('Error fetching data:', error.message);
    } finally {
      set({ loading: false });
    }
  },
  handleDetails: async () => {
    set({ loading: true });
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        console.log("No token found in localStorage");
        return;
      }
      const response = await axios.get('https://api-stg.commanderai.com/company_prospects/b133c6b2-45c4-4c28-9e8d-9a8d01e7bb8b?company_contact_id=37cca9dc-d502-4693-89bb-143be701fd64', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Details Response:', response.data);
      const { company } = response.data.data;
      set({ companyDetails: {
        logo_url: company.logo_url || '',
        name: company.name || ''
      }});
    } catch (error: any) {
      console.error('Error fetching data:', error.message);
    } finally {
      set({ loading: false });
    }
  },
  companyDetails: null // Initialize companyDetails
}));

export default useAuthStore;
