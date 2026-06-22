import styled from "styled-components";
import ftgLogo from "../assets/imgs/ftgLogo.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={ftgLogo} alt="find the gap 로고" />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 96px;
  background-color: var(--color-gray-900);
  box-sizing: border-box;
`;

const HeaderContent = styled.div`
  padding: 0 40px;
  max-width: 1040px;
  width: 100%;
  display: flex;
  align-items: center;
`;
