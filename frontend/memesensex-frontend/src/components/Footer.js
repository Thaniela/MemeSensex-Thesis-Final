import logo from "../asset/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#3C1064] text-white py-3 px-6 w-full">
      <div className="flex items-center justify-center gap-3 text-sm">
        <img src={logo} alt="Logo" className="h-6 w-6" />
        <span className="text-gray-300">|</span>
        <span className="font-semibold">MemeSenseX</span>
        <span className="text-gray-300">
          Powered by AVCAD - Angela Vanya Chynna Alex Daniela
        </span>
      </div>
    </footer>
  );
};

export default Footer;