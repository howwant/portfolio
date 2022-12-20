/* eslint-disable jsx-a11y/anchor-has-content */
import styled from "styled-components"
import React from 'react'
import WebProjects from "./webProjects"
import DesginProjects from "./desginProjects"

const Projects = () => {
    return(
        <StyledProjects>
            <div id="Projects">
				<div className="container">
					<h3 className="title">
						<p>PROJECTS</p>
					</h3>
					<h4 className="mini-title">Front-end</h4>
						<WebProjects/>
					<h4 className="mini-title">Desgin</h4>
						<DesginProjects/>
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