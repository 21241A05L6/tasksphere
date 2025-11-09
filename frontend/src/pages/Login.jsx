import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/users/login", { email, password });
    localStorage.setItem("token", res.data.token);
    alert("Login successful!");
    window.location = "/dashboard";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <form onSubmit={handleLogin} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <h1 className="text-2xl mb-4 font-bold text-center text-blue-600">TaskSphere Login</h1>
        <input className="border p-2 w-full mb-3" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input className="border p-2 w-full mb-3" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button className="bg-blue-500 text-white w-full py-2 rounded">Login</button>
        <p className="text-center mt-2">
          Don’t have an account? <a className="text-blue-600" href="/register">Register</a>
        </p>
      </form>
    </div>
  );
}
export default Login;
