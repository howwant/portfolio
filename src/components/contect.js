import styled from "styled-components"
import { MdOutlineAddIcCall, MdOutlineMailOutline } from 'react-icons/md';

const Contect = () => {
    return(
        <StyledContect>
            <div id="Contect" class="container">
                <h3 class="title">
                    <p>CONTECT</p>
                </h3>
                <ul>
                    <li>
                        <a href="tel:01047037341">
                            <MdOutlineAddIcCall className="icon"/>
                            <span>010-4703-7341</span>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="mailto:corn1128@naver.com" rel="noreferrer">
                            <MdOutlineMailOutline className="icon"/>
                            <span>corn1128@naver.com</span>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://github.com/howwant" rel="noreferrer">
                            <img src="/img/github.png" alt="github" class="paddingBottom" />
                            <span>github</span>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.instagram.com/how_want_/" rel="noreferrer">
                            <img src="/img/Instagram.png" alt="Instagram" class="paddingBottom" />
                            <span>Instagram</span>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://velog.io/@corn" rel="noreferrer" >
                            <img src="img/velog.png" alt="velog" class="paddingBottom" />
                            <span>velog</span>
                        </a>
                    </li>
                </ul>
          </div>  
        </StyledContect>
    )
}
const StyledContect = styled.div`
    #Contect {
        background-color: aliceblue;
        padding: 50px 17%;
        ul {
            display: flex;
            align-items: stretch;
            justify-content: space-between;
            padding: 50px 0;
            li {
                width: 20%;
                text-align: center;
                a {
                    padding-top: 10px;
                    transition: 0.3s;
                    display: block;
                    border-radius: 5px;
                    height: 100%;
                }
                img {
                    width: 25px;
                    display: block;
                    margin: 0 auto;
                }
                svg {
                    font-size: 24px;
                }
                span {
                    display: block;
                    padding-top: 3px;
                }
                &:hover a {
                    background-color: #d5e8f7;
                }
            }
        }
    }
`;


export default Contect;