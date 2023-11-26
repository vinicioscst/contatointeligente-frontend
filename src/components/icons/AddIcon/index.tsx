interface IAddIconProps {
  stroke: string;
  size: number;
}

const AddIcon = ({ stroke, size }: IAddIconProps) => {
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
      >
        <path d="m5.5 10.5h10" />
        <path d="m10.5 5.5v10" />
      </g>
    </svg>
  );
};

export default AddIcon;
