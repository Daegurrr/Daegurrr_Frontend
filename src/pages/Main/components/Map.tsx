import { useEffect } from 'react';
import { useLocationStore } from '../../../stores/useLocationStore';
import CategoryBtnList from './CategoryBtnList';

const Map = () => {
  const setLocation = useLocationStore((state) => state.setLocation);
  const setAddress = useLocationStore((state) => state.setAddress);
  const latitude = useLocationStore((state) => state.latitude);
  const longitude = useLocationStore((state) => state.longitude);

  useEffect(() => {
    // 사용자 위치 정보 가져오기
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(latitude, longitude);
        },
        (error) => {
          console.error('Error getting location: ', error);
        },
        { enableHighAccuracy: true }
      );
    }

    // 스크립트를 동적으로 로드
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_APP_JAVASCRIPT_KEY
    }&autoload=false&libraries=services`;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        if (latitude !== null && longitude !== null) {
          const container = document.getElementById('map') as HTMLElement;
          const options: kakao.maps.MapOptions = {
            center: new window.kakao.maps.LatLng(latitude, longitude),
            level: 3,
          };
          const map = new window.kakao.maps.Map(container, options);
          console.log(map);

          // 주소 변환
          const geocoder = new window.kakao.maps.services.Geocoder();
          const coord = new window.kakao.maps.LatLng(latitude, longitude);

          geocoder.coord2Address(
            coord.getLng(),
            coord.getLat(),
            (result, status) => {
              if (status === window.kakao.maps.services.Status.OK) {
                const address = result[0].address.address_name;
                setAddress(address);
              } else {
                console.error('주소 변환 실패:', status);
                setAddress('주소 변환 실패');
              }
            }
          );
        }
      });
    };

    // 컴포넌트 언마운트 시 스크립트 제거
    return () => {
      document.body.removeChild(script);
    };
  }, [latitude, longitude, setLocation, setAddress]);

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
