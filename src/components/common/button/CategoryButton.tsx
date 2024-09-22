import styled from 'styled-components';

type ButtonProps = {
  backgroundcolor?: string;
  textcolor?: string;
  activeBackgroundColor?: string;
  activeTextColor?: string;
  isActive?: boolean; // active 상태를 외부에서 받을 수 있도록 props 추가
};

type ActionProps = {
  onClick?: () => void;
};

type LogoProps = {
  backgroundcolor?: string;
  width?: string;
  height?: string;
  activeSrc?: string;
  inactiveSrc?: string;
  marginright?: string;
};

const CategoryButton = ({
  children,
  backgroundcolor,
  textcolor,
  width,
  height,
  marginright,
  activeSrc,
  inactiveSrc,
  isActive = false, // 기본값은 false로 설정
  onClick,
}: ActionProps &
  ButtonProps &
  LogoProps & {
    children: React.ReactNode;
  }) => {
  return (
    <ButtonContainer
      backgroundcolor={backgroundcolor}
      textcolor={textcolor}
      isActive={isActive}
      onClick={onClick} // onClick 함수가 있으면 실행
    >
      <ButtonLogo
        src={isActive ? activeSrc : inactiveSrc}
        width={width}
        height={height}
        marginright={marginright}
      />
      {children}
    </ButtonContainer>
  );
};

export default CategoryButton;

const ButtonContainer = styled.button<ButtonProps & { isActive: boolean }>`
  height: 34px;
  border-radius: 16px;
  padding: 8px 12px;

  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0.75px solid #d9d9d9;
  background-color: ${({ backgroundcolor, isActive }) =>
    isActive ? '#e4000f' : backgroundcolor || '#fff'};
  color: ${({ textcolor, isActive }) =>
    isActive ? '#fff' : textcolor || '#747474'};

  :hover {
    background-color: ${({ backgroundcolor }) => backgroundcolor || '#f0f0f0'};
  }
`;

const ButtonLogo = styled.img<LogoProps & { isActive: boolean }>`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  margin-right: ${({ marginright }) => marginright || '0px'};
`;
