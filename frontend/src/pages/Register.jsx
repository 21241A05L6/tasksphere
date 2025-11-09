import { useState } from "react";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/users/register", { name, email, password });
    alert("Registered successfully! Please login.");
    window.location = "/";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <form onSubmit={handleRegister} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <h1 className="text-2xl mb-4 font-bold text-center text-blue-600">TaskSphere Register</h1>
        <input className="border p-2 w-full mb-3" placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input className="border p-2 w-full mb-3" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input className="border p-2 w-full mb-3" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button className="bg-blue-500 text-white w-full py-2 rounded">Register</button>
      </form>
    </div>
  );
}
export default Register;
