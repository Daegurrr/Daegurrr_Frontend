import styled from 'styled-components';

import { LazyLoadImg } from '../../common/img/LazyLoadImg';

import Ex1 from '../../../assets/shelter/Ex1.png';
import Ex2 from '../../../assets/shelter/Ex2.png';
import Ex3 from '../../../assets/shelter/Ex3.png';
import Star from '../../../assets/shelter/star.png';

const ShelterCard = ({
  title,
  subtitle,
  address,
  hours,
}: {
  title: string;
  subtitle: string;
  address: string;
  hours: string;
}) => {
  const images = [Ex1, Ex2, Ex3];
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <CardContainer>
      <LazyLoadImg
        image={{
          src: randomImage,
          alt: '',
          width: '100%',
          height: '153px',
        }}
      />
      <TextContainer>
        <TitleSection>
          <Title>{title}</Title>
          <SubTitle>{subtitle}</SubTitle>
        </TitleSection>
        <ContentSection>
          <p style={{ fontSize: '14px' }}>{address}</p>
        </ContentSection>
        <DetailSection>
          <StarWrapper>
            <img src={Star} alt="" style={{ width: '15px', height: '15px' }} />
            <p style={{ fontSize: '14px', fontWeight: '700' }}>4.5</p>
          </StarWrapper>
          <DivideWrapper>
            <div
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                width: '1px',
                height: '12px',
                backgroundColor: '#9C9B9B',
              }}
            />
          </DivideWrapper>
          <p style={{ fontSize: '14px', fontWeight: '700' }}>{hours}</p>
        </DetailSection>
      </TextContainer>
    </CardContainer>
  );
};

export default ShelterCard;

const DivideWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
`;

const TextContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 8px;
`;

const TitleSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 15px;
  font-weight: 700;
`;

const SubTitle = styled.p`
  margin-left: 8px;
  color: #9c9b9b;
  font-size: 9px;
`;

const ContentSection = styled.section`
  display: flex;
`;

const DetailSection = styled.section`
  display: flex;
  flex-direction: row;
  gap: 7px;
`;

const StarWrapper = styled.div`
  gap: 3px;
  display: flex;
`;
