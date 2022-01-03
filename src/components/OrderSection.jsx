import { Link } from "react-router-dom"
import styled from "styled-components"
import { Button } from "../styles/Button.styled"
import { OrderSectionContainer } from "../styles/OrderSectionContainer.styled"
import { OrderSectioninput } from "../styles/OrderSectionInput.styled"

function OrderSection() {
    return (
        <OrderSectionContainer>
            <div>
                <OrderSectionTitle>Чтобы забрать понравившееся резюме посмотрите <StyledLink to="#">видео инструкцию</StyledLink></OrderSectionTitle>
                <OrderSectionSubtitle>Все резюме включают в себя мобильную и десктопную версии. Для просмотра десктопной версии введите email и мы отправим линк</OrderSectionSubtitle>
            </div>
            <div>
                <OrderSectioninput placeholder="E-mail"/>
                <Button expand={false} width="460px" responsiveWidth="100%">Отправьте мне линк</Button>
            </div>
        </OrderSectionContainer>
    )
}

const OrderSectionTitle = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    color : #FFFFFF;
    font-size : 24px;
    font-weight: 400;
    width : 600px;
  //  font-family: 'Roboto', sans-serif;

    
   @media screen and (max-width : 775px) {
       font-size : 17px;
       text-align: center;
       font-weight: 375;;
       padding : 1em;
       box-sizing: border-box;
       border-bottom: 1px solid #ebe9e9ae;
       width : 100%;
       color : #FFFFFF;
   }
`

const StyledLink = styled(Link)`
     color : ${(props) => props.theme.main}
`

const OrderSectionSubtitle = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');


    color : #ACACAC;
    font-size : 17px;
   // font-family: 'Roboto', sans-serif;
    line-height: 22px;;
    font-weight : 400;
    margin-top : 1em;
    width : 550px;

    
   @media screen and (max-width : 775px) {
       width : 95%;
       font-size : 15px;
       color : #fff;
       font-weight: 375;;
   }
   `

export default OrderSection
