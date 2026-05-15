import { Outlet, Link, useLocation } from "react-router";

export function Layout() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-black">
      <nav className="bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Link to="/" className="text-3xl font-bold hover:opacity-80 transition-opacity">
              <span className="text-primary">EC</span>
              <span className="text-white"> КУРСЫ</span>
            </Link>
            <div className="flex gap-6">
              <Link
                to="/"
                className={`px-6 py-2 rounded-full transition-all font-medium hover:scale-105 ${
                  isActive("/")
                    ? "bg-primary text-white"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Курсы
              </Link>
              <Link
                to="/teachers"
                className={`px-6 py-2 rounded-full transition-all font-medium hover:scale-105 ${
                  isActive("/teachers")
                    ? "bg-primary text-white"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Учителя
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="relative overflow-hidden">
        <Outlet />
      </main>
      <footer className="bg-black text-white py-12 mt-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/70">&copy; 2026 EC Курсы. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
