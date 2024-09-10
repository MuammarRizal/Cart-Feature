const Button = ({
  type,
  children,
  bgColor = "bg-slate-500",
  textColor = "text-white",
  onclick = () => {},
}) => {
  return (
    <button
      type={type}
      className={`text-white px-6 py-2 border rounded w-full bg- ${bgColor} ${textColor} font-semibold flex justify-center items-center`}
      onClick={onclick}
    >
      {children}
    </button>
  );
};

export default Button;
