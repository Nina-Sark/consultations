import { useState } from "react";
import vector from "../assets/Vector.svg";
import { Checkbox } from "../styles/Checkbox.styled";
import { isMobile } from "react-device-detect";
import balckvector from "../assets/balckvector.svg";

function CustomCheckbox({checked}) {

    const [active, setActive] = useState(checked);

    const handleToggle = () => {
        setActive(!active);
    }

    return (
        <Checkbox id="Custom_Checkbox" active={active} onClick={handleToggle}>
            {active && <img src={isMobile ? balckvector : vector}/>}
        </Checkbox>
    )
}

export default CustomCheckbox
