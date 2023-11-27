interface ISmileIconProps {
    stroke: string;
    size: number;
  }

function SmileIcon({ size, stroke }: ISmileIconProps) {
  return (
    <svg
    height={size}
    viewBox={`0 0 21 21`}
    width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd" transform="translate(2 2)">
        <circle
          cx="8.5"
          cy="8.5"
          r="8"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="6" cy="6" fill={stroke} r="1" />
        <circle cx="11" cy="6" fill={stroke} r="1" />
        <path
          d="m5.5 9.5c.60286458 1.3333333 1.60286458 2 3 2s2.3971354-.6666667 3-2"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default SmileIcon;
