import { NavLink } from "react-router-dom";
import logo from "../../pics/shop1.png";
import { BsCart4 } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="p-5 mb-12 flex justify-between">
      <div className="flex flex-row">
        <img className="h-10" src={logo} alt="logo"></img>
        <h1 className="pt-3 pl-2 text-xl font-medium">Medusa</h1>
      </div>
      <div className="navigation">
        <ul className="flex items-center">
          <NavLink
            className="hover:bg-gradient-to-r from-primary to-primary_varient px-3 py-2 hover:rounded-4xl"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="hover:bg-gradient-to-r from-primary to-primary_varient px-3 py-2 hover:rounded-4xl"
            to="/products"
          >
            Products
          </NavLink>
          <NavLink
            className="hover:bg-gradient-to-r from-primary to-primary_varient px-3 py-2 hover:rounded-4xl"
            to="/cart"
          >
            <BsCart4 />
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
