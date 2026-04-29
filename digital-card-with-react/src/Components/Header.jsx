import profile from "../assets/profile.png"
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export function Header(){
    return(
        <header className="header">
            <img className="profile-img" src={profile} alt="profile image" />
            <h1>Fakhar Alam</h1>
            <p>Frontend Developer</p>
            <small>fakharalam.website</small>
            <div className="btn-container">
                <button className="email-btn">
                    <FaEnvelope style={{ marginRight: "8px" }} />
                    Email
                </button>
                <button className="linkedin-btn">
                    <FaLinkedin style={{ marginRight: "8px" }} />
                    LinkedIn
                </button>
            </div>
        </header>
    )
}