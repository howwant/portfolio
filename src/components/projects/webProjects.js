/* eslint-disable jsx-a11y/anchor-has-content */
import styled from "styled-components"
import { MdArrowForwardIos } from 'react-icons/md';
import { useState, useEffect } from 'react'
import { db, storageRef } from '../../firebase';


const WebProjects = () => {
	// db에서 웹사이트 작업을 불러옴
	const [ web, setWeb ] = useState([]);
	useEffect(() => {
		const getwebs = async () => {
			db.collection('web').get().then((result)=>{
				result.forEach((doc)=>{
					storageRef.child(doc.data().imgUrl).getDownloadURL()
					.then((url)=>{
						return url;
					}).then((url)=>{
						const webObject = {
							...doc.data(),
							id: doc.id,
							imgUrl: url
						}
						setWeb((prev) => [webObject, ...prev])
					})
				})
		})
    };
    getwebs();
  }, [])
  
  return (
    <StyledwebProjects>
        <ul className="front-end">
            {web && web.map((Web, index)=>
                    <li style={{backgroundImage: `url('${Web.imgUrl}')`}} key={index}>
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
            <li style={{backgroundImage: `url(/img/portfolio.png)`}}>
                <div>
                    <h6>portfolio</h6>
                    <div className="comment">
                        <p>react, sass, firebase</p>
                        <p>scroll page</p>
                    </div>
                    <div className="bg_g"></div>
                </div>
            </li>
        </ul>
    </StyledwebProjects>
  )
}

const StyledwebProjects = styled.div`
    .front-end {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    li {
        width: 32%;
        margin-top: 20px;
        background-color: #ccc;
        min-height: 345px;
        position: relative;
        overflow: hidden;
        color: #fff;
        box-shadow: 5px 6px 6px #ccc;
        background-size: cover;
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
	.front-end {
		padding-bottom: 50px;
	}
`;
export default WebProjects;