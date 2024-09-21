import { useState } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  backgroundcolor?: string;
  textcolor?: string;
  activeBackgroundColor?: string;
  activeTextColor?: string;
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
  onClick,
}: ActionProps &
  ButtonProps &
  LogoProps & {
    children: React.ReactNode;
  }) => {
  const [isactive, setisactive] = useState<boolean>(false);

  return (
    <ButtonContainer
      backgroundcolor={backgroundcolor}
      textcolor={textcolor}
      isactive={isactive}
      onMouseDown={() => setisactive(true)}
      onMouseUp={() => setisactive(false)}
      onClick={onClick}
    >
      <ButtonLogo
        src={isactive ? activeSrc : inactiveSrc}
        width={width}
        height={height}
        isactive={isactive}
        marginright={marginright}
      />
      {children}
    </ButtonContainer>
  );
};

export default CategoryButton;

const ButtonContainer = styled.button<ButtonProps & { isactive: boolean }>`
  /* width: 100%; */
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
  background-color: ${({ backgroundcolor, isactive }) =>
    isactive ? '#e4000f' : backgroundcolor || '#fff'};
  color: ${({ textcolor, isactive }) =>
    isactive ? '#fff' : textcolor || '#747474'};

  :hover {
    background-color: ${({ backgroundcolor }) => backgroundcolor || '#f0f0f0'};
  }
`;

const ButtonLogo = styled.img<LogoProps & { isactive: boolean }>`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  margin-right: ${({ marginright }) => marginright || '0px'};
`;
