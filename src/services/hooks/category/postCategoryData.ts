import { fetchInstanceJWT } from '../../instance/axiosJWT';

type Category = {
  id: number;
  latitude: number;
  longitude: number;
};

const postCategoryDataPath = () => '/api/shelter/type';

export const postCategoryData = async (
  facilityType: string,
  position: { latitude: number; longitude: number }
): Promise<Category[]> => {
  const response = await fetchInstanceJWT.post(postCategoryDataPath(), {
    facilityType,
    position,
  });

  return response.data;
};
