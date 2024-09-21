import styled from 'styled-components';

const SiderButton = ({ children }: { children: React.ReactNode }) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};

export default SiderButton;

const ButtonContainer = styled.button`
  border: none;

  width: calc(100% - 22px);
  padding: 5px 11px 5px 11px;
  height: 23px;

  border-radius: 16px;
  background-color: #f5f5f5;
  color: #747474;
  margin: 0 auto;

  font-size: 10px;
  font-weight: 700;

  cursor: pointer;
`;
