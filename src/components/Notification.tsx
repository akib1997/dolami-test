import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

const notifications = [
  {
    id: 1,
    title: "Activated",
    description:
      "The key to your success is the brand you build for yourself through your Fiverr reputation",
    date: new Date(),
    isChecked: true,
  },
  {
    id: 2,
    title: "Ongoing",
    description:
      "We gathered some tips and resources to help you become a leading seller on Fiverr.",
    date: new Date(),
    isChecked: false,
  },
  {
    id: 3,
    title: "Poused",
    description:
      "Diverr is the brand you build for yourself through your Fiverr reputation",
    date: new Date(),
    isChecked: true,
  },
];

function Notification() {
  return (
    <>
      <Popover className="relative">
        {({ open }) => (
          <>
          <span className="bg-red-700 text-white w-4 h-4 rounded-full absolute -top-1.5 -right-1.5 text-xs inline-flex items-center justify-center font-semibold">2</span>
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
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
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
              <Popover.Panel className="absolute top-14 right-0 z-10 w-80 bg-white">
                <div className="overflow-hidden rounded-lg shadow-lg text-black p-3">
                  <div className="flex justify-between items-center pb-3 mb-3 border-b border-opacity-50">
                    <p className="text-lg font-medium">Notifications</p>
                    <a
                      href="#"
                      className="text-blue-500 inline-block font-medium"
                    >
                      Mark as read
                    </a>
                  </div>
                  <ul className="relative grid grid-cols-1 gap-4 pb-3 mb-3 border-b border-opacity-50">
                    {notifications.map((item) => (
                      <li key={item.id} className="text-black cursor-pointer">
                        <div className="relative pl-5">
                          <span
                            className={`w-3 h-3 rounded-full mt-1 inline-block absolute left-0 ${
                              item.isChecked ? "bg-gray-500" : "bg-green-600"
                            }`}
                          ></span>
                          <p className="leading-tight mb-1 text-sm">
                            <b className="pr-1">{item.title}!</b>
                            {item.description.slice(0, 50)}...
                          </p>
                          <span>
                            {item.date.getDate()}-{item.date.getMonth()}-
                            {item.date.getFullYear()}{" "}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <a
                      href="#"
                      className="text-blue-500 inline-block font-medium"
                    >
                      View all notifications
                    </a>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
}

export default Notification;
