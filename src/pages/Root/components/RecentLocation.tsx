import styled from 'styled-components';

import SiderButton from '../../../components/common/button/SiderButton';
import { useLocationStore } from '../../../stores/useLocationStore';

const RecentLocation = () => {
  const address = useLocationStore((state) => state.address);

  return (
    <LoactionContainer>
      <TextWrapper>
        <span style={{ fontSize: '9px', color: '#9C9B9B' }}>최근 위치</span>
        <span style={{ fontSize: '16px', fontWeight: '700' }}>{address}</span>
      </TextWrapper>

      <SiderButtonWrapper>
        <SiderButton>위치 변경</SiderButton>
      </SiderButtonWrapper>
    </LoactionContainer>
  );
};

export default RecentLocation;

const LoactionContainer = styled.div`
  width: 100%;
  padding: 16px 0px 12px 0px;
  border-bottom: 1px solid #e0e0e0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

const SiderButtonWrapper = styled.div`
  width: 82px;
  display: flex;
  align-items: center;
`;
