function Navbar() {
  return (
    <div className="w-full bg-white border-b px-5 py-5 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-1">
          <a
            href="#"
            className="text-purple-600 hover:text-purple-800 font-medium"
          >
            All apps
          </a>
          <span className="px-2 text-slate-800">/</span>
          <a
            href="#"
            className="text-purple-600 hover:text-purple-800 font-medium"
          >
            Create new app
          </a>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <a
          href="#"
          className="text-purple-600 hover:text-purple-800 font-medium flex items-center"
        >
          Support
        </a>
        <a
          href="#"
          className="text-purple-600 hover:text-purple-800 font-medium flex items-center"
        >
          Docs
        </a>
      </div>
    </div>
  );
}

export default Navbar;
