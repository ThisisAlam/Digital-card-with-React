import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="footer">
      <button><FaFacebook /></button>
      <button><FaInstagram /></button>
      <button><FaXTwitter /></button>
      <button><FaGithub /></button>
    </footer>
  );
}