import styled from 'styled-components';

import ShelterCard from '../../../components/feature/card/ShelterCard';

const ShelterList = () => {
  return (
    <ListContainer>
      <ListWrapper>
        <ShelterCard
          title="서울동물사랑센터"
          subtitle="복지회관"
          address="서울특별시 강동구 성내로 59길 11"
          hours="오전 10:00 - 오후 7:00"
        />
        <ShelterCard
          title="서울동물사랑센터"
          subtitle="복지회관"
          address="서울특별시 강동구 성내로 59길 11"
          hours="오전 10:00 - 오후 7:00"
        />
      </ListWrapper>
    </ListContainer>
  );
};

export default ShelterList;

const ListContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  overflow: auto;
  max-height: 800px;
`;

const ListWrapper = styled.div`
  margin-right: 12px;
`;
