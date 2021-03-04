import React, {useState, useEffect} from "react";
import Sidebar from "react-sidebar";
import styled from 'styled-components';

const mql = window.matchMedia(`(min-width: 800px)`);
 
const SideBarMenu = styled.div`

    display: ${props => props.isOpen? 'block': 'none'};
    height: 100%;
    width: 250px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    padding-top: 60px;

a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
  }
  
   a:hover {
    color: #f1f1f1;
  }
  
  .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }
  
  @media screen and (max-height: 450px) {
     {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
  }
  

`

function sidebarMenu(props){
    var [sidebarOpen, setSidebarOpen] = useState(false)


    const onSetSidebarOpen = () =>{
        setSidebarOpen(!sidebarOpen);
      }   
      
     
        return (
          <><SideBarMenu
          isOpen={sidebarOpen}
          >
              <a href="#" className="closebtn" onClick={onSetSidebarOpen}>
              &times;
              </a>
              <a href="#">
My Profile
              </a>
              <a href="#"> My Orders </a>
          </SideBarMenu>
          <span style={{fontSize: '30px', cursor: 'pointer'}} onClick={onSetSidebarOpen} >&#9776; open</span>
</>
        );   
}
export default sidebarMenu;