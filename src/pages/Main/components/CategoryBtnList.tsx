import styled from 'styled-components';

import CategoryButton from '../../../components/common/button/CategoryButton';

import ActBank from '../../../assets/button/category/active/bank.png';
import InActBank from '../../../assets/button/category/inactive/bank.png';
import ActPark from '../../../assets/button/category/active/park.png';
import InActPark from '../../../assets/button/category/inactive/park.png';
import ActWelfare from '../../../assets/button/category/active/welfare.png';
import InActWelfare from '../../../assets/button/category/inactive/welfare.png';
import ActOld from '../../../assets/button/category/active/old.png';
import InActOld from '../../../assets/button/category/inactive/old.png';

const categoryButtons = [
  {
    activeSrc: ActPark,
    inactiveSrc: InActPark,
    width: '14.12px',
    height: '16px',
    marginright: '8px',
    label: '공원',
  },
  {
    activeSrc: ActBank,
    inactiveSrc: InActBank,
    width: '9.93px',
    height: '15.63px',
    marginright: '8px',
    label: '금융기관',
  },
  {
    activeSrc: ActWelfare,
    inactiveSrc: InActWelfare,
    width: '13.72px',
    height: '12px',
    marginright: '8px',
    label: '행정복지센터',
  },
  {
    activeSrc: ActOld,
    inactiveSrc: InActOld,
    width: '12.6px',
    height: '18px',
    marginright: '8px',
    label: '노인시설',
  },
];

const CategoryBtnList = () => {
  return (
    <ButtonListWrapper>
      <LoginBtnWrapper>
        <CategoryButton backgroundcolor="#e4000f" textcolor="#fff">
          로그인
        </CategoryButton>
      </LoginBtnWrapper>
      <LoginBtnWrapper>
        <CategoryButton backgroundcolor="#e4000f" textcolor="#fff">
          게시판
        </CategoryButton>
      </LoginBtnWrapper>
      <CategoryListWrapper>
        {categoryButtons.map((button, index) => (
          <CategoryButton
            key={index}
            activeSrc={button.activeSrc}
            inactiveSrc={button.inactiveSrc}
            width={button.width}
            height={button.height}
            marginright={button.marginright}
          >
            {button.label}
          </CategoryButton>
        ))}
      </CategoryListWrapper>
    </ButtonListWrapper>
  );
};

export default CategoryBtnList;

const ButtonListWrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  display: flex;
  padding: 20px 15px;
  z-index: 999;

  overflow: hidden;
  display: flex;
  flex-direction: row-reverse;
`;

const LoginBtnWrapper = styled.div`
  width: 120px;
`;

const CategoryListWrapper = styled.div`
  gap: 16px;
  width: 100%;
  margin-right: 164px;
  display: flex;
  flex-direction: row-reverse;
`;
