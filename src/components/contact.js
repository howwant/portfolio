import styled from "styled-components"
import { MdOutlineAddIcCall, MdOutlineMailOutline } from 'react-icons/md';

const Contact = () => {
    return(
        <StyledContact>
            <div id="Contact">
                <div  className="container">
                    <h3 className="title">
                        <p>CONTACT</p>
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
                                <img src="/img/github.png" alt="github" className="paddingBottom" />
                                <span>github</span>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.instagram.com/how_want_/" rel="noreferrer">
                                <img src="/img/Instagram.png" alt="Instagram" className="paddingBottom" />
                                <span>Instagram</span>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://velog.io/@corn" rel="noreferrer" >
                                <img src="img/velog.png" alt="velog" className="paddingBottom" />
                                <span>velog</span>
                            </a>
                        </li>
                    </ul>
                </div>
          </div>  
        </StyledContact>
    )
}
const StyledContact = styled.div`
    #Contact {
        background-color: aliceblue;
        padding: 70px 10px;
        ul {
            display: flex;
            align-items: stretch;
            justify-content: center;
            flex-wrap: wrap;
            padding-top: 50px;
            li {
                width: 20%;
                text-align: center;
                min-width: 180px;
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
    //반응형
  @media screen and (max-width: 1300px) {
    #Contact {
        padding: 50px 20px;
        ul {
            padding-top: 20px;
        }
    }
  }
  @media screen and (max-width: 480px) {
    #Contact {
        padding: 20px;
        ul li {
        width: 50%;
        min-width: auto;
        span {
        font-size: 13px;
    }
    }
    } 
  }
`;


export default Contact;