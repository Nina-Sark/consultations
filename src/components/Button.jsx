import { Button } from "../styles/Button.styled"

function ButtonComponent({title, radius}) {
    return (
        <Button responsiveWidth="100%" radius={radius} expand={true} width="188px">{title}</Button>
    )
}

export default ButtonComponent
