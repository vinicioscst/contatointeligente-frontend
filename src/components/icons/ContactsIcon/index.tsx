interface IContactsIconProps {
    stroke: string;
    size: number;
  }

const ContactsIcon = ({ stroke, size }: IContactsIconProps) => {
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
        <circle cx="7.5" cy="5.5" r="2" />
        <path d="m.5 3.5h1v-1c0-1.1045695.8954305-2 2-2h8c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2h-8c-1.1045695 0-2-.8954305-2-2v-1h-1" />
        <path d="m.5 7.5h1" />
        <path d="m.5 5.5h1" />
        <path d="m.5 9.5h1" />
        <path d="m10.5 10.5v-1c0-1.1045695-.8954305-2-2-2h-2c-1.1045695 0-2 .8954305-2 2v1c0 .5522847.44771525 1 1 1h4c.5522847 0 1-.4477153 1-1z" />
      </g>
    </svg>
  );
};

export default ContactsIcon;
