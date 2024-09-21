import { useEffect, useState } from 'react';

import styled from 'styled-components';

import {
  DetailOverlay,
  getDetailOverlay,
} from '../../../services/hooks/map/getDetailOverlay';

import CategoryButton from '../../common/button/CategoryButton';

import Star from '../../../assets/shelter/Star.png';
import CloseBtn from '../../../assets/overlay/CloseBtn.png';

const MarkerOverlay = ({ id }: { id: number }) => {
  const [overlayData, setOverlayData] = useState<DetailOverlay | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDetailOverlay(id);
      console.log('data', data);
      setOverlayData(data);
    };
    fetchData();
  }, [id]);

  const formatTime = (time: string) => {
    const formattedTime = time.slice(0, 4); // 뒤의 두 자리 제거
    const hours = parseInt(formattedTime.slice(0, 2), 10);
    const minutes = formattedTime.slice(2);
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // 0을 12로 변환
    return `${formattedHours}:${minutes} ${ampm}`;
  };

  return (
    <MarkerOverlayContainer>
      <MarkerOverlayWrapper>
        <ImgWrapper>
          <img
            src={CloseBtn}
            alt=""
            style={{ width: '12px', height: '12px' }}
          />
        </ImgWrapper>
        {overlayData ? (
          <>
            <MainWrapper>
              <MainTitle>{overlayData.restName}</MainTitle>
              <MainEx>{overlayData.restType}</MainEx>
            </MainWrapper>
            <SubWrapper>
              <StarWrapper>
                <img
                  src={Star}
                  alt=""
                  style={{ width: '15px', height: '15px' }}
                />
                <p style={{ fontSize: '14px', fontWeight: '700' }}>4.5</p>
              </StarWrapper>
              {overlayData.openTime ? (
                <TimeText>
                  {formatTime(overlayData.openTime)} -{' '}
                  {formatTime(overlayData.closeTime)}
                </TimeText>
              ) : null}
            </SubWrapper>
            <SectionWrapper>
              <CapacityText>수용가능인원 {overlayData.capacity}명</CapacityText>
              {overlayData.public === true ? (
                <PublicText> (누구나 사용가능) </PublicText>
              ) : (
                <PublicText> (회원만 사용가능) </PublicText>
              )}
            </SectionWrapper>
            <PublicText>{overlayData.jibunAddress}</PublicText>
            <CapacityText>{overlayData.deptContactNumber}</CapacityText>
          </>
        ) : (
          <p>로딩 중...</p>
        )}
        <BtnWrapper>
          <CategoryButton backgroundcolor="#e4000f" textcolor="#fff">
            길 찾기
          </CategoryButton>
        </BtnWrapper>
      </MarkerOverlayWrapper>
    </MarkerOverlayContainer>
  );
};

export default MarkerOverlay;

const ImgWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
  margin-bottom: 28px;
`;

const MarkerOverlayContainer = styled.div`
  width: 240px;
  height: 184.93px;
  position: absolute;
  top: 30%;
  left: 0%;
  transform: translate(-52%, -120%);
  display: flex;
  flex-direction: column;
`;

const MarkerOverlayWrapper = styled.div`
  height: 166.93px;
  width: 240px;
  background-color: #fff;
  border-radius: 10px;
  padding: 8px 8px 20px 16px;
  box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.25);

  &::after {
    content: '';
    position: absolute;
    bottom: -7%; /* 부모 요소의 위쪽에 위치 */
    left: 35%; /* 부모 요소의 중앙에 위치 */
    transform: translate(-100%, -50%); /* 중앙 정렬 */
    border-width: 14px; /* 꼬리 두께 */
    border-style: solid;
    rotate: 180deg; /* 180도 회전 */
    border-color: transparent transparent #fff transparent; /* 상단은 투명, 하단은 배경색 */
  }
`;

const MainWrapper = styled.div`
  display: flex;
  gap: 3.38px;
  align-items: center;
`;

const SubWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const SectionWrapper = styled.div`
  display: flex;
`;

const CapacityText = styled.p`
  font-size: 14px;
`;

const PublicText = styled.p`
  font-size: 14px;
  color: #9c9b9b;
`;

const MainTitle = styled.h3`
  font-size: 15px;
  font-weight: 700;
`;

const MainEx = styled.p`
  font-size: 9px;
  color: #9c9b9b;
`;

const StarWrapper = styled.div`
  gap: 3px;
  display: flex;
`;

const TimeText = styled.p`
  font-size: 14px;
`;

const BtnWrapper = styled.div`
  margin-top: 21px;
  display: flex;
  flex-direction: row-reverse;
`;
