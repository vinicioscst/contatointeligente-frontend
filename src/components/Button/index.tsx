interface IButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
  bgColor: string;
  textColor: string;
  hasImage?: boolean;
}

function Button({ type, children, bgColor, textColor, hasImage }: IButtonProps) {
  return (
    <button
      className={`${bgColor} ${textColor} ${hasImage === true && "flex gap-2 items-center"} py-3 px-4 font-bold leading-none rounded-md hover:-translate-y-1 transition-transform`}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;