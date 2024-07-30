import { create } from "zustand";
import axios from "axios";

// Define interfaces
interface BasicCompany {
  id: string;
  name: string;
  photo_url: string;
  description?: string;
}

interface Meeting {
  id: string;
  basic_company_id: string;
  company_id: string;
  name: string;
  meeting_notes: string;
  start_time: string;
  end_time: string;
  sender_company_contact_id?: string | null;
  receiver_company_contact_id?: string | null;
  company?: Company; // Include company in Meeting
}

interface Company {
  id: string;
  name: string;
  logo_url: string;
  company_meetings: Meeting[];
  actionable_items: ActionableItem[];
}

interface ActionableItem {
  id: string;
  basic_company_id: string;
  company_id: string;
  question_text: string;
  is_archived: boolean;
  archived_at?: string | null;
  answer_type: string;
  user_response?: string | null;
  answer_options?: string[] | null;
  company?: Company; // Include company in ActionableItem
}

interface Prospect {
  id: string;
  basic_company: BasicCompany;
  prospect_status: string;
  company_meetings?: Meeting[]; // Optional field
  actionable_items?: ActionableItem[]; // Optional field
}

interface CompanyDetails {
  logo_url: string;
  name: string;
  company_prospects: Prospect[];
  company_meetings: Meeting[];
  actionable_items: ActionableItem[];
  graph_data: {
    total_prospects: any;
    engaged_prospects: any;
    customer_prospects: any;
    meetings_booked: any;
  };
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
  handleSignUp: (
    email: string,
    password: string,
    confirmPassword: string
  ) => Promise<void>;
  handleSignIn: (email: string, password: string) => Promise<void>;
  handleLogout: () => Promise<void>;
  handleSearch: (keyword: string) => Promise<void>;
  handleDetails: (prospectId: string) => Promise<void>;
  companyDetails: CompanyDetails | null;
  selectedProspect: Prospect | null;
  user: {
    first_name: string;
    last_name: string;
    photo_url: string;
  } | null;
  setUser: (
    user: {
      first_name: string;
      last_name: string;
      photo_url: string;
    } | null
  ) => void;
  initializeUserFromLocalStorage: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  isSignUp: true,
  setIsSignUp: (isSignUp) => set({ isSignUp }),
  email: "",
  setEmail: (email) => set({ email }),
  password: "",
  setPassword: (password) => set({ password }),
  confirmPassword: "",
  setConfirmPassword: (confirmPassword) => set({ confirmPassword }),
  loading: false,
  setLoading: (loading) => set({ loading }),
  toggleMode: () => set((state) => ({ isSignUp: !state.isSignUp })),

  user: null,
  setUser: (user) => set({ user }),
  initializeUserFromLocalStorage: () => {
    const user = localStorage.getItem("authUser");
    if (user) {
      set({ user: JSON.parse(user) });
    }
  },

  handleSignUp: async (email: string, password: string, confirmPassword: string) => {
    set({ loading: true });
    try {
      // Check if passwords match
      if (password !== confirmPassword) {
        alert("Passwords don't match");
        return;
      }
      
      // Perform sign-up API call
      const response = await axios.post(
        "https://api-stg.commanderai.com/auth/signup",
        { email, password }
      );
      
      console.log("Signup Successful", response.data);
      
      // Reset form fields on success
      set({ email: "", password: "", confirmPassword: "" });
    } catch (error: any) {
      console.error("Error signing up:", error.message);
      alert("Error signing up. Please try again.");
    } finally {
      set({ loading: false });
    }
  },
  

  handleSignIn: async (email: string, password: string) => {
    set({ loading: true });
    try {
      // Perform sign-in API call
      const response = await axios.post(
        "https://api-stg.commanderai.com/auth/login",
        { email, password }
      );
  
      console.log("Sign In Response:", response.data);
  
      if (response.data.success && response.data.data.token) {
        const { token, user } = response.data.data;
  
        // Store token and user in local storage
        localStorage.setItem("authToken", token);
        localStorage.setItem("authUser", JSON.stringify(user));
        localStorage.setItem("companyId", user.company.id); // Store company ID
  
        // Update state with user info
        set({
          email: "",
          password: "",
          user: {
            first_name: user.first_name,
            last_name: user.last_name,
            photo_url: user.photo_url,
          },
        });
  
        // Optionally navigate to another page or show a success message
        // navigate("/onboarding"); // Uncomment if needed
      } else {
        console.error("Failed to get token from response");
        alert("Failed to sign in. Please try again.");
      }
    } catch (error: any) {
      console.error("Error signing in:", error.message);
      alert("Error signing in. Please check your credentials.");
    } finally {
      set({ loading: false });
    }
  },
  

  handleLogout: async () => {
    set({ loading: true });
    try {
      // Handle logout logic
      localStorage.removeItem("authToken");
      localStorage.removeItem("authUser");
      set({ user: null });
    } catch (error: any) {
      console.error("Error logging out:", error.message);
    } finally {
      set({ loading: false });
    }
  },

  handleSearch: async (keyword: string) => {
    set({ loading: true });
    try {
      const token = localStorage.getItem("authToken");
      const companyId = localStorage.getItem("companyId"); // Retrieve company ID from localStorage
      
      if (!token || !companyId) {
        console.log("No token or company ID found in localStorage");
        set({ loading: false });
        return;
      }
  
      const response = await axios.get(
        `https://api-stg.commanderai.com/companies/${companyId}/company_prospects`,
        {
          params: {
            prospect_status: "",
            keyword: keyword,
            page: 1,
            limit: 15,
            source: "",
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      const companyData = response.data.data;
  
      // Extract the graph_data
      const { graph_data } = companyData;
  
      // Update company details with fetched data
      set({
        companyDetails: {
          logo_url: companyData.logo_url || "",
          name: companyData.name || "",
          company_prospects: companyData.company_prospects.map((prospect: any) => ({
            id: prospect.id,
            basic_company: {
              id: prospect.basic_company.id,
              name: prospect.basic_company.name,
              photo_url: prospect.basic_company.photo_url,
              description: prospect.basic_company.description || "",
            },
            prospect_status: prospect.prospect_status || "",
          })) || [],
          company_meetings: companyData.company_meetings || [],
          actionable_items: companyData.actionable_items || [],
          graph_data: {
            total_prospects: graph_data.total_prospects,
            engaged_prospects: graph_data.engaged_prospects,
            customer_prospects: graph_data.customer_prospects,
            meetings_booked: graph_data.meetings_booked,
          },
        },
        loading: false,
      });
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
      set({ loading: false });
    }
  },
  
  handleDetails: async (prospectId: string) => {
    set({ loading: true });
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        console.log("No token found in localStorage");
        set({ loading: false });
        return;
      }

      const response = await axios.get(
        `https://api-stg.commanderai.com/company_prospects/${prospectId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { data } = response.data;

      // Prepare the detailed prospect data including company_meetings and actionable_items
      const selectedProspect = {
        id: data.id,
        basic_company: {
          id: data.basic_company.id,
          name: data.basic_company.name,
          photo_url: data.basic_company.photo_url,
          description: data.basic_company.description,
        },
        prospect_status: data.prospect_status,
        company_meetings: data.company?.company_meetings || [],
        actionable_items: data.company?.actionable_items || [],
      };

      // Update state with the detailed prospect information
      set({
        selectedProspect,
        loading: false,
      });
    } catch (error: any) {
      console.error("Error fetching details:", error.message);
    } finally {
      set({ loading: false });
    }
  },

  companyDetails: null,
  selectedProspect: null,
}));

export default useAuthStore;
