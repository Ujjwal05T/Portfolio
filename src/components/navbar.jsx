import logo from "../assets/9980412.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex mb-20 py-6 items-center justify-between">
      <div className="flex flex-shrink-0 items-center">
        <img className="w-auto h-12" src={logo} alt="" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/ujjwal-tamrakar-6171122a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Ujjwal05T">
        <FaGithub />
        </a>
        <a href="https://www.instagram.com/tamrakar_ujjwal_05?igsh=YXJlamt4aGRkdjN2">
        <FaInstagram />
        </a>
        <a href="https://x.com/TamrkarUjjwal?t=misiA4VjMy1hdgMxH1qOHQ&s=09">
        <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
