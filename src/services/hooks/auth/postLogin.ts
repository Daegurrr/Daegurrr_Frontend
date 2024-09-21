import { fetchInstance } from '../../instance/axios';

type LoginResponseData = {
  id: number;
  name: string;
  profileUrl: string;
  accessToken: string;
};

const postLoginPath = () => '/api/auth';

export const postLogin = async (code: string): Promise<LoginResponseData> => {
  const response = await fetchInstance.post(postLoginPath(), { code: code });

  return response.data;
};
