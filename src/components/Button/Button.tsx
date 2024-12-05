interface ButtonProps extends HTMLDivElement {
  content: string;
}

function Button({ content }: ButtonProps) {
  return (
    <div className="p-2 bg-white border border-beige w-fit">{content}</div>
  );
}

export default Button;
