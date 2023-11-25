interface IMenuIconProps {
  stroke: string;
  size: number;
}

const MenuIcon = ({ stroke, size }: IMenuIconProps) => {
  return (
    <svg
      height={size}
      viewBox="0 0 21 21"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="none"
        fill-rule="evenodd"
        stroke={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m4.5 6.5h12" />
        <path d="m4.498 10.5h11.997" />
        <path d="m4.5 14.5h11.995" />
      </g>
    </svg>
  );
};

export default MenuIcon;
