/* eslint-disable jsx-a11y/anchor-has-content */
import styled from "styled-components"
import { MdZoomIn } from 'react-icons/md';
import { useState, useEffect } from 'react'
import { db, storageRef } from '../../firebase';

const DesginProjects = () => {

    // db에서 디자인 작업을 불러옴
	const [ desgin, setDesgin ] = useState([]);
	useEffect(() => {
		const getDesgins = async () => {
			db.collection('desgin').get().then((result)=>{
				result.forEach((doc)=>{
					storageRef.child(doc.data().imgUrl).getDownloadURL()
					.then((url)=>{
						return url;
					}).then((url)=>{
						const desginObject = {
							...doc.data(),
							id: doc.id,
							imgUrl: url
						}
						setDesgin((prev) => [desginObject, ...prev])
					})
				})
		})
    };
    getDesgins();
  }, [])
  const [ url, setUrl ] = useState()
  const [ isShowing, setIsShowing ] = useState(false);
  const body = document.querySelector('body');

  const openModal = (event) => {
    setIsShowing(true);
    body.style.overflow = 'hidden'
    setUrl(event.target.dataset.img)
  };
  const closeModal = () => {
    body.style.overflow = 'auto'
    setIsShowing(false);
    setUrl(null)
  };

  const Modal = () => {
    
    return (
        <div className="popup">
            <div>
                <img src={url} alt="modal-img"/>
                <p onClick={closeModal}>닫기</p>
            </div>
        </div>
    )
  }
  
    return (
        <StyledDesgin>
            <ul className="desgin">
                {desgin && desgin.map((desgin, index)=>
                        <li style={{backgroundImage: `url('${desgin.imgUrl}')`}} 
                            key={index}>
                            <div>
                                <h6>{desgin.name}</h6>
                                <span className="zoom">크게보기<MdZoomIn/></span>
                            </div>
                            <button data-img ={desgin.imgUrl} onClick={openModal}/>
                        </li>
                    )
                }
            </ul>
            {isShowing && <Modal />}
        </StyledDesgin>
    )
}
const StyledDesgin = styled.div`
.popup {
    position: fixed;
    z-index: 9999;
    background-color: #0000007d;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    div {
        max-width: 600px;
        margin: 200px auto 0;
        position: relative;
        border-radius: 10px;
        overflow: hidden;
        img {
        display: block;
        }
        p {
            margin: 0 auto;
            font-size: 30px;
            color: #fff;
            cursor: pointer;
            background: #000000bf;
            padding: 15px 0;
        }
    }
}
.desgin {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    li {
        width: 32%;
        margin-top: 20px;
        background-color: #ccc;
        position: relative;
        overflow: hidden;
        color: #fff;
        box-shadow: 5px 6px 6px #ccc;
        background-repeat: no-repeat;
        background-size: 100%;
        height: 275px; // TODO : 반응형시 수정 필요
        &:hover {
            div {
                bottom: 0;
            }
        }
        h6 {
            font-size: 20px;
            padding-left: 10px;
        }
        div {
            transition: 0.3s;
            background: #000000b5;
            position: absolute;
            width: 100%;
            bottom: -100%;
            padding: 10px 0;
            display: flex;
            justify-content: space-between;
        .zoom {
            padding-right: 10px;
            svg {
                transform: translateY(2px);
                }
            }
        }
        button {
           cursor: pointer;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 4;
            opacity: 0;
            border: 0;
        }
    }
}
`;

export default DesginProjects;