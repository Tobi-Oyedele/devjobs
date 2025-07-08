interface ButtonProps {
  name: string;
}

const Button: React.FC<ButtonProps> = ({ name }) => {
  return (
    <div>
      <button className="cursor-pointer bg-primary-blue text-white px-24 py-2.5 md:px-10 rounded-lg hover:bg-primary-light-violet font-bold">
        {name}
      </button>
    </div>
  );
};

export default Button;
