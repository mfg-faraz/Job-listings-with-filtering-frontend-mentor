import React from "react";

const Tag = ({ title ,onClick }) => {
  return (
    <div onClick={()=>onClick(title)} className="bg-light-grayish-cyan-background text-desaturated-dark-cyan font-bold text-lg rounded-md px-3 py-1 hover:bg-desaturated-dark-cyan hover:text-white duration-300 cursor-pointer">
      {title}
    </div>
  );
};

const JobSection = ({ job,onClick }) => {
  return (
    <div className={`grid grid-cols-1 gap-10   mx:grid-cols-2 bg-white xlg:mb-7 mb-14 xlg:px-10  px-5 py-8 xlg:pt-8 pt-10  rounded-md relative 
      shadow-[3px_3px_20px_5px]shadow-desaturated-dark-cyan-shadow
      ${job.featured&&"before:absolute before:content-[''] before:h-full before:w-[5px] before:rounded-s-md before:bg-desaturated-dark-cyan"}
    `}>
      <div className="flex gap-5">
        <div className="xlg:relative xlg:top-0 -top-8 absolute">
          <img
            src={`${job.logo}`}
            alt={`image-${job.company}`}
            className=" xlg:w-24 w-16"
          />
        </div>
        <div className=" flex flex-col justify-between">
          <div className="flex gap-5">
            <h3 className="text-xl font-bold text-desaturated-dark-cyan">
              {job.company}
            </h3>
            {job.new && (
              <span className="px-2 pt-1   bg-desaturated-dark-cyan rounded-full font-bold text-sm flex items-center text-white">
                NEW!
              </span>
            )}
            {job.featured && (
              <span className=" px-2 pt-1.5 rounded-full bg-very-dark-grayish-cyan text-white font-bold text-sm ">
                FEATURED
              </span>
            )}
          </div>
          <h2 className="text-very-dark-grayish-cyan text-2xl font-bold">
            {job.position}
          </h2>
          <div className="flex gap-5 text-dark-grayish-cyan items-center ">
            <div className="text-lg font-medium">{job.postedAt}</div>
            <div className="text-xl font-bold flex items-center">.</div>
            <div className="text-lg font-medium">{job.contract}</div>
            <div className="text-xl font-bold flex items-center">.</div>
            <div className="text-lg font-medium">{job.location}</div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end">
      <div className="flex gap-5 flex-wrap ">
        <Tag title={job.role} onClick={onClick}/>
        <Tag title={job.level} onClick={onClick} />
        {job?.languages.map((lang,i) => (
          
          <Tag key={i} title={lang} onClick={onClick}/>
        ))}
        {job?.tools.map((tool,i) => (
          <Tag key={i} title={tool}onClick={onClick} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default JobSection;
