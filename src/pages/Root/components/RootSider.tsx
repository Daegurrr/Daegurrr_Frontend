import styled from 'styled-components';

import Sider from '../../../components/feature/sider';
import Input from '../../../components/common/input';

import Daefree from '../../../assets/Daefree.png';
import RecentLocation from './RecentLocation';
import ShelterList from './ShelterList';

const RootSider = () => {
  return (
    <Sider>
      <SiderContainer>
        <LogoImg src={Daefree} alt="" />
        <Input />
        <RecentLocation />
        <ShelterTitle>현위치에서 가장 가까운 쉼터는?</ShelterTitle>
        <ShelterList />
      </SiderContainer>
    </Sider>
  );
};

export default RootSider;

const SiderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 86px;
  height: 17px;
  margin-bottom: 20px;
`;

const ShelterTitle = styled.span`
  font-size: 15px;
  font-weight: 700;
  margin-top: 12px;
  width: 100%;
`;
