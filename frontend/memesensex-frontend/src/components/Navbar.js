import logo from "../asset/logo.svg";

const Navbar = ({ scrollToSection }) => {
    return ( 
        <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-purple-800 via-purple-900 to-violet-900 text-white py-4 px-6 shadow-lg z-50">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img
                        src={logo}
                        alt="MemeSenseX logo"
                        className="w-8 h-8 object-contain"
                    />
                    <h1 className="text-2xl font-bold text-white">MemeSenseX</h1>
                </div>

                {/* Navigation Tabs */}
                <div className="flex items-center gap-6">
                    <button
                        onClick={() => scrollToSection("home")}
                        className="px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 font-medium"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => scrollToSection("how-to-use")}
                        className="px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 font-medium"
                    >
                        How to Use
                    </button>
                    <button
                        onClick={() => scrollToSection("tool")}
                        className="px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 font-medium"
                    >
                        Tool
                    </button>
                    <button
                        onClick={() => scrollToSection("about")}
                        className="px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 font-medium"
                    >
                        About
                    </button>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;