import { useEffect, useRef, useState } from "react";
import { IAvatarCard } from "../models/avatart-card.model";
import useOnClickOutside from "../utils/useOnClickOutside";
import useCopyToClipboard from "../utils/useCopyToClipboard";

interface IAvatarCardProps {
  data: IAvatarCard;
}

const AvatarCard = ({ data }: IAvatarCardProps) => {
  const [copy, setCopy] = useState<Boolean | null | string>(false);
  const [copyTooltip, setCopyTooltip] = useState<Boolean>(false);
  const [liked, setLiked] = useState<Boolean | null | string>(false);
  const ref = useRef<HTMLDivElement>(null);
  const [value, copyLink] = useCopyToClipboard();

  useOnClickOutside(ref, () => {
    setCopy(false)
    setCopyTooltip(false)
  });

  const toggleCopy = (index: any) => {
    if (copy === index) {
      return setCopy(null);
    }
    setCopy(index);
  };

  const toggleLike = (index: any) => {
    if (copy === index) {
      return setLiked(false);
    }
    setLiked(index);
  };

  return (
    <div className="bg-white relative rounded overflow-hidden">
      <button className="border-none outline-none bg-blue-700 text-white rounded flex items-center space-x-1 text-xs absolute right-4 top-4 py-1 px-2">
        <IconCart /> <span>Add</span>
      </button>
      <img
        src={`http://localhost:5173/src/assets/avatar-pictures/avatar(${Number(
          data.id
        )}).png`}
        alt={data.title}
        className="w-full block"
      />
      <div className="p-2">
        <p className="font-medium text-sm sm:text-base">{data.copyUrl}</p>
        <div className="flex items-center mb-1">
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-yellow-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </li>
          </ul>
          <p className="ml-3">
            {data.rating} && {data.like} Likes
          </p>
          <button
            onClick={() => toggleLike(data.id)}
            className="border-none outline-none inline-block ml-auto"
          >
            {liked === data.id ? <IconHartSolid /> : <IconHart />}
          </button>
        </div>
        <div className="flex space-x-4 items-center">
          <img
            src={`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`}
            alt={data.name}
            className="w-8 h-8 rounded-full object-cover block"
          />
          <p>{data.name}</p>
        </div>
        <p>
          $ <span className="text-3xl font-semibold">{data.price}</span>
        </p>
        <div className="flex space-x-3 items-center">
          <span className="w-4 h-4 rounded-full bg-sky-400"></span>
          <span className="text-[11px] font-medium">PC Only</span>
        </div>

        <div className="flex relative">
          {copyTooltip ? (
            <div className="bg-gray-300 text-black font-medium rounded px-1 text-xs absolute -right-2 -top-12 transition-all cursor-pointer">
              Copied
            </div>
          ) : null}

          {copy === data.id ? (
            <div
              onClick={() => {
                copyLink(data.copyUrl);
                setCopyTooltip(true)
              }}
              ref={ref}
              className="border border-gray-500 bg-white text-gray-700 rounded p-1 inline-flex items-center space-x-1 absolute right-0 -top-6 transition-all cursor-pointer"
            >
              <IconLink />
              <p className="font-medium text-xs">Copy Link</p>
            </div>
          ) : null}
          <p className="text-[11px] font-medium">
            Auto upload service ready, you can use this avatar within 24 hours.
          </p>
          <button onClick={() => toggleCopy(data.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvatarCard;

function IconLink() {
  return (
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
        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
      />
    </svg>
  );
}
function IconHart() {
  return (
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
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  );
}
function IconHartSolid() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 text-red-600"
    >
      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
    </svg>
  );
}
function IconCart() {
  return (
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
  );
}
