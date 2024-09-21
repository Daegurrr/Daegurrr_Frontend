import styled from 'styled-components';
import { useState, useEffect } from 'react';
import ShelterCard from '../../../components/feature/card/ShelterCard';
import { useLocationStore } from '../../../stores/useLocationStore';
import { postUserPosition } from '../../../services/hooks/map/postUserPosition';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const ShelterList = () => {
  const latitude = useLocationStore((state) => state.latitude);
  const longitude = useLocationStore((state) => state.longitude);
  const [shelters, setShelters] = useState([]);

  useEffect(() => {
    const fetchShelters = async () => {
      if (latitude && longitude) {
        try {
          const data = await postUserPosition(latitude, longitude);
          setShelters(data);
        } catch (error) {
          console.error('데이터 가져오기 실패:', error);
        }
      }
    };

    fetchShelters();
  }, [latitude, longitude]);

  return (
    <ListContainer>
      <ListWrapper>
        {shelters.length > 0 ? (
          shelters.map((shelter, index) => {
            const openTime = shelter.openTime;
            const closeTime = shelter.closeTime;

            const formatTime = (time) => {
              return dayjs(time, 'HHmmss').format('A hh:mm');
            };

            const formattedOpenTime = formatTime(openTime); // "AM 09:00"
            const formattedCloseTime = formatTime(closeTime); // "PM 06:00"

            return (
              <ShelterCard
                key={index} // 각 카드에 고유 키 부여
                title={shelter.restName} // shelter 객체에서 title 가져오기
                subtitle={shelter.restType} // shelter 객체에서 restType 가져오기
                address={shelter.jibunAddress}
                hours={
                  openTime && closeTime
                    ? `${formattedOpenTime} ~ ${formattedCloseTime}`
                    : ''
                }
              />
            );
          })
        ) : (
          <p>정보가 없습니다.</p>
        )}
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
