import { useState, FormEvent } from "react";
import { toast } from "sonner";
import { supabase } from "src/supabase/supabaseClient";

function Register() {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegistration = async (e: FormEvent) => {
    e.preventDefault(); // Prevents the default form submission behavior

    try {
      const authPromise = supabase.auth.signUp({
        email,
        password,
      });

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
        console.log("data registered successfully:", data);
        // You can perform additional actions after successful registration
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
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="lastName"
          className="block text-sm font-medium text-gray-700"
        >
          Last Name
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
          Email
        </label>
        <input
          type="email"
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
