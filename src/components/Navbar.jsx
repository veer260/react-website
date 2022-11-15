import styled from "styled-components";

const Container = styled.div`
    height : 60px;
`

const Wrapper = styled.div`
    padding : 10px 20px;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    width : 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.h1`
    font-weight : bold;
    text-decoration : underline crimson;

`
const Menu = styled.ul`
    display: flex ;
    list-style: none;

`

const MenuItem = styled.li`
    margin-right: 30px;
    font-size: larger;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.5);
`

const Button = styled.button`
    padding: 10px 25px;
    border: 1px solid white;
    background-color: red;
    color: #fff;
    border-radius: 10px;
    font-weight: bold;
`
const Navbar = () => {
    return (
        <Container >
            <Wrapper>
                <Left>
                    <Logo>
                        Agency
                    </Logo>
                    <Menu>
                        <MenuItem>Home</MenuItem>
                        <MenuItem>Features</MenuItem>
                        <MenuItem>Services</MenuItem>
                        <MenuItem>Pricing</MenuItem>
                        <MenuItem>Contact</MenuItem>
                    </Menu>
                </Left>
                <Button>
                    JOIN TODAY
                </Button>
            </Wrapper>
        </Container>
    )

}
export default Navbar;