import styled from "styled-components"
import { MdArrowForwardIos } from 'react-icons/md';

const Projects = () => {
    return(
        <StyledProjects>
            <div id="Projects">
                <h3 className="title">
                    <p>PROJECTS</p>
                </h3>
                <h4 className="mini-title">Front-end</h4>
                <ul className="front-end">
                    <li>
                        <div>
                            <h6>인천연세병원</h6>
                            <p>퍼블리싱 100%<br />
                                인천연세병원 리뉴얼<br />
                                제작기간 2일</p>
                            <span className="shortcut">바로가기<MdArrowForwardIos/></span>
                            <a href="#none" target="_blank" rel="noreferrer"></a>
                            <div className="bg_g"></div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h6>THEFACESHOP</h6>
                            <p>퍼블리싱 100%<br />
                                더페이스샵 리뉴얼<br />
                                제작기간 2일</p>
                            <span className="shortcut">바로가기<MdArrowForwardIos/></span>
                            <a href="#none" target="_blank" rel="noreferrer"></a>
                            <div className="bg_g"></div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h6>TalesRunner</h6>
                            <p>퍼블리싱 100%<br />
                                테일즈런너 리뉴얼<br />
                                제작기간 2일</p>
                            <span className="shortcut">바로가기<MdArrowForwardIos/></span>
                            <a href="#none" target="_blank" rel="noreferrer"></a>
                            <div className="bg_g"></div>
                        </div>
                    </li>
                </ul>
                <h4 className="mini-title">Desgin</h4>
                <ul>
                    <li>
                        <p></p>
                    </li>
                </ul>
            </div>
        </StyledProjects>
    )
}
const StyledProjects = styled.div`
	#Projects {
		background-color: aliceblue;
		padding: 50px 17%;
		.mini-title::after,
		.mini-title::before {
			background-color: #cce7fd;
		}
		ul {
			display: flex;
			justify-content: space-between;
		}
		li {
			width: 32%;
			background-color: #ccc;
			min-height: 345px;
			position: relative;
			overflow: hidden;
			color: #fff;
			box-shadow: 5px 6px 6px #ccc;
			background-size: cover;
			&:first-child {
				margin-left: 0;
			}
			h6 {
				font-size: 23px;
				margin: 91px 0 22px;
				padding-left: 50px;
				position: relative;
				z-index: 2;
				color: #fff;
			}
			p {
				font-size: 18px;
				line-height: 22px;
				position: absolute;
				left: 50px;
				top: 350px;
				transition: 0.35s;
				z-index: 2;
			}
			div.bg_g {
				position: absolute;
				left: auto;
				top: 0;
				width: 100%;
				height: 100%;
				background-color: #000000b5;
				transition: 0.35s;
				margin: 0 auto;
				z-index: 1;
			}
			> div {
				opacity: 0;
				transition: 0.35s;
				text-align: left;
			}
			.shortcut {
				width: 100px;
				display: block;
				font-weight: 500;
				float: right;
				margin: 95px 400px 0 0;
				color: #fff;
				z-index: 2;
				position: relative;
				svg {
					transform: translateY(2px);
				}
			}
			a {
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				z-index: 4;
			}
			&:hover {
				p {
				top: 132px;
				}
				div.bg_g {
					transform: scale(0.85);
				}
				> div {
					opacity: 1;
				}
				.shortcut {
					transition: 0.35s;
					margin: 95px 50px 0 0;
				}
			}
		}
	}
	// 수정 필요
	.front-end {
		padding-bottom: 50px;
		li:first-child {
			background: url(/img/icy.png);
		}
		li:nth-child(2) {
			background: url(/img/theface.png);
		}
		li:nth-child(3) {
			background: url(/img/tales.png);
		}
	}

`;
export default Projects;