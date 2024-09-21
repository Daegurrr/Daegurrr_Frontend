import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { postLogin } from '../../services/hooks/auth/postLogin';
import { useNavigate } from 'react-router-dom';

const AuthCallBackPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // URL에서 인가 코드를 추출하는 함수
    const getAuthCodeFromUrl = () => {
      const searchParams = new URLSearchParams(location.search);
      return searchParams.get('code'); // 'code' 파라미터 값 추출
    };

    const authCode = getAuthCodeFromUrl();
    if (authCode) {
      // 인가 코드를 추출한 후 API 호출 및 로컬스토리지 저장
      const login = async () => {
        try {
          const response = await postLogin(authCode);
          if (response && response.accessToken) {
            // 로컬스토리지에 accessToken 저장
            localStorage.setItem('accessToken', response.accessToken);
            localStorage.setItem('profileUrl', response.profileUrl);
            localStorage.setItem('name', response.name);
            console.log('Access Token 저장 완료:', response.accessToken);
          }
          navigate('/');
        } catch (error) {
          console.error('Login 실패:', error);
        }
      };

      login();
    }
  }, [location.search, navigate]);

  return <>123</>;
};

export default AuthCallBackPage;
