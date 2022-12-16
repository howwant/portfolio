import styled from "styled-components"

const Footer = () => {
    return(
    <StyledFooter className="styledfooter">
        <footer>©2022 Kang, Hwa-Won. All Rights Reserved.</footer>
    </StyledFooter>
    )
}
const StyledFooter = styled.div`
    background-color: #2ba0ff;
    text-align: center;
    padding: 50px 0;
`;
export default Footer