import styled from "styled-components"

const Container =styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: 14px;
    font-weight: 500;
`;

export const Announcement = () => {
    return (
        <Container>
            Super Deal! Free  Shipping On Orders Above Rs.1000
        </Container>
    )
}
export default Announcement;
