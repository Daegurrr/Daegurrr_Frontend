import styled from 'styled-components';

import Search from '../../../assets/input/search.png';

const Input = () => {
  return (
    <InputContainer>
      <InputText type="text" placeholder="가까운 쉼터는 대프리가 알려줄께요!" />
      <img style={{ cursor: 'pointer' }} src={Search} alt="" />
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled.div`
  width: calc(100% - 10px);
  height: 25px;
  background-color: #f5f5f5;
  padding: 4.5px 5px;
  border-radius: 5px;
  display: flex;
`;

const InputText = styled.input`
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  border: none;

  :focus {
    border: none;
  }
`;
