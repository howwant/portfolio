import styled from 'styled-components';

const FirstPage = () => {
    return(
        <StyledFirstPage>
              <div id="first-page">
                <svg className="intro" viewBox="0 0 200 60">
                    <text textAnchor="start" x="35" y="30" className="text text-stroke" clipPath="url(#text1)">WELCOME TO</text>
                    <text textAnchor="start" x="25" y="50" className="text text-stroke" clipPath="url(#text2)">MY PORTFOLIO</text>
                    <text textAnchor="start" x="35" y="30" className="text text-stroke text-stroke-2"
                        clipPath="url(#text1)">WELCOME TO</text>
                    <text textAnchor="start" x="25" y="50" className="text text-stroke text-stroke-2" clipPath="url(#text2)">MY
                        PORTFOLIO</text>
                    <defs>
                        <clipPath id="text1">
                            <text textAnchor="start" x="35" y="30" className="text">WELCOME TO</text>
                        </clipPath>
                        <clipPath id="text2">
                            <text textAnchor="start" x="25" y="50" className="text">MY PORTFOLIO</text>
                        </clipPath>
                    </defs>
                </svg>
                <p>프론트엔드 개발자 강화원입니다.<br/> 발전하는 웹서비스 개발을 추구합니다.</p>
                <div className="bg-image"></div>
            </div>
        </StyledFirstPage>
    )
}
const StyledFirstPage = styled.div`
    #first-page {
        height: 750px;
        background-image: url(/img/background.png);
        background-repeat: no-repeat;
        background-color: aliceblue;
        text-align: center;
        position: relative;
        P {
            font-size: 20px;
            animation: fadeIn 2.5s ease-in-out forwards;
            position: relative;
            z-index: 1;
            br {
                display: none;
            }
        }
    }
    .bg-image {
        background-image: url(/img/background.png);
        background-repeat: no-repeat;
        position: absolute;
        bottom: 0;
        right: 0;
        min-width: 700px;
        min-height: 550px;
        transform: scaleX(-1) scaleY(-1);
    }
    svg.intro {
        font-family: 'Paytone One', sans-serif;
        padding-top: 150px;
        max-width: 800px;
        position: relative;
        z-index: 1;
        .text {
            font-size: 20px;
            display: block;
        }
        .text-stroke {
            fill: none;
            stroke: #000000;
            stroke-width: 10px;
            stroke-dashoffset: -900;
            stroke-dasharray: 900;
            stroke-linecap: butt;
            stroke-linejoin: round;
            animation: dash 2.5s ease-in-out forwards;
            &:nth-child(2) {
                -webkit-animation-delay: 0.3s;
                animation-delay: 0.3s;
            }
        }
        .text-stroke-2 {
            stroke: #2ba0ff;
            animation-delay: 1.2s;
        }
    }
    @keyframes dash {
        100% {
            stroke-dashoffset: 0;
        }
    }
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
    .title {
        text-align: center;
        font-size: 34px;
		p {
			position: relative;
			display: inline-block;
			z-index: 1;
			&::before {
				content: "";
				display: block;
				position: absolute;
				width: 20px;
				height: 20px;
				border-radius: 50%;
				background-color: lightpink;
				top: -5px;
				left: -5px;
				z-index: -1;
			}
		}
	}
    @media screen and (max-width: 1024px) {
        #first-page {
        height: 550px;
        }
        svg.intro {
        padding-top: 120px;
        }
    }
    @media screen and (max-width: 768px) {
        #first-page {
            height: 400px;
            &::before {
                content: "";
                position: absolute;
                display: block;
                width: 100%;
                background: #ffffffba;
                top: 81px;
                height: 241px;
                z-index: 1;
            }
            }
        svg.intro {
            padding-top: 48px;
            }
    }
    @media screen and (max-width: 480px) {
        #first-page {
            height: 275px;
            &::before{
                top: 60px;
                height: 190px;
            }
            P{
                font-size: 17px;
                br {
                    display: block;
                }
            } 
        } 
    }
    @media screen and (max-width: 375px) {
        #first-page {
            height: 230px;
            &::before{
                height: 150px;
            }
        } 
    }
`

export default FirstPage;