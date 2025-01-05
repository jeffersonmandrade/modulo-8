import { NavLink } from "react-router-dom";

interface Route {
    name: string;
    route: string;
}

const Menu: React.FC = () => {
    const routes: Route[] = [
        { name: "Home", route: "/" },
        { name: "Register", route: "/register" },
    ];

    return (
        <nav>
            {routes.map((item, i) => (
                <NavLink key={i} to={item.route}>
                    {item.name}
                </NavLink>
            ))}
        </nav>
    );
};

export default Menu;
