import { Link } from "react-router-dom";

export default function NavigationItem({children, href, ...other}) {
    return (
        <li className="navigation-item">
            <Link to={href}>{ children }</Link>
        </li>
    );
}