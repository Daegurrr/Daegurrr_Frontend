import { useEffect } from 'react';
import { useLocationStore } from '../../../stores/useLocationStore';
import CategoryBtnList from './CategoryBtnList';
import { postUserPosition } from '../../../services/hooks/map/postUserPosition';

import MarkerOverlay from '../../../components/feature/overlay/MarkerOverlay';
import ReactDOM from 'react-dom';
import { postCategoryData } from '../../../services/hooks/category/postCategoryData';

type Item = {
  id: number;
  latitude: number;
  longitude: number;
  restType: string;
};

const Map = () => {
  const setLocation = useLocationStore((state) => state.setLocation);
  const setAddress = useLocationStore((state) => state.setAddress);
  const latitude = useLocationStore((state) => state.latitude);
  const longitude = useLocationStore((state) => state.longitude);

  const updateMapWithMarkers = async (facilityType: string) => {
    try {
      const data: Item[] = await postCategoryData(facilityType, {
        latitude: latitude!,
        longitude: longitude!,
      });
      console.log('Received data:', data);

      const container = document.getElementById('map') as HTMLElement;

      // 새로운 지도 인스턴스 생성
      const map = new window.kakao.maps.Map(container, {
        center: new window.kakao.maps.LatLng(latitude, longitude),
        level: 5,
      });

      // 새로운 마커 추가
      data.forEach((item) => {
        console.log('Marker position:', item.latitude, item.longitude);

        const markerPosition = new window.kakao.maps.LatLng(
          item.latitude,
          item.longitude
        );
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);

        // 커스텀 오버레이 생성 및 연결
        const overlayDiv = document.createElement('div');
        ReactDOM.render(<MarkerOverlay id={item.id} />, overlayDiv);
        const customOverlay = new window.kakao.maps.CustomOverlay({
          position: markerPosition,
          content: overlayDiv,
          yAnchor: 1,
          zIndex: 1,
        });

        // 마커 클릭 시 오버레이 표시
        window.kakao.maps.event.addListener(marker, 'click', () => {
          customOverlay.setMap(map);
        });
      });
    } catch (error) {
      console.error('카테고리 데이터 가져오기 실패:', error);
    }
  };

  useEffect(() => {
    // 사용자 위치 정보 가져오기
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(latitude, longitude);
          try {
            const data: Item[] = await postUserPosition(latitude, longitude);
            console.log(data);

            if (data.length > 0) {
              const container = document.getElementById('map') as HTMLElement;
              const options: kakao.maps.MapOptions = {
                center: new window.kakao.maps.LatLng(latitude, longitude),
                level: 3,
              };
              const map = new window.kakao.maps.Map(container, options);

              // 마커 추가 및 클릭 이벤트 설정
              data.forEach((item) => {
                const markerPosition = new window.kakao.maps.LatLng(
                  item.latitude,
                  item.longitude
                );

                const marker = new window.kakao.maps.Marker({
                  position: markerPosition,
                });
                marker.setMap(map);

                // 커스텀 오버레이 내용
                const overlayDiv = document.createElement('div');
                ReactDOM.render(<MarkerOverlay id={item.id} />, overlayDiv);

                const customOverlay = new window.kakao.maps.CustomOverlay({
                  position: markerPosition,
                  content: overlayDiv,
                  yAnchor: 1,
                  zIndex: 1,
                });

                // 마커 클릭 시 커스텀 오버레이 표시
                window.kakao.maps.event.addListener(marker, 'click', () => {
                  customOverlay.setMap(map);
                });

                // 맵 클릭 시 오버레이 숨기기
                window.kakao.maps.event.addListener(map, 'click', () => {
                  customOverlay.setMap(null);
                });
              });
            }
          } catch (error) {
            console.error('데이터 가져오기 실패:', error);
          }
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
      <CategoryBtnList onCategorySelect={updateMapWithMarkers} />
    </>
  );
};

export default Map;
