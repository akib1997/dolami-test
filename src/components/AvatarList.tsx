import AvatarCard from "./AvatarCard";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { IAvatarCard } from "../models/avatart-card.model";
import Pagination from "./Pagination";

const people = [
  { name: "Featured", value: "featured" },
  { name: "Price: Low to High", value: "priceLowToHigh" },
  { name: "Price: High to Low", value: "priceHighToLow" },
  { name: "Customer Review", value: "customerReview" },
  { name: "New", value: "new" },
  { name: "Polygon: Low to High", value: "polygonLowToHigh" },
  { name: "Polygon: High to Low", value: "polygonHighToLow" },
];

const AvatarList = () => {
  const [selected, setSelected] = useState(people[0]);

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <p className="text-base md:text-xl">All items</p>
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative w-60">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate text-sm md:text-base">Sort By {selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
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
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  />
                </svg>
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg sm:text-sm">
                {people.map((person, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                        active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                      }`
                    }
                    value={person}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate text-sm md:text-base ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
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
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {data.map((item) => (
          <AvatarCard key={item.id} data={item} />
        ))}
      </div>
      <div className="flex justify-center w-full my-6">
        <Pagination />
      </div>
    </>
  );
};

export default AvatarList;

const data: IAvatarCard[] = [
  {
    id: 1,
    name: "John Doe",
    title: "TestAvatar name “Avatown” -nice original avatar of Avatown",
    copyUrl: 'fdfazgszdgzs',
    image: "1",
    avatarUrl: "Test",
    price: 12,
    like: 12,
    rating: 2,
  },
  {
    id: 2,
    name: "John",
    title: "TestAvatar name “Avatown” -nice original avatar of Avatown",
    copyUrl: 'fdfazgszdgzs',
    image: "2",
    avatarUrl: "Test",
    price: 12,
    like: 12,
    rating: 3,
  },
  {
    id: 3,
    name: "“Avatown”",
    title: "AKib “Avatown” -nice original avatar of Avatown",
    copyUrl: 'fdfazgszdgzs',
    image: "2",
    avatarUrl: "Test",
    price: 12,
    like: 12,
    rating: 5,
  },
  {
    id: 4,
    name: "John",
    title: "John TestAvatar name “Avatown” -nice original avatar of Avatown",
    copyUrl: 'fdfazgszdgzs',
    image: "2",
    avatarUrl: "Test",
    price: 12,
    like: 12,
    rating: 4,
  },
  {
    id: 5,
    name: "John",
    title: "TestAvatar name “Avatown” -nice original avatar of Avatown",
    copyUrl: 'fdfazgszdgzs',
    image: "2",
    avatarUrl: "Test",
    price: 122,
    like: 92,
    rating: 3,
  },
  {
    id: 6,
    name: "John Doe",
    title: "TestAvatar name “Avatown” -nice original avatar of Avatown",
    copyUrl: 'fdfazgszdgzs',
    image: "1",
    avatarUrl: "Test",
    price: 12,
    like: 12,
    rating: 2,
  },
  {
    id: 7,
    name: "John",
    title: "Nice original avatar of Avatown",
    copyUrl: 'fdfazgszdgzs',
    image: "2",
    avatarUrl: "Test",
    price: 12,
    like: 12,
    rating: 3,
  },
  {
    id: 8,
    name: "John Doe",
    title: "HAvatown” -nice original avatar of Avatown",
    copyUrl: 'fdfazgszdgzs',
    image: "1",
    avatarUrl: "Test",
    price: 12,
    like: 12,
    rating: 2,
  },
  {
    id: 9,
    name: "John",
    title: "HAvatown” -nice original avatar of Avatown",
    copyUrl: 'fdfazgszdgzs',
    image: "2",
    avatarUrl: "Test",
    price: 12,
    like: 12,
    rating: 3,
  },
];
