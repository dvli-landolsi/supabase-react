import { useState, FormEvent } from "react";
import { toast } from "sonner";
import { useAuthContext } from "src/context";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const { login } = useAuthContext();
  console.log("inn");

  const handleRegistration = async (e: FormEvent) => {
    e.preventDefault(); // Prevents the default form submission behavior

    try {
      const authPromise = login(email, password);

      const { data, error } = await authPromise;

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
          type="password"
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

export default Login;
