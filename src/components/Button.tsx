interface ButtonProps {
  name: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ name, onClick }) => {
  return (
    <div>
      <button
        className="cursor-pointer bg-primary-blue text-white px-24 py-2.5 md:px-10 rounded-lg hover:bg-primary-light-violet font-bold w-full"
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
