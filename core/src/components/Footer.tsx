import styled from "styled-components";
import FLogo from "../assets/imgs/FLogo.svg";
import copyrightImg from "../assets/imgs/copyright.svg";
import kakao from "../assets/imgs/kakao.svg";
import instagram from "../assets/imgs/instagram.svg";
import linkedin from "../assets/imgs/linkedin.svg";
import email from "../assets/imgs/email.svg";
import blog from "../assets/imgs/blog.svg";
import { typography } from "../assets/css/typography";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <ContentsContainer>
          <LogoContainer>
            <img src={FLogo} alt="FLogo" />
          </LogoContainer>
          <InfoContainer>
            <LeftContainer>
              <CompanyInfo>
                <TextContainer>
                  <span>파인더갭 주식회사 대표이사: 김오중</span>
                  <Textdivider />
                  <span>사업자 등록번호:421-88-02407</span>
                </TextContainer>
                <span>사업장 주소: 서울특별시 강남구 역삼로 160 8층 2호</span>
                <span>대표번호: 070-8648-0614</span>
              </CompanyInfo>
            </LeftContainer>
            <RightContainer>
              <a href="https://findthegap.co.kr/ko/terms">이용약관</a>
              <a href="https://findthegap.co.kr/ko/privacy">
                개인정보 처리방침
              </a>
              <a href="tel:02-2038-2810">Contact us</a>
            </RightContainer>
          </InfoContainer>
        </ContentsContainer>
        <Divider />
        <ContentsContainer>
          <Copyright>
            <span>Copyright</span>
            <img src={copyrightImg} alt="저작권 이미지" />
            <span>Find The Gap. All rights reserved.</span>
          </Copyright>
          <LinkContainer>
            <a href="https://bizmessage.kakao.com/chat/U-_ZlcWOiEiDH832H9id3Qf8qH_smEtv_c_acLTkgmU/tIq0tW7aj_z7_MmcLFzf9pBv7qPTblCS59HKpAPtatQ">
              <img src={kakao} alt="카카오 링크" />
            </a>
            <a href="https://www.instagram.com/findthegap_bugbounty/">
              <img src={instagram} alt="인스타그램 링크" />
            </a>
            <a href="https://www.linkedin.com/company/findgap/">
              <img src={linkedin} alt="링크드인 링크" />
            </a>
            <a href="mailto:contact@findthegap.com">
              <img src={email} alt="이메일 링크" />
            </a>
            <a href="https://blog.naver.com/findthegap">
              <img src={blog} alt="네이버 블로그 링크" />
            </a>
          </LinkContainer>
        </ContentsContainer>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  width: 100%;
  min-height: 271px;
  padding: 40px 0;
  background-color: var(--color-gray-900);
  display: flex;
  justify-content: center;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1040px;
  padding: 0 40px;
  width: 100%;
`;

const Divider = styled.div`
  background: #d9d9d9;
  height: 1px;
  width: 100%;
  margin: 40px 0;
`;
const ContentsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--color-white);
  ${typography.body.s_regular}
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 24px;
  }
`;
const LogoContainer = styled.div`
  height: 80px;
  > img {
    height: 100%;
  }

  @media (max-width: 600px) {
    height: 40px;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  gap: 40px;
`;
const RightContainer = styled.div`
  display: flex;
  gap: 24px;
  justify-content: flex-end;
  > a {
    ${typography.body.s_semibold}
  }
  @media (max-width: 900px) {
    justify-content: flex-start;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  margin-left: 40px;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
  }

  @media (max-width: 600px) {
    margin-left: 0px;
  }
`;
const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  @media (max-width: 600px) {
    gap: 4px;
  }
`;
const TextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 4px;
  }
`;
const Textdivider = styled.div`
  width: 1px;
  height: 12px;
  background: #d9d9d9;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Copyright = styled.div`
  ${typography.body.s_regular}
  display: flex;
  gap: 4px;
  align-items: center;

  img {
    position: relative;
    top: -1px;
  }
`;
const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
