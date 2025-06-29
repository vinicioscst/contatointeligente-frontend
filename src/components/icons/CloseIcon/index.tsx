interface ICloseIconProps {
    stroke: string;
    size: number;
  }

function CloseIcon({size, stroke}: ICloseIconProps) {
  return (
    <svg
    height={size}
    viewBox={`0 0 21 21`}
    width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(5 5)"
      >
        <path d="m10.5 10.5-10-10z" />
        <path d="m10.5.5-10 10" />
      </g>
    </svg>
  );
}

export default CloseIcon;
