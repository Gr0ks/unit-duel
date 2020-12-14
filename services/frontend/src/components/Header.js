import NavigationItem from "./NavigationItem";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <div className="logo">
                <Link to="/">Logo</Link>
            </div>
            <ul className="navigation-panel">
                <NavigationItem href="/">Home</NavigationItem>
                <NavigationItem href="/room">Room</NavigationItem>
                <NavigationItem href="/login">Login</NavigationItem>
            </ul>
            <div className="profile">
                <Link to="/user">Profile</Link>
            </div>
        </div>

    );
}