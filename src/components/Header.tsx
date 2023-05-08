import Logo from "./../assets/logo.png";
import Notification from './Notification';
import Profile from './Profile';
import Cart from './Cart';

function Header() {
  return (
    <header className="px-3 pt-3 pb-2 shadow bg-gradient-to-r from-[#361d84] to-[#86208b] text-white fixed top-0 w-full z-10">
      <div className="ss">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-10">
            <div className="logo">
              <a href="#">
                <img src={Logo} alt="logo" className="w-32" />
              </a>
            </div>
            <a href="#" className="underline text-white text-base lg:text-xl font-medium sm:inline-block hidden">Go to Marketpage</a>
          </div>

          <div className="flex space-x-4 items-center">
            <div className="relative sm:inline-block hidden">
              <input type="text" className="max-w-md w-full bg-white text-black border-none outline-none px-4 py-1 text-sm rounded" />
              <button className="bg-transparent border-none outline-none absolute right-3 top-1 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </div>
            <Notification />
            <Cart />
            <Profile />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
