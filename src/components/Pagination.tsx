const Pagination = () => {
  return (
    <ul className="flex items-center space-x-3">
      <li>
        <a href="#" className="inline-block text-base md:text-xl mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </a>
      </li>
      <li>
        <a href="#" className="inline-block px-2 text-base md:text-xl bg-gray-300">1</a>
      </li>
      <li>
        <a href="#" className="inline-block px-2 text-base md:text-xl">2</a>
      </li>
      <li>
        <a href="#" className="inline-block px-2 text-base md:text-xl">3</a>
      </li>
      <li>
        <a href="#" className="inline-block text-base md:text-xl mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
