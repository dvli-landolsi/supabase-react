import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "src/context/supabase/supaBaseConnectionCtx";

export default function SupabaseConnectionGuard({
  children,
}: {
  children: ReactNode;
}) {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return <Navigate to={"/user/login"} />;
  }

  return <> {children} </>;
}
