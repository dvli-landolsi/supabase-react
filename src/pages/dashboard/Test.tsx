import { useAuthContext } from "src/context";

function Test() {
  const { user, logout } = useAuthContext();
  console.log(user);
  return (
    <div>
      {user?.first_name} ///////
      {user?.user_role}
      <button onClick={() => logout()} className="ml-20 w-20 h-10 bg-slate-500">
        logout
      </button>
    </div>
  );
}

export default Test;
