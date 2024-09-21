import { useEffect } from 'react';

import CategoryBtnList from './CategoryBtnList';

const Map = () => {
  useEffect(() => {
    // 스크립트를 동적으로 로드
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_APP_JAVASCRIPT_KEY
    }&autoload=false`;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.kakao && window.kakao.maps) {
        // console.log('Kakao Maps API loaded', window.kakao.maps);

        window.kakao.maps.load(() => {
          if (window.kakao.maps.LatLng) {
            const container = document.getElementById('map') as HTMLElement;
            const options: kakao.maps.MapOptions = {
              center: new window.kakao.maps.LatLng(37.5665, 126.978), // 서울 좌표
              level: 3, // 확대 레벨
            };
            new window.kakao.maps.Map(container, options); // 지도 생성
          } else {
            console.error('LatLng is not defined in kakao.maps');
          }
        });
      } else {
        console.error('Kakao Maps API failed to load');
        console.log(window.kakao); // 추가 정보 출력
      }
    };

    // 컴포넌트 언마운트 시 스크립트 제거
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div
        id="map"
        style={{ width: '100%', height: '100vh', position: 'relative' }}
      />
      <CategoryBtnList />
    </>
  );
};

export default Map;
