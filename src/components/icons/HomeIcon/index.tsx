interface IHomeIconProps {
  stroke: string;
  size: number;
}

const HomeIcon = ({ stroke, size }: IHomeIconProps) => {
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
        transform="translate(1 1)"
      >
        <path d="m.5 9.5 9-9 9 9" />
        <path d="m2.5 7.5v7c0 1.1045695.8954305 2 2 2h10c1.1045695 0 2-.8954305 2-2v-7" />
      </g>
    </svg>
  );
};

export default HomeIcon;
