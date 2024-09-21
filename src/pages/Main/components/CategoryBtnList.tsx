import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CategoryButton from "../../../components/common/button/CategoryButton";

import ActBank from "../../../assets/button/category/active/bank.png";
import InActBank from "../../../assets/button/category/inactive/bank.png";
import ActPark from "../../../assets/button/category/active/park.png";
import InActPark from "../../../assets/button/category/inactive/park.png";
import ActWelfare from "../../../assets/button/category/active/welfare.png";
import InActWelfare from "../../../assets/button/category/inactive/welfare.png";
import ActOld from "../../../assets/button/category/active/old.png";
import InActOld from "../../../assets/button/category/inactive/old.png";
import DownBtn from "../../../assets/dropdown/downBtn.png";

const categoryButtons = [
  {
    activeSrc: ActPark,
    inactiveSrc: InActPark,
    width: "14.12px",
    height: "16px",
    marginright: "8px",
    label: "공원",
  },
  {
    activeSrc: ActBank,
    inactiveSrc: InActBank,
    width: "9.93px",
    height: "15.63px",
    marginright: "8px",
    label: "금융기관",
  },
  {
    activeSrc: ActWelfare,
    inactiveSrc: InActWelfare,
    width: "13.72px",
    height: "12px",
    marginright: "8px",
    label: "행정복지센터",
  },
  {
    activeSrc: ActOld,
    inactiveSrc: InActOld,
    width: "12.6px",
    height: "18px",
    marginright: "8px",
    label: "노인시설",
  },
];

const CategoryBtnList = () => {
  const link = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${
    import.meta.env.VITE_APP_REST_API_KEY
  }&redirect_uri=${import.meta.env.VITE_APP_REDIRECT_URL}
`;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const onClickDropDown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const accessToken = localStorage.getItem("accessToken");
  const profileUrl = localStorage.getItem("profileUrl");

  const onClickLogin = () => {
    window.location.href = link;
  };

  const handleLogout = () => {
    localStorage.clear();

    window.location.reload();
  };

  const navigate = useNavigate();

  const handleNavigateBoard = () => {
    navigate('/board')
  };

  return (
    <ButtonListWrapper>
      {accessToken ? (
        <UserBtnWrapper>
          <CategoryButton
            backgroundcolor="#e4000f"
            textcolor="#fff"
            onClick={onClickDropDown}
          >
            <img
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                marginRight: "4px",
              }}
              src={profileUrl ?? ""}
              alt=""
            />
            {localStorage.getItem("name")}
            <img
              style={{ width: "7.93px", height: "8px", marginLeft: "4px" }}
              src={DownBtn}
              alt=""
            />
          </CategoryButton>
          {isDropdownOpen && (
            <DropdownMenu>
              <DropdownItem onClick={handleLogout}>로그아웃</DropdownItem>
              <DropdownItem onClick={() => console.log("환경설정 클릭")}>
                환경설정
              </DropdownItem>
            </DropdownMenu>
          )}
        </UserBtnWrapper>
      ) : (
        <LoginBtnWrapper>
          <CategoryButton
            backgroundcolor="#e4000f"
            textcolor="#fff"
            onClick={onClickLogin}
          >
            로그인
          </CategoryButton>
        </LoginBtnWrapper>
      )}

      <LoginBtnWrapper>
        <CategoryButton backgroundcolor="#e4000f" textcolor="#fff" onClick={handleNavigateBoard}>
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

  display: flex;
  flex-direction: row-reverse;
`;

const UserBtnWrapper = styled.div`
  width: 170px;
  position: relative;
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

const DropdownMenu = styled.div`
  position: absolute;
  top: 90%;
  right: 13px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 0px 0px 12px 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: -1;
  width: 80px;
`;

const DropdownItem = styled.div`
  padding: 10px 12px;
  font-size: 15px;
  cursor: pointer;
  color: #000;
  border-bottom: 1px solid #e0e0e0;

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;
