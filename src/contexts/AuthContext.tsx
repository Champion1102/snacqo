import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { AuthUser } from '@/api/auth';
import { setToken, clearAuthToken } from '@/api/auth';

const STORAGE_KEY = 'snacqo_auth';

interface AuthState {
  isLoggedIn: boolean;
  userName: string;
  user: AuthUser | null;
}

interface AuthContextValue extends AuthState {
  setAuth: (state: { user: AuthUser; token: string }) => void;
  logout: () => void;
}

function loadStored(): { token: string; user: AuthUser } | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw) as { token: string; user: AuthUser };
      if (data?.token && data?.user) return data;
    }
  } catch {
    // ignore
  }
  return null;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => loadStored()?.user ?? null);

  useEffect(() => {
    const stored = loadStored();
    if (stored?.token) {
      setToken(stored.token);
      setUser(stored.user);
    }
  }, []);

  const isLoggedIn = !!user;
  const userName = user?.userName ?? '';

  const setAuth = useCallback((next: { user: AuthUser; token: string }) => {
    setToken(next.token);
    setUser(next.user);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ token: next.token, user: next.user }));
    } catch {
      // ignore
    }
  }, []);

  const logout = useCallback(() => {
    clearAuthToken();
    setUser(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      isLoggedIn,
      userName,
      user,
      setAuth,
      logout,
    }),
    [isLoggedIn, userName, user, setAuth, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
