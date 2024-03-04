import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "src/context";

const GuestGuard = ({ children }: { children: React.ReactElement }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthContext();

  useEffect(() => {
    if (isAuthenticated) {
      return navigate("/");
    }
  }, []);

  return <>{children}</>;
};

export default GuestGuard;
