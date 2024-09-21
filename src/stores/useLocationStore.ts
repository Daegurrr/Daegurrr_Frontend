import { create } from 'zustand';

type LocationState = {
  latitude: number | null;
  longitude: number | null;
  address: string;
  setAddress: (address: string) => void;
  setLocation: (latitude: number | null, longitude: number | null) => void;
};

export const useLocationStore = create<LocationState>((set) => ({
  latitude: null,
  longitude: null,
  address: '위치 정보를 불러오는 중...',
  setLocation: (latitude, longitude) => set({ latitude, longitude }),
  setAddress: (address) => set({ address }),
}));
