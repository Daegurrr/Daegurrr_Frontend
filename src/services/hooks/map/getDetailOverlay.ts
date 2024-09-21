import { fetchInstanceJWT } from '../../instance/axiosJWT';

export type DetailOverlay = {
  id: 0;
  restName: 'string';
  doroAddress: 'string';
  jibunAddress: 'string';
  deptContactNumber: 'string';
  capacity: 0;
  operationBeginDate: 'string';
  operationEndDate: 'string';
  openTime: 'string';
  closeTime: 'string';
  restType: 'string';
  latitude: 0;
  longitude: 0;
  public: true;
};

const getDetailOverlayPath = (id: number) => `/api/shelter/detail/${id}`;

export const getDetailOverlay = async (id: number): Promise<DetailOverlay> => {
  const response = await fetchInstanceJWT.get(getDetailOverlayPath(id));

  return response.data;
};
