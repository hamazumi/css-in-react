import styled, {css, keyframes} from 'styled-components'

const fade = keyframes`
    0% {
        opacity: 0;
    }

    25% {
        opacity: .5;
    }

    50%{
        opacity: .7;
    }

    100% {
        opacity: 1;
    }
`

const NavHolder = styled.nav`
    border: 2px solid white;
    color: white;
    text-algin: center;
    animation: ${fade} 5s linear infinite;
`

const Header = styled.h1`
    color: lightblue;
    font-size: 35px;
`
//you can inherit other styling. In this case, Size
const PinkHeader = styled(Header)`
    color: purple;
`




export default function Nav() {
    return(
        <div>
            <NavHolder>
                <Header>Hello!!</Header>
                <PinkHeader>Testing Pink</PinkHeader>
            </NavHolder>
        </div>
    )
}