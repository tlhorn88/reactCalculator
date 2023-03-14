import { Textfit } from "https://cdn.skypack.dev/react-textfit@1.1.1";
import "./Screen.css";

const Screen = ({ value }) => {
    return (
        <div>

            <h1 className="screen" max={70}>
                {value}
            </h1>

            {/* <Textfit className="screen" mode="single" max={70}>
                {value}
            </Textfit> */}
        </div>
    );
};

export default Screen;