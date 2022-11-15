import styled from "styled-components"
const IntroContainer = styled.div`
    height: calc(100vh - 60px);
    display: flex;
    overflow: hidden;
`

const LeftSide =  styled.div`
    height: calc(100vh - 60px);
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const RightSide = styled.div`
    height: calc(100vh - 60px);
    width: 40%;
    display: flex;
    align-items: flex-end;

`

const LeftHeading = styled.h1`
    width: 60%;
    font-size: 3rem;
`

const Desc = styled.p`
    width: 60%;
    font-size: 1.3rem;
`

const Info = styled.div`
    display: flex;
    width: 60%;
    justify-content: space-between;
    margin-top: 40px;
`
const Button = styled.button`
    padding: 10px 25px;
    background-color: darkblue;
    color: white;
`
const Contacts = styled.div`
    display: flex;
    flex-direction: column;
`
const Phone = styled.span`
    
`
const ContactText = styled.span`
    
`

const Image = styled.img``

const Shape = styled.div`
    clip-path: polygon(49% 0, 100% 0, 100% 100%, 13% 100%);
    background-color: crimson;
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    width: 100vh;
    height: 100vh;

`
const Intro = () => {
    return(
        <IntroContainer>
            <LeftSide>
                <LeftHeading>Adventures in creative age</LeftHeading>
                <Desc>We believe that designing products and services in close partnership with our clients is the only way to have a real impact on their business. </Desc>
                <Info>
                    <Button>Start a Project</Button>
                    <Contacts>
                        <Phone>Call us (012) 345 - 6789</Phone>
                        <ContactText>For any questions or concern</ContactText>
                    </Contacts>

                </Info>
                
            </LeftSide>
            <RightSide>
                <Image src="http://pngimg.com/uploads/thinking_woman/thinking_woman_PNG11640.png"></Image>
            </RightSide>
            <Shape></Shape>
        </IntroContainer>

    )

}
export default Intro;