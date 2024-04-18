import { useState, FormEvent } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuthContext } from "src/context";
import { supabase } from "src/supabase/supabaseClient";

function Register() {
  const [firstName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { register } = useAuthContext();
  const navigate = useNavigate();

  const handleRegistration = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const authPromise = register(email, password, firstName);
      console.log(authPromise);
      const { error, data } = await authPromise;

      toast.promise(authPromise, {
        loading: "Loading...",
        success: (res) => {
          console.log({ res });
          return `${res} toast has been added`;
        },
        error: "Error",
      });

      if (error) {
        console.error("Registration error:", error?.message);
      } else {
        navigate("/login", { replace: true });

        console.log("data registered successfully:", data);
      }
    } catch (error) {
      console.error("Unexpected error during registration:", error);
    }
  };

  return (
    <form onSubmit={handleRegistration}>
      <div className="mb-4">
        <label
          htmlFor="firstName"
          className="block text-sm font-medium text-gray-700"
        >
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          className="mt-1 p-2 border rounded-md w-full"
          value={firstName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="lastName"
          className="block text-sm font-medium text-gray-700"
        >
          email
        </label>
        <input
          type="text"
          id="lastName"
          className="mt-1 p-2 border rounded-md w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          password
        </label>
        <input
          type="text"
          id="email"
          className="mt-1 p-2 border rounded-md w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
        Register
      </button>
    </form>
  );
}

export default Register;
