function Navbar() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location = "/";
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-xl sm:text-2xl font-bold text-blue-600">
          TaskSphere
        </h1>

        <button
          onClick={logout}
          className="text-sm sm:text-base bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
