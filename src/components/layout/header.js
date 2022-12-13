import { useEffect } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import styled from 'styled-components';
const Header = () => {

    // 스크롤 배경색 추가
    useEffect(() => {
        const menu = document.querySelector('#header');
        const menuHeight = document.querySelector('#header').getBoundingClientRect().height;
        window.addEventListener('scroll', ()=>{
            if (window.scrollY > menuHeight) {
                menu.classList.add('bgcolor');
                } else {
                menu.classList.remove('bgcolor');
                }
        },{ capture: true }); // 스크롤 이벤트 등록
      }, []);

    return(
        <StyledHeader>
            <header id='header'>
                <ul>
                <li id="logo">
                    <h1>KHW's portfolio</h1>
                </li>
                <li id="menuWarp">
                    <ul id="menu">
                        <li><a href="#none">About me</a></li>
                        <li><a href="#none">Projects</a></li>
                        <li><a href="#none">Contect</a></li>
                    </ul>
                    <p id="darkMode">
                        <MdDarkMode className='darkmode'/>
                        <MdLightMode className='lightmode'/>
                    </p>
                </li>
            </ul>
            </header>
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    h1 {
        font-family: 'Kaushan Script', cursive;
        font-size: 32px;
    }
    header {
        position: fixed;
        right: 0;
        top: 0;
        z-index: 999;
        width: 100%;
        padding-top: 10px;
        padding-bottom: 10px;
        transition: 0.3s;
    }
    header ul {
        max-width: 1300px;
        margin: 0 auto;
    }
    #logo {
        float: left;
    }
    #menuWarp {
        float: right;
        display: flex;
        min-width: 350px;
        &::after {
        content: '';
        display: inline-block;
        clear: both;
    }
    } 
    #menu {
        display: flex;
        width: 90%;
        li {
            width: 33.333%;
            position: relative;
            text-align: center;
            &:hover a {
                    font-weight: bold;
                    &:before, &:after {
                        opacity: 1;
                        width: 100%;
                    }
                }
            a {
                width: 100%;
                display: inline-block;
                padding: 6px 0 3px;
                transition: all 0.3s;
                &:before, &:after {
                    position: absolute;
                    opacity: 0;
                    width: 0%;
                    height: 2px;
                    content: '';
                    background: #2ba0ff;
                    transition: all 0.3s;
                }
                &:before {
                    left: 0px;
                    top: 0px;
                }
                &:after {
                    right: 0px;
                    bottom: 0px;
                }
            }
        }
    }
    #darkMode {
        width: 10%;
        text-align: center;
        transition: 0.3s;
        cursor: pointer;
        padding-top: 3px;
    }
    .darkmode, .lightmode {
        transition: 0.3s;
    }
    .darkmode:hover {
        color: #2ba0ff;
    }
    .lightmode:hover {
        color: #ff0000;
    }
    .bgcolor {
        background: #fff;
    }
`;

export default Header