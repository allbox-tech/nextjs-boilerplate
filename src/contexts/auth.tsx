"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { setAuthToken } from "@/contexts/tokenStore";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { AUTH_TOKEN_KEY } from "@/constants/auth";
import { userService } from "@/features/users/services/userService";
import { Login } from "@/features/users/types";

interface AuthContextType {
  loading: boolean;
  token: string | null;
  isAuthenticated: boolean;
  login: (t: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useLocalStorage(AUTH_TOKEN_KEY, "");
  const [isAuthenticated, setIsAuthenticated] = useState(token !== "");

  const login = (t: string) => {
    setToken(t);
    setIsAuthenticated(true);
    setAuthToken(t);
  };

  const logout = () => {
    setToken("");
    setIsAuthenticated(false);
    setAuthToken("");
  };

  useEffect(() => {
    if (token !== "") {
      console.log(token, "here");
      setAuthToken(token);
      setLoading(false);
    } else {
      userService
        .getUserSession()
        .then((data: Login) =>
          data.accessToken ? login(data.accessToken) : logout()
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
      console.log(token, "here2");
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ loading, token, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be under AuthProvider");
  return ctx;
}
