import styled from "styled-components";

export const SubTitle = styled.p`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

   width : 600px;
   color : #FFFFFF;
   font-size : 20px;
   font-weight : 400;
   //font-family: 'Roboto', sans-serif;

   @media screen and (max-width : 775px) {
       width : 95%;
       font-size: 17px;
       margin-top : 0.5em;
       font-weight: 300;
   }

   @media screen and (min-width : 775px) and (max-width : 1280px) {
       width : 100%;
       font-size : 18px;
   }
`