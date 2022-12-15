import styled from "styled-components"
import { MdArrowForwardIos } from 'react-icons/md';

function Web(name, link, imgUrl, ...detail) {
	this.name = name;
	this.link = link;
	this.imgUrl = imgUrl; 
	this.detail = [...detail];

}

const WebList = [ 
	new Web('인천연세병원','https://naver.com','/img/icy.png','인천연세병원 리뉴얼','sass','Jquery'),
	new Web('THEFACESHOP','https://naver.com','/img/theface.png','더페이스샵 리뉴얼') ,
	new Web('TalesRunner','https://naver.com','/img/tales.png','테일즈런너 리뉴얼'),
];


const Projects = () => {
    return(
        <StyledProjects>
            <div id="Projects">
                <h3 className="title">
                    <p>PROJECTS</p>
                </h3>
                <h4 className="mini-title">Front-end</h4>
                <ul className="front-end">
					{
						WebList.map((Web, index)=>
							<li style={{backgroundImage: `url(${Web.imgUrl})`}} key={index}>
								<div>
									<h6>{Web.name}</h6>
									<div className="comment">
										{(Web.detail).map((coment,index)=>
											<p key={index}>{coment}</p>
										)}
									</div>
									<span className="shortcut">바로가기<MdArrowForwardIos/></span>
									<a href={Web.link} target="_blank" rel="noreferrer"></a>
									<div className="bg_g"></div>
								</div>
							</li>
						)
					}
                </ul>
                <h4 className="mini-title">Desgin</h4>
                <ul>
                    <li>
                        <p>준비중</p>
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
			.comment {
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
				.comment {
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
	.front-end {
		padding-bottom: 50px;
	}

`;
export default Projects;