
import { IoIosArrowUp } from 'react-icons/io'
import { StyledButton } from './GlobalStyles'
import styled from 'styled-components'

const ScrollToTop = () => {
    const scrollToPageTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <ScrollTop>
            <StyledButton onClick={scrollToPageTop}>
                <IoIosArrowUp />
            </StyledButton>
        </ScrollTop>
    )
}

const ScrollTop = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 100;

    ${StyledButton} {
        padding: 8px 10px;
        font-size: 25px;
    }
`

export default ScrollToTop
