import React from "react";

const Tag = ({ title, onRemove }) => {
  return (
    <div className="flex overflow-hidden rounded-md">
      <div className="bg-light-grayish-cyan-background text-desaturated-dark-cyan font-bold text-lg rounded-md px-3 py-1">
        {title}
      </div>
      <button
        onClick={() => onRemove(title)}
        className="bg-desaturated-dark-cyan hover:bg-very-dark-grayish-cyan p-2.5 cursor-pointer  duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
          <path
            fill="#FFF"
            fill-rule="evenodd"
            d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
          />
        </svg>
      </button>
    </div>
  );
};

const Header = ({ searchTags, onRemove, onClear }) => {
  return (
    <header className="bg-no-repeat bg-image-mobile xs:bg-image-desktop bg-desaturated-dark-cyan h-[156px] w-full relative px-[8%] ">
      <h1 className="sr-only">Job Listing With Filtering</h1>
      {searchTags.length > 0 && (
        <div className="relative h-full ">
          <div
            className="
      absolute left-0 right-0 -bottom-10  s
      flex bg-white px-10 py-5 rounded-md justify-between items-center gap-4"
          >
            <div className="flex gap-5 flex-wrap">
              {searchTags.map((searchTag) => (
                <Tag title={searchTag} onRemove={onRemove} />
              ))}
            </div>
            <div
              onClick={onClear}
              className="text-desaturated-dark-cyan hover:underline font-bold cursor-pointer "
            >
              Clear
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
