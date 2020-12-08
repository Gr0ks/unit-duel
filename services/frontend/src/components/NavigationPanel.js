import NavigationItem from "./NavigationItem";

export default function Nav() {
    return (
            <ul>
                <NavigationItem href="/">Home</NavigationItem>
                <NavigationItem href="/about">About</NavigationItem>
                <NavigationItem href="/users">Users</NavigationItem>
            </ul>
    );
}