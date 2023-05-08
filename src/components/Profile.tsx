import ProfilePicture from "./../assets/profile.png";

import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

function Profile() {
  return (
    <>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : ""}
                bg-white outline-none border-none p-1 rounded`}
            >
              <img src={ProfilePicture} alt="profile" className="w-6" />
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
              <Popover.Panel className="absolute right-0 top-12 z-10 w-40 bg-white">
                <div className="overflow-hidden rounded-lg shadow-lg p-3">
                  <ul className="relative grid grid-cols-1 gap-4">
                    <li>
                      <a href="#" className="text-black inline-block">Profile</a>
                    </li>
                    <li>
                      <a href="#" className="text-black inline-block">Settings</a>
                    </li>
                    <li>
                      <a href="#" className="text-black inline-block">Logout</a>
                    </li>
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

export default Profile;
