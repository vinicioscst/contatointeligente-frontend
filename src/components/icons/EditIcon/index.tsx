interface IEditIconProps {
  stroke: string;
  size: number;
}

function EditIcon({ stroke, size }: IEditIconProps) {
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
        transform="translate(3 3)"
      >
        <path d="m7 1.5h-4.5c-1.1045695 0-2 .8954305-2 2v9.0003682c0 1.1045695.8954305 2 2 2h10c1.1045695 0 2-.8954305 2-2v-4.5003682" />
        <path d="m14.5.46667982c.5549155.5734054.5474396 1.48588056-.0167966 2.05011677l-6.9832034 6.98320341-3 1 1-3 6.9874295-7.04563515c.5136195-.5178979 1.3296676-.55351813 1.8848509-.1045243z" />
        <path d="m12.5 2.5.953 1" />
      </g>
    </svg>
  );
}

export default EditIcon;
