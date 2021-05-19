import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import SmartLogo from '../SideNav/Word-NoBG.png';
import Button from '@material-ui/core/Button';


const Nav = styled.div`
  background-image: linear-gradient(to right, #7E8FDE, #5BA4D2, #35BBC2) !important;
  height: 80px;
  display: flexbox;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 10px;
  font-size: 2rem;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #E7E6E6;
  margin-top: 80px;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  overflow-y: scroll;
  ::-webkit-scrollbar {
  display: none;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
`;


const SidebarWrap = styled.div`
  width: 100%;
`;

const NavIcon2 = styled(Link)`
  margin-left: auto;
  margin-right:20px;
  font-size: 2rem;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
`;

const SmartLogoStyle = {
  width: 150,
  marginLeft: 25,
  display: 'inline'
}



const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>

        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <img src={SmartLogo} style={SmartLogoStyle} />
          <NavIcon2 to='/'>
          <Button variant="outlined">Logout</Button>
          </NavIcon2>          
        </Nav>

        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} style={{color:'#2DAAD6'}}/>
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;