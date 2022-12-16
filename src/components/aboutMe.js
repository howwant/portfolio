import styled from "styled-components"
import { MdTagFaces, MdOutlineRoom, MdOutlineDateRange, MdOutlineAddIcCall, MdOutlineMailOutline, MdOutlineSummarize} from 'react-icons/md';
import { useEffect, useRef } from "react";

const AboutMe = () => {
    const underline = useRef(null);
    function underlineAni () {
        if (window.innerHeight < underline.current.getBoundingClientRect().top + 300) {
            underline.current.classList.add('ani');
        }
    }
    useEffect(()=>{ 
        window.addEventListener("scroll", underlineAni);
        return () => {
            window.removeEventListener('scroll', underlineAni); 
    };
    },[]);
    return(
        <StyledAboutMe>
            <div id="AboutMe">
                <div className="container">
                    <h3 className="title">
                        <p>ABOUT ME</p>
                    </h3>
                    <ul className="img-box">
                        <li className="img"><img src="/img/face.png" alt="kang-hwawon" /></li>
                        <li className="intro">
                            <h4>안녕하세요. <span className="underline" ref={underline}>프론트엔드 강화원</span>입니다.</h4>
                            <p>남들과는 조금 늦게 개발을 배워 시작했습니다.<br />
                                하지만 그만큼이나 개발을 선택한 것을 후회하지 않고 저와 잘 맞다고 생각합니다.<br />
                                계속 발전하고 배울 부분이 생기는 프론트엔드 직업 특징에 맞게 항상 배우고 공부할 것입니다.<br />
                                항상 더 나은 개발자가 되도록 노력하고 있습니다.</p>
                        </li>
                    </ul>
                    <ul className="icon-box">
                        <li>
                            <MdTagFaces className="icon"/>
                            <h5>이름</h5>
                            <p>강화원</p>
                        </li>
                        <li>
                            <MdOutlineDateRange className="icon"/>
                            <h5>생년월일</h5>
                            <p>1997.11.28</p>
                        </li>
                        <li>
                            <MdOutlineRoom className="icon"/>
                            <h5>주소</h5>
                            <p>인천 서구 마전동</p>
                        </li>
                        <li>
                            <MdOutlineAddIcCall className="icon"/>
                            <h5>연락처</h5>
                            <p><a href="tel:01047037341">010-4703-7341</a></p>
                        </li>
                        <li>
                            <MdOutlineMailOutline className="icon"/>
                            <h5>이메일</h5>
                            <p><a target="_blank" href="mailto:corn1128@naver.com" rel="noreferrer">corn1128@naver.com</a></p>
                        </li>
                        <li>
                            <MdOutlineSummarize className="icon"/>
                            <h5>자격증</h5>
                            <p>웹디자인기능사, GTQ 1급(포토샵), GTQ 1급(일러스트)</p>
                        </li>
                    </ul>
                    <h4 className="mini-title">Skills</h4>
                    <ul className="skills">
                        <li>
                            <h5>Web</h5>
                            <ul className="web-skills">
                                <li>
                                    <img src="/img/html.png" alt="html"/>
                                    <p>Html</p>
                                </li>
                                <li>
                                    <img src="/img/css.png" alt="css"/>
                                    <p>Css</p>
                                </li>
                                <li>
                                    <img src="/img/javascript.png" alt="javascript"/>
                                    <p>Es6</p>
                                </li>
                                <li>
                                    <img src="/img/sass.png" alt="sass"/>
                                    <p>Sass</p>
                                </li>
                                <li>
                                    <img src="/img/bootstrap.png" alt="bootstrap"/>
                                    <p>Bootstrap</p>
                                </li>
                                <li>
                                    <img src="/img/jquery.png" alt="jquery"/>
                                    <p>Jquery</p>
                                </li>
                                <li>
                                    <img src="/img/react.png" alt="React"/>
                                    <p>React</p>
                                </li>
                                <li>
                                    <img src="/img/Next.png" alt="Next"/>
                                    <p>Next</p>
                                </li>
                                <li>
                                    <img src="/img/typescript.png" alt="Typescript"/>
                                    <p>Typescript</p>
                                </li>
                                <li>
                                    <img src="/img/mongodb.png" alt="MongoDB"/>
                                    <p>MongoDB</p>
                                </li>
                                <li>
                                    <img src="/img/firebase.png" alt="Firebase"/>
                                    <p>Firebase</p>
                                </li>
                                <li>
                                    <img src="/img/vercel.png" alt="Vercel"/>
                                    <p>Vercel</p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h5>Desgin</h5>
                            <ul className="desgin-skills">
                                <li>
                                    <img src="/img/photoshop.png" alt="Photoshop"/>
                                    <p>Photoshop</p>
                                </li>
                                <li>
                                    <img src="/img/Illustrator.png" alt="Illustrator"/>
                                    <p>Illustrator</p>
                                </li>
                                <li>
                                    <img src="/img/indesgin.png" alt="Indesign"/>
                                    <p>Indesign</p>
                                </li>
                                <li>
                                    <img src="/img/xd.png" alt="Xd"/>
                                    <p>Xd</p>
                                </li>
                                <li>
                                    <img src="/img/figma.png" alt="Figma"/>
                                    <p>Figma</p>
                                </li>
                            </ul>
                        </li>
                    </ul>   
                </div>
            </div>
        </StyledAboutMe>
    )
}
const StyledAboutMe = styled.div`
    #AboutMe {
        background-color: #c9e6ff;
        padding: 70px 10px;
    }
    .underline {
        position: relative;
        z-index: 2;
        &:before {
            content: "";
            display: block;
            position: absolute;
            width: 0;
            background: #8acbff;
            height: 8px;
            z-index: -1;
            left: 0;
            bottom: 0;
        }
    }
    .ani::before {
        animation: fullwidth 2.5s ease-in-out forwards;
    }
    @keyframes fullwidth {
        0% {
            width: 0;
        }

        100% {
            width: 100%;
        }
    }
    .img-box {
        display: flex;
        justify-content: center;
        .img {
            border-radius: 50%;
            overflow: hidden;
            width: 250px;
            height: 250px;
        }
        .intro {
            padding-left: 60px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            h4 {
                margin-bottom: 10px;
                font-size: 28px;
                line-height: 32px;
            }
            p {
                line-height: 21px;
            }
        }
    }
    .icon-box {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 60px auto 0 auto;
        color: #444;
        li {
            width: 33.333%;
            padding-bottom: 20px;
            transition: 0.3s;
            cursor: default;
            a {
                color: #444;
            }
            &:hover {
                color: #2ba0ff;
                a {
                    color: #2ba0ff;
                    text-decoration: underline;
                }
            }
            .icon {
                float: left;
                margin-right: 20px;
                font-size: 40px;
            }
            h5 {
                font-size: 20px;
                margin-bottom: 3px;
                font-weight: bold;
            }
        }
    }
    .skills {
            h5 {
            text-align: center;
            font-size: 20px;
            padding: 10px 0;
            color: #fff;
            text-shadow: 0 0 5px #000;
        }
        li:first-child {
            padding-bottom: 20px;
        }
    } 
    .web-skills, .desgin-skills {
        display: flex;
        flex-flow: wrap;
        justify-content: center;
        li {
            width: 8.3%;
            min-width: 72px;
            text-align: center;
            img {
                transition: 0.3s;
            }
            &:hover img {
                transform: scale(1.1);
            }
        }
    }
`;
export default AboutMe;