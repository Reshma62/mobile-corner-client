import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import Container from "../Container";
import NavItem from "../NavItem";

const MenuItem = [
  { href: "/", menuItem: "Home" },
  { href: "/about", menuItem: "Shop" },
  { href: "/whislist", menuItem: "Whistlist" },
  { href: "/cart", menuItem: "Cart" },
  { href: "/checkout", menuItem: "Checkout" },
];
const user = false;
function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className="border-b bg-gradient-to-r from-indigo-600 to-purple-400 border-indigo-600">
      <Container>
        <div className="flex justify-between p-5 items-center">
          <ul className="hidden  md:flex gap-6 text-white">
            {MenuItem.map((menu) => (
              <NavItem
                key={menu.href}
                href={menu.href}
                menuItem={menu.menuItem}
              />
            ))}
          </ul>
          {user ? (
            <div className="group relative">
              <img src="" alt="user image" />
              <ul className="flex text-white transition-opacity duration-200 px-2 py-3 rounded-lg w-[150px] bg-gradient-to-r from-indigo-600 to-purple-400  flex-col opacity-0 group-hover:opacity-100 absolute top-full">
                <Link to="/my-account">My account</Link>
                <Link to="/my-account">Logout</Link>
              </ul>
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="bg-white px-5 py-2 rounded-lg">Login</button>
            </Link>
          )}

          {/* Hamburger or Close Icon */}
          <div className=" md:hidden z-10" onClick={handleClick}>
            {nav ? (
              <FaTimes size={25} color="white" />
            ) : (
              <RxHamburgerMenu size={25} />
            )}
          </div>
          {/* Mobile Menu */}
          <ul
            className={`${
              nav
                ? "text-white opacity-100 transform translate-x-0"
                : "opacity-0 transform -translate-y-full"
            } transition-transform absolute top-0 left-0 w-full h-screen bg-zinc-800/80 flex flex-col justify-center items-center text-2xl`}
            onClick={() => setNav(false)}
          >
            <Link to="/">
              <li className="hover:text-teal-700">Home</li>
            </Link>
            <Link to="/features">
              <li className="hover:text-teal-700">Features</li>
            </Link>
            <Link to="/products">
              <li className="hover:text-teal-700">Products</li>
            </Link>
            <Link to="/about">
              <li className="hover:text-teal-700">About</li>
            </Link>
            <Link to="/locations">
              <li className="hover:text-teal-700">Locations</li>
            </Link>
            <Link to="/contact">
              <li className="hover:text-teal-700">Contact Us</li>
            </Link>
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
