import { fetchInstanceJWT } from '../../instance/axiosJWT';

type UserPosition = {
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

const postUserPositionPath = () => '/api/shelter/nearby';

export const postUserPosition = async (
  latitude: number,
  longitude: number
): Promise<UserPosition[]> => {
  const response = await fetchInstanceJWT.post(postUserPositionPath(), {
    latitude,
    longitude,
  });

  return response.data;
};
