const LinkText = (props) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group underline text-base duration-150 hover:text-[#19A1FD]"
    >
      {props.text}
      <span className="inline-block align-middle ml-[5px]">
        <svg
          className="stroke-1 stroke-[#333333] duration-150 group-hover:stroke-[#19A1FD] group-hover:-translate-y-px group-hover:translate-x-px"
          width="9"
          height="9"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 10L10 1M10 1H3M10 1V8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
};

export default LinkText;
