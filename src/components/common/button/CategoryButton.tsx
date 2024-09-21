import { useState } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  border?: string;
  backgroundColor?: string;
  textColor?: string;
};

type LogoProps = {
  backgroundColor?: string;
  width?: string;
  height?: string;
  activeSrc?: string;
  inactiveSrc?: string;
};

const CategoryButton = ({
  children,
  border,
  backgroundColor,
  textColor,
  width,
  height,
  activeSrc,
  inactiveSrc,
}: ButtonProps &
  LogoProps & {
    children: React.ReactNode;
  }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <ButtonContainer
      border={border}
      backgroundColor={backgroundColor}
      textColor={textColor}
      isActive={isActive}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
    >
      <ButtonLogo
        src={isActive ? activeSrc : inactiveSrc}
        width={width}
        height={height}
        isActive={isActive}
      />
      {children}
    </ButtonContainer>
  );
};

export default CategoryButton;

const ButtonContainer = styled.button<ButtonProps & { isActive: boolean }>`
  width: 100%;
  border-radius: 16px;
  padding: 8px 12px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;

  border: ${({ border }) => border || '0.75px solid #D9D9D9'};
  background-color: ${({ backgroundColor, isActive }) =>
    isActive ? '#e4000f' : backgroundColor || '#fff'};
  color: ${({ textColor, isActive }) =>
    isActive ? '#fff' : textColor || '#747474'};

  :hover {
    background-color: ${({ backgroundColor }) => backgroundColor || '#f0f0f0'};
  }
`;

const ButtonLogo = styled.img<LogoProps & { isActive: boolean }>`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
`;
