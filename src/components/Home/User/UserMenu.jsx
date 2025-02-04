import { useRef } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { deleteUser } from "../../../redux/userSlice";

const UserMenu = ({ handleShowMenu, showMenu }) => {
  const refUserNav = useRef(null);
  const dispatch = useDispatch();

  const hideShowMenu = () => {
    refUserNav.current.classList.add("hide-animate-fadeInUp");
  };

  return createPortal(
    <aside
      className={`user-menu  show-animate-fadeInUp   xs:w-full xs:h-full lg:w-[200px] lg:h-max lg:border lg:border-gray-50/50 
         lg:rounded-md lg:-bottom-14 lg:right-0 bg-black text-white absolute z-50`}
      onAnimationEnd={(e) => {
        e.target.classList.remove("show-animate-fadeInUp");
        //e.target.classList.remove("hide-animate-fadeOutDown");
      }}
      ref={refUserNav}
    >
      <div className="relative xs:w-full xs:h-full  xs:py-16 xs:px-8  lg:p-2">
        <nav className="lg:w-full lg:h-full">
          <ul className="flex flex-col xs:gap-3 lg:gap-2 lg:w-full lg:h-full lg:justify-center">
            <li className="lg:hidden">
              <Link
                to={"/profile"}
                className="font-bold xs:text-[clamp(1.5rem,1.5vw,2rem)] lg:text-lg"
                onClick={() => {
                  handleShowMenu();
                  hideShowMenu();
                }}
              >
                Perfil
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="font-bold xs:text-[clamp(1.5rem,1.5vw,2rem)] lg:text-lg"
                onClick={() => {
                  dispatch(deleteUser());
                  //handleShowMenu();
                  //hideShowMenu();
                }}
              >
                Cerrar sesión
              </button>
            </li>
          </ul>
        </nav>
        <button
          className="absolute lg:hidden text-3xl  top-5 right-5"
          onClick={() => {
            handleShowMenu();
            hideShowMenu();
          }}
        >
          ✖
        </button>
      </div>
    </aside>,
    window.innerWidth < 1024
      ? document.getElementById("root")
      : document.querySelector(".user__options")
  );
};

export default UserMenu;
