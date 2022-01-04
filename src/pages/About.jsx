import { Link } from "react-router-dom"
import styled from "styled-components"
import { PageContainer } from "../styles/Container.styled"
import { Container } from "../styles/Main.styled"
import telegramWhiteBg from "../assets/telegramWhiteBg.svg";
import avatar from "../assets/avatar.png";
import bottomLine from "../assets/vectorLine.svg";
import brain from "../assets/Brain.svg";
import Card from "../components/Card";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import CardsContainer from "../components/CardsContainer";
import { isMobile } from "react-device-detect";

function About() {
    return (
        <PageContainer>
            <Container width="530px" gap="20em"> 
                <div>
                  <Flex>
                      <div>
                          <LinkContainer to="/">
                             {isMobile ?  <HiOutlineArrowNarrowLeft style={{ fontSize : "35px" }}/> : "Назад"}
                          </LinkContainer>
                          <Title>
                            <span>Anatoly Raklyar</span>
                          </Title>
                          <Icon
                           src={telegramWhiteBg}/>
                      </div>
                      <div>
                        <img src={avatar}/>
                      </div>
                  </Flex>
                  <BottomLine>
                      <img style={{ width : "100%" }} src={bottomLine}/>
                  </BottomLine>
                  <Description>
                      <span>
                      25 лет в бизнесе и в успешных компаниях в Нью Йорке. MBA из NYU.  Консультировал финтех компании по архитектуре ПО и найму специалистов, практически все работодатели и клиенты заняли первые строчки в своей нише.
                      </span>
                  </Description>
                </div>
                <ImageContainer>
                    <img src={brain}/>
                </ImageContainer>
            </Container>

            <div>
                <CardContainerTitle>
                    <span>
                    Отвечу на вопросы и разберем все этапы на пути к работе мечты:
                    </span>
                </CardContainerTitle>
                <CardsContainer/>
            </div>
        </PageContainer>
    )
}

const Icon = styled.img`
    margin-top : 1.7em;
    cursor: pointer;

    @media screen and (max-width : 775px) {
        margin-top : 1em;
    }
`

const ImageContainer = styled.div`
    @media screen and (max-width : 775px) {
       display: none;
   }

   @media screen and (min-width : 775px) and (max-width : 1250px) {
       display : none;
   }
`

const CardContainerTitle = styled.div`
    width : 407px;
    box-sizing: border-box;
    
    & > span {
        color : ${(props) => props.theme.main};
        font-size : 20px;

        @media screen and (max-width : 775px) {
            color : #FFFFFF;
            font-weight: 300;
        }
    }

    @media screen and (max-width : 775px) {
       width : 100%;
       margin-top : 1.2em;
       & > span {
        font-size: 17px;
       }
   }

   @media screen and (min-width : 775px) and (max-width : 1250px) {
        width : 100%;
        margin-bottom: 2em;
        margin-top : 1em;
       // padding : 1.5em;
   }
`
const BottomLine = styled.div`
    width : 100%;
    position: relative;

    @media screen and (max-width : 775px) {
      width : 100%;
    }
    @media screen and (min-width : 775px) and (max-width : 1250px) {
        width : 60%;
    }
`

const Flex = styled.div`
    width : 514px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap : 2em;
    margin-bottom: 0.8em;

    @media screen and (max-width : 775px) {
      width : 100%;
      margin-bottom: 0.15em;
    }
    @media screen and (min-width : 775px) and (max-width : 1250px) {
        width : 60%;
    }
`

const Description = styled.div`
    width : 514px;
    font-size : 17px;
    font-weight: 400;
    margin-top: 1em;
    color : #FFFFFF;

    @media screen and (max-width : 775px) {
      width : 100%;
      font-weight: 300;
      font-size : 17px;
    }

    @media screen and (min-width : 775px) and (max-width : 1250px) {
        width : 60%;
    }
`

const Title = styled.div`
    font-size : 30px;
    font-weight: 700;
    margin-top: 0.4em;

    @media screen and (max-width : 775px) {
       font-size: 25px;
       color : #fff;
       font-weight : 700;
   }
`

const LinkContainer = styled(Link)`
    font-size : 20px;
    font-weight: 400;
    color : #FFFFFF;
    text-decoration: none;
    margin-bottom: 2em;

    @media screen and (max-width : 775px) {
       font-size: 17px;
   }
`

export default About
