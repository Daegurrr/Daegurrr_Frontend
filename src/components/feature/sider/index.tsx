import { useState } from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import Open from '../../../assets/sider/close.png';
import Close from '../../../assets/sider/open.png';

const Sider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SiderContainer>
      <Sidebar
        as={motion.div}
        animate={{
          width: isOpen ? '300px' : '16px', // Sidebar width는 항상 고정
          padding: isOpen ? '20px 0 20px 20px' : '0px', // Sidebar padding은 항상 고정
        }}
        transition={{ duration: 0.5 }}
      >
        <Content
          as={motion.div}
          animate={{
            opacity: isOpen ? 1 : 0,
            visibility: isOpen ? 'visible' : 'hidden', // 콘텐츠 숨김 처리
          }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </Content>
      </Sidebar>
      <SiderButton onClick={toggleSidebar}>
        {isOpen ? (
          <SideImg src={Close} alt="" />
        ) : (
          <SideImg src={Open} alt="" />
        )}
      </SiderButton>
    </SiderContainer>
  );
};

export default Sider;

const SideImg = styled.img`
  width: 8px;
  height: 8px;
`;

const SiderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 999;
  width: 320px;
  height: 100vh;
  position: fixed;
`;

const Sidebar = styled(motion.div)`
  height: 100%;
  width: calc(100% - 20px);
  border-radius: 0px 20px 20px 0px;
  background-color: #fff;

  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const Content = styled(motion.div)`
  padding: 16px;
  height: 100vh;
`;

const SiderButton = styled.button`
  width: 13x;
  height: 40px;
  background-color: #fff;
  border: none;
  transition: all 0.3s ease;
`;
