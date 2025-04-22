import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import styled from 'styled-components';

const NavBar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #111827;
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

const NavIcon = styled(NavLink)`
  color: #ec4899;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #2dd4bf;
  }

  &.active {
    
    color: #2dd4bf;
  }

`;

function CustomHeader() {
  return (
    <NavBar>
      <NavIcon to="/" end>
        <FaHome />
      </NavIcon>

      <NavIcon to="/about">
        <FaUser />
      </NavIcon>

      <NavIcon to="/projects">
        <FaProjectDiagram />
      </NavIcon>

      <NavIcon to="/contact">
        <FaEnvelope />
      </NavIcon>
    </NavBar>
  );
}

export default CustomHeader;
