import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

const notifications = [
  {
    name: "Insights",
  },
  {
    name: "Automations",
  },
  {
    name: "Reports",
  },
];

function Cart() {
  return (
    <>
      <Popover className="relative">
        {({ open }) => (
          <>
           <span className="bg-red-700 text-white w-4 h-4 rounded-full absolute -top-1.5 -right-1.5 text-xs inline-flex items-center justify-center font-semibold">8</span>
            <Popover.Button
              className={`
                ${open ? "" : ""}
                bg-black bg-opacity-70 outline-none border-none p-2 rounded-md`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute top-12 z-10 w-60 right-0 bg-white">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <ul className="relative p-3 grid grid-cols-1 gap-4">
                    {notifications.map((item) => (
                      <li
                        key={item.name}
                        className="text-black cursor-pointer inline-flex space-x-4 items-start"
                      >
                        <span className="w-2 h-2 rounded-full bg-green-600"></span>
                        <span>{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
}

export default Cart;
