interface IInfoIconProps {
  stroke: string;
  size: number;
}

const InfoIcon = ({ stroke, size }: IInfoIconProps) => {
  return (
    <svg
      height={size}
      viewBox={`0 0 21 21`}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd" transform="translate(2 2)">
        <g stroke={stroke} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8.5" cy="8.5" r="8" />
          <path d="m8.5 12.5v-4h-1" />
          <path d="m7.5 12.5h2" />
        </g>
        <circle cx="8.5" cy="5.5" fill={stroke} r="1" />
      </g>
    </svg>
  );
};

export default InfoIcon;
