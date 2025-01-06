"use client";
import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import { BiCart } from "react-icons/bi";
import { IoIosClose, IoIosMenu, IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";

const Navbar: FC = () => {
  const [toggleTopbar, setToggleTopbar] = useState<boolean>(true);
  const [value, setValue] = useState<string>("");
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const OpenMenu = () => setToggleMenu((prev) => !prev);

  const menuRef = useRef<HTMLUListElement>(null);

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setToggleMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <>
      {toggleTopbar && (
        <div className="w-full h-[2.375rem] bg-primary-dark relative flex justify-center items-center gap-2 ">
          <span className="text-primary text-[0.75rem] font-normal  md:text-[0.875rem]">
            Sign up and get 20% off to your first order.
          </span>
          <span className="text-primary text-[1rem] font-medium  underline">
            Sign Up Now
          </span>

          <MdClose
            color="white"
            aria-label="close icon"
            onClick={() => setToggleTopbar(false)}
            className="hidden size-6 cursor-pointer md:absolute right-14 top- md:block "
          />
        </div>
      )}
      <div className="md:px-12 md:py-5 p-4 flex gap-10 justify-between items-center">
        <div className="flex gap-3  justify-between items-center">
          <IoIosMenu
            aria-label="menu icon"
            onClick={OpenMenu}
            className="cursor-pointer size-8 md:hidden"
          />

          <span
            onClick={handleLogoClick}
            className="font-Bebas font-bold text-[1.575rem]"
          >
            SHOP.CO
          </span>
          <ul
            ref={menuRef}
            className={`${toggleMenu ? "translate-x-0" : "-translate-x-full"} 
           flex gap-10 md:gap-2 list-none fixed top-0 left-0 w-[60%] h-[100vh] transition-transform duration-300 ease-in-out z-40
             bg-primary-light flex-col md:translate-x-0 md:static md:flex md:w-auto md:h-auto md:flex-row justify-center items-center md:bg-primary`}
          >
            <li className="text-primary-dark  text-xs ">Shop</li>
            <li className="text-primary-dark  text-xs ">On Sale</li>
            <li className="text-primary-dark  text-xs ">New Arrivals</li>
            <li className="text-primary-dark  text-xs ">Brands</li>
          </ul>
        </div>
        <div className="hidden   md:block relative">
          <input
            type="text"
            className="rounded-lg w-[35vw] bg-primary-light px-10 py-1 cursor-pointer"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search for products..."
          />
          {!value && (
            <IoIosSearch
              aria-label="search icon"
              color="grey"
              className="cursor-pointer absolute left-4 top-2"
            />
          )}
        </div>
        <div className="flex gap-3 justify-between items-center">
          <IoIosSearch
            aria-label="search icon"
            onClick={() => setModal(true)}
            className="cursor-pointer size-6 md:hidden"
          />
          <Link href="#">
            <BiCart
              aria-label="cart icon"
              className="cursor-pointer size-6 md:"
            />
          </Link>
          <Link href="#">
            <RxAvatar
              aria-label="avatar icon"
              className="cursor-pointer size-6 md:"
            />
          </Link>
        </div>
      </div>
      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-primary w-[90%] p-10 md:w-[400px] rounded-lg shadow-lg relative">
            <IoIosClose
              aria-label="close icon"
              onClick={() => setModal(false)}
              className="absolute top-2 right-2 cursor-pointer text-xl"
            />

            <input
              type="text"
              onChange={(e) => setValue(e.target.value)}
              className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Search for products..."
            />

            <p className="text-sm">You can add any content here.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
