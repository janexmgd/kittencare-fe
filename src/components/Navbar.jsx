import "../assets/styles/Navbar.css";
export default () => {
  return (
    <nav className="flex flex-row items-center justify-between h-14 mb-2">
      <div className="flex flex-row items-center">
        <div className="text-logo text-4xl">KittenCare</div>
      </div>
      <button className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-sm text-gray-900 py-3 px-5 rounded-lg font-medium tracking-wide leading-none">
        Logout
      </button>
    </nav>
  );
};
