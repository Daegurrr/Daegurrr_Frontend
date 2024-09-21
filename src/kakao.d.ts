declare global {
  namespace kakao.maps {
    interface MapOptions {
      center: LatLng;
      level: number;
    }

    class Map {
      constructor(container: HTMLElement, options: MapOptions);
    }

    class LatLng {
      constructor(lat: number, lng: number);
    }

    function load(callback: () => void): void;
  }

  interface Window {
    kakao: {
      maps: typeof kakao.maps;
    };
  }
}
export {};
