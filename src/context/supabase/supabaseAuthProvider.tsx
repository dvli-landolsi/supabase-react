import {
  createContext,
  useEffect,
  useReducer,
  useCallback,
  useMemo,
  ReactNode,
} from "react";
import { Session } from "@supabase/supabase-js";

// const VITE_SUPABASE_PROJECT_URL: string = import.meta.env
//   .VITE_SUPABASE_PROJECT_URL;

// const VITE_API_KEY: string = import.meta.env.VITE_API_KEY;

interface AuthContextProps {
  isInitialized: boolean;
  isAuthenticated: boolean;
  user: Session | null;
}

const initialState: AuthContextProps = {
  isInitialized: false,
  isAuthenticated: false,
  user: null,
};

const reducer = (state: AuthContextProps, action: any) => {
  if (action.type === "INITIAL") {
    return {
      isInitialized: true,
      isAuthenticated: action.payload.isAuthenticated,
      user: action.payload.user,
    };
  }
  return state;
};

export const AuthContext = createContext<AuthContextProps>({
  ...initialState,
});

export function SupaBaseConnectionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state] = useReducer(reducer, initialState);

  // const supabase = createClient(VITE_SUPABASE_PROJECT_URL, VITE_API_KEY);

  const initialize = useCallback(async () => {
    // const test = await supabase.auth.getSession();
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  const memoizedValue = useMemo(
    () => ({
      isInitialized: state.isInitialized,
      isAuthenticated: state.isAuthenticated,
      user: state.user,
    }),
    []
  );

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
}
