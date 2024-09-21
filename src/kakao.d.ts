declare global {
  namespace kakao.maps {
    interface MapOptions {
      center: LatLng;
      level: number;
    }

    class Size {
      constructor(width: number, height: number);
    }

    class MarkerImage {
      constructor(src: string, size: Size);
    }

    class Map {
      constructor(container: HTMLElement, options: MapOptions);
    }

    export class Marker {
      constructor(options: MarkerOptions);
      setMap(map: Map): void;
    }

    class LatLng {
      constructor(lat: number, lng: number);
      getLat(): number; // 추가
      getLng(): number; // 추가
    }

    namespace services {
      class Geocoder {
        coord2Address(
          lng: number,
          lat: number,
          callback: (result: any, status: any) => void
        ): void; // 추가
      }

      const Status: {
        OK: string; // 추가
      };
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
