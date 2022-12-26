import { useEffect } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import styled from 'styled-components';
import ThemeContext from '../../api/themeContext';
import { Pc, Mobile } from '../../api/media';

const Header = () => {
    // 스크롤시 배경색 추가
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
                    <Pc>
                        <ul id="menu">
                            <li><a href="#AboutMe">About me</a></li>
                            <li><a href="#Projects">Projects</a></li>
                            <li><a href="#Contact">Contact</a></li>
                        </ul>
                    </Pc>
                    <p id="darkMode">
                    <ThemeContext.Consumer>
                        { value =>  value.isDarkMode?
                        <MdDarkMode className='darkmode' onClick={value.toggleDarkMode}/> :
                        <MdLightMode className='lightmode' onClick={value.toggleDarkMode}/>
                        } 
                    </ThemeContext.Consumer>
                    </p>
                    <Mobile>
                        <input type="checkbox" name='moblieMenu_check'id='moblieMenu_check'/>
                        <label htmlFor="moblieMenu_check" className='moblieMenu_check'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                        <ul className="moblieMenu">
                            <li><a href="#AboutMe">About me</a></li>
                            <li><a href="#Projects">Projects</a></li>
                            <li><a href="#Contact">Contact</a></li> 
                        </ul>
                    </Mobile>
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
    header > ul {
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
        margin-top: 3px;
        &::after {
        content: '';
        display: inline-block;
        clear: both;
    }
    } 
    #menu {
        display: flex;
        width: 85%;
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
        width: 15%;
        text-align: center;
        transition: 0.3s;
        cursor: pointer;
        font-size: 22px;
        svg {
            width: 100%;
        }
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
        background: #ffffff73;
        backdrop-filter: blur(10px);
    }
    // 반응형
    @media screen and (max-width: 1300px) {
        header > ul {
            padding: 0 20px;
            display: block;
        }
    }
    @media screen and (max-width: 768px) {
        #menuWarp {
            min-width: auto;
        }
        #darkMode {
            width: 40px;
        }
        #moblieMenu_check {
            display: none;
        }
        #moblieMenu_check:checked + .moblieMenu_check {
            span:nth-child(1){
                transform:  rotate(-45deg) translate(-8px,4px);
            }
            span:nth-child(2){
                display: none;
            }
            span:nth-child(3){
                transform: rotate(45deg) translate(-8px,-4px);
            }
        }
        .moblieMenu_check {
            position: relative;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 40px;
            height: 21px;
            span {
                width: 20px;
                height: 3px;
                background: #000;
                display: block;
                transition: 0.3s;
            }
        }
        .moblieMenu {
            position: fixed;
            z-index: 999;
            top: 0;
            right: 0;
            width: 100%;
            display: flex;
            flex-direction: column;
            background: #fff;
            backdrop-filter: blur(10px);
            text-align: center;
            padding-top: 0;
            height: 0;
            overflow: hidden;
            transition: 0.3s;
            li {
                a {
                    padding: 10px 0;
                    display: inline-block;
                    border-top: 1px solid #eee;
                    width: 100%;
                    transition: 0.3s;
                  }
                  &:hover a {
                    background: #eee;
                  }
            }
            
        }
        #moblieMenu_check:checked + .moblieMenu_check + .moblieMenu {
            height: auto;
            padding-top: 47px;
        }
    }
    @media screen and (max-width: 375px) {
        h1 {
            font-size: 26px;
        }
    }
`;

export default Header