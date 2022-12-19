/* eslint-disable jsx-a11y/anchor-has-content */
import styled from "styled-components"
import { MdArrowForwardIos } from 'react-icons/md';
import React, { useState, useEffect } from 'react'
import { db, storageRef } from '../firebase';


const Read = () => {
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
    getwebs()
  }, [])
  

  return (
	web && web.map((Web, index)=>
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
  )
}


const Projects = () => {
    return(
        <StyledProjects>
            <div id="Projects">
				<div className="container">
					<h3 className="title">
						<p>PROJECTS</p>
					</h3>
					<h4 className="mini-title">Front-end</h4>
					<ul className="front-end">
						<Read/>
					</ul>
					<h4 className="mini-title">Desgin</h4>
					<ul>
						<li>
							<p>준비중</p>
						</li>
					</ul>
				</div>
            </div>
        </StyledProjects>
    )
}
const StyledProjects = styled.div`
	#Projects {
		background-color: aliceblue;
		padding: 70px 10px;
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
    // 반응형
    @media screen and (max-width: 1300px) {
        #Projects {
            padding: 70px 20px;
        }
    }
`;
export default Projects;