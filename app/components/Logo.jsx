const Logo = ({ className }) => {
  return (
    <svg
      className={className}
      width="120"
      height="40"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 35V5H15V27H35V35H5Z" fill="currentColor" />
      <path d="M40 35V5H70V13H50V17H65V25H50V35H40Z" fill="currentColor" />
      <path
        d="M75 35V5H105V13H85V17H100V25H85V27H105V35H75Z"
        fill="currentColor"
      />
      <path d="M110 35V5H120V35H110Z" fill="currentColor" />
    </svg>
  );
};

export default Logo;
