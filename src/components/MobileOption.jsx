import styled from "styled-components"
import CircleComponent from "./Circle"
import CustomCheckbox from "./CustomCheckbox"
import smallVector from "../assets/SmallVector.svg";
import vectorUp from "../assets/VectorUp.svg";
import { useState } from "react";
import vector from "../assets/FrameOption.svg";
import { Link } from "react-router-dom";
import { theme } from "../styles/theme";

function MobileOptionContainer({title, subtitle, details, highlighted, details2}) {

    const [active, setActive] = useState(false)

    const handleToggle = event => {
        if(event.target.id !== "Custom_Checkbox") {
            setActive(!active)
        }
    }

    return (
        <MobileOption 
        onClick={handleToggle}
        style={{ border: highlighted ? `1px solid ${theme.main}` : "1px solid rgba(255, 255, 255, 0.63)" }}>
            {highlighted && (
                <img 
                style={{
                    position: "absolute",
                    bottom: 0,
                    right : 0,
                }}
                src={vector}/>
            )}
               <div style={{
               width: "24px",
               height : "31px",
               display: "flex",
               alignItems : "center"
           }}>
                   <CustomCheckbox/>
               </div>
               <div>
                   <MobileTitle><p>{title}</p></MobileTitle>
                   <MobileSubTitle>
                       <CircleComponent/> <span>{subtitle}</span>
                   </MobileSubTitle>

                   {highlighted && <StyledLink><Link id="link" to="/galary">Галерея hot резюме здесь</Link></StyledLink>}

                   {active && (
                       <div style={{ marginBottom : "0.5em" }}>
                           <Details>{details}</Details>
                           <Details>{details2}</Details>
                       </div>
                   )}
               </div>
               <div 
               style={{ cursor : "pointer", userSelect : "none" }}>
                   {!active ? (
                       <img
                       style={{ pointerEvents : "none" }}
                        src={smallVector}/>
                   ) : (
                    <img
                    style={{ pointerEvents : "none" }}
                     src={vectorUp}/>
                   )}
               </div>
            </MobileOption>
    )
}

export default MobileOptionContainer


const Details = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    font-size : 15px;
    color : #D3D3D3;
    margin-top: 0.9em;
    line-height: 20px;
    font-weight : 300;
`

const StyledLink = styled.div`
    margin-top : 0.35em;

    & > #link {
       color :#7C7C7C;
       font-weight: 400;
       font-size : 17px;
    }
`

const MobileOption = styled.div`  
    position: relative;
    width : 100%;
    box-sizing: border-box;
    padding : 0.8em 0.6em;
    display: none;
    border-radius: 7px;
    height : max-content;
    transition : height 0.67s ease;
    margin-bottom: 0.9em;

    @media screen and (max-width : 775px) {
       display: grid;
       grid-template-columns: 24px 1fr 20px;
       column-gap: 0.6em;
   }    
`

const MobileTitle = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

font-weight: 375;

  & > p {
    font-size : 17px;
   font-weight : 300;
   font-style: normal;
   line-height: 24px;
   color : #FFFFFF;
  }
`

const MobileSubTitle = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

font-weight: 300;
   
    margin-top: 0.2em;
    display: flex;
    align-items: center;
    gap : 0.4em; 
    color : #FFFFFF;
   & > span {
    line-height: 24px;
   font-size : 17px;
   font-style: normal;
   font-weight: 300;
   }
`