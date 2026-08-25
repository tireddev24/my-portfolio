const CodeLoader = () => {
  return (
    <div className="flex items-center justify-center">
      <svg viewBox="0 0 300 120" className="w-45" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* < */}
        <path
          pathLength="1"
          d="M70 20 L25 60 L70 100"
          className="fill-none stroke-black/20 [stroke-width:14] [stroke-linecap:round] [stroke-linejoin:round]  "
        />

        <path
          pathLength="1"
          d="M70 20 L25 60 L70 100"
          className="fill-none stroke-black [stroke-width:14] [stroke-linecap:round] [stroke-linejoin:round] [stroke-dasharray:1] [stroke-dashoffset:1] animate-code-left"
        />

        {/* / */}
        <path
          pathLength="1"
          d="M135 105 L165 15"
          className="fill-none opacity-10 stroke-black [stroke-width:14] [stroke-linecap:round]"
        />

        <path
          pathLength="1"
          d="M135 105 L165 15"
          className="fill-none stroke-black [stroke-width:14] [stroke-linecap:round] [stroke-dasharray:1] [stroke-dashoffset:1] animate-code-slash"
        />

        {/* > */}
        <path
          pathLength="1"
          d="M230 20 L275 60 L230 100"
          className="fill-none opacity-10 stroke-black [stroke-width:14] [stroke-linecap:round] [stroke-linejoin:round]"
        />

        <path
          pathLength="1"
          d="M230 20 L275 60 L230 100"
          className="fill-none stroke-black [stroke-width:14] [stroke-linecap:round] [stroke-linejoin:round] [stroke-dasharray:1] [stroke-dashoffset:1] animate-code-right"
        />
      </svg>
    </div>
  );
};

export default CodeLoader;
