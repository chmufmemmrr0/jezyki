import { useNavigate } from "react-router-dom";

type ButtonProps = {
    path?: string;
    onClick?: () => void;
    children: React.ReactNode;
};

function Button({ path, onClick, children }: ButtonProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (onClick) onClick();
        if (path) navigate(path);
    };

    return (
        <button onClick={handleClick} className="animate-pulse-button px-8 py-8 m-5 w-64 text-2xl bg-yellow-500 text-white rounded-full shadow-xl hover:bg-yellow-500/75 hover:scale-110 transition duration-500 select-none">
            {children}
        </button>
    );
}

export default Button;