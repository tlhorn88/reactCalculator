import { Textfit } from "https://cdn.skypack.dev/react-textfit@1.1.1";
import "./Screen.css";

const Screen = ({ value }) => {
    return (
        <Textfit className="screen" mode="single" max={70}>
            {value}
        </Textfit>
    );
};

export default Screen;