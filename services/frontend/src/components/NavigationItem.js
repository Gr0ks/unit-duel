import { Link } from "react-router-dom";

export default function NavigationItem({children, href, ...other}) {
    return (
        <li>
            <Link to={href}>{ children }</Link>
        </li>
    );
}