declare global {
  namespace kakao.maps {
    interface CustomOverlay {
      new (options: CustomOverlayOptions): CustomOverlay;
      setMap(map: Map | null): void;
    }

    interface CustomOverlayOptions {
      position: LatLng | LatLngLiteral;
      content: string;
      yAnchor?: number;
      clickable?: boolean;
    }

    interface event {
      addListener<T>(
        target: any,
        type: string,
        listener: (event: T) => void
      ): void;
    }

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

    class LatLng {
      constructor(lat: number, lng: number);
      getLat(): number;
      getLng(): number;
    }

    namespace services {
      class Geocoder {
        coord2Address(
          lng: number,
          lat: number,
          callback: (result: any, status: any) => void
        ): void;
      }

      const Status: {
        OK: string;
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
