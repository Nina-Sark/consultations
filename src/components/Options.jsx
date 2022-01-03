import { useContext } from "react"
import styled from "styled-components"
import { Context } from "../Context/Context"
import { OptionsContainer } from "../styles/Options.styled"
import { theme } from "../styles/theme"
import ButtonComponent from "./Button"
import Circle from "./Circle"
import CustomCheckbox from "./CustomCheckbox"

function Options() {

    const { index, setIndex } = useContext(Context);
 
    const handleMouseOver = (id) => {
       setTimeout(() => {
        setIndex(id)
       }, 400)
    }

    const handleMouseLeave = () => {
        setTimeout(() => {
           setIndex(0)
        }, 400)
    }

    return (
        <OptionsContainer>
           <div style={{
               width: "24px",
               height : "35px",
               display: "flex",
               alignItems : "center"
           }}>
               <CustomCheckbox/>
           </div>
           <div
           style={{ cursor: "pointer", width : "max-content" }}
           onMouseOver={() => handleMouseOver(1)}>
               <Title>
               <Span size="20px" color="#fff">Instruction video по установке Creative online resume</Span> 
               <Circle></Circle>
               <Span>$10 за инструкцию</Span>
               </Title>
               <SubTitle width="475px">
                   <Span color="#c2bebe" size="15px">Видео с подробными инструкциями по build and deploy вашего резюме в онлайн формате</Span>
               </SubTitle>
           </div>

           <div style={{
               height : "35px",
               display: "flex",
               alignItems : "center"
           }}>
               <CustomCheckbox/>
           </div>
           <div 
           style={{ cursor: "pointer", width : "max-content" }}
           onMouseOver={() => handleMouseOver(2)}>
               <Title>
               <Span size="20px" color="#fff">Проверка вашего резюме (word/pdf)</Span> 
               <Circle></Circle>
               <Span>$25 за страницу</Span>
               </Title>
               <SubTitle width="523px">
                   <Span color="#c2bebe" size="15px">Проверим все пункты, на которые обращают внимание при приеме на работу. Раскрою все секреты грамотного и продающего резюме</Span>
               </SubTitle>
           </div>

           <div style={{
               height : "35px",
               display: "flex",
               alignItems : "center"
           }}>
               <CustomCheckbox/>
           </div>
           <div 
           style={{ cursor: "pointer", width : "max-content" }}
           onMouseOver={() => handleMouseOver(3)}>
               <Title>
               <Span size="20px" color="#fff">Консультация по востребованным скиллам</Span> 
               <Circle></Circle>
               <Span>$20 за 30 минут</Span>
               </Title>
               <SubTitle width="523px">
                   <Span color="#c2bebe" size="15px">Отвечу на любые вопросы. Поделюсь своим экспертным мнением </Span>
               </SubTitle>
           </div>

           <div style={{
               height : "35px",
               display: "flex",
               alignItems : "center"
           }}>
               <CustomCheckbox/>
           </div>
           <div
           style={{ cursor: "pointer", width : "max-content" }}
           onMouseOver={() => handleMouseOver(4)}>
               <Title>
               <Span size="20px" color="#fff">Разбор собеседования в аудио формате</Span> 
               <Circle></Circle>
               <Span>$15 за собеседование</Span>
               </Title>
               <SubTitle width="599px">
                   <Span color="#A7A7A7" size="15px"><span style={{ color : theme.main }}>Скачивайте приложение,</span> используйте его чтобы записать собеседование и поделиться со мной. Мы обсудим и найдем моменты где улучшить результат</Span>
               </SubTitle>
           </div>

         <ButtonComponent radius="10px" title="Заказать"/>
        </OptionsContainer>
    )
}

const SubTitle = styled.div`
    width : ${(props) => props.width};
    margin-top: 0.3em;
    line-height: 20px;
`

const Span = styled.div`
     font-weight: 400;
    font-size : ${(props) => props.size};
    color : ${(props) => props.color};
   // font-family: 'Roboto', sans-serif;
`

const Title = styled.div`


    display: flex;
    align-items: center;
    gap : 0.5em;
    font-weight: 375;
    color: #FFFFFF;
   // font-family: 'Roboto', sans-serif;
`



export default Options
