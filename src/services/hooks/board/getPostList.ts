import { fetchInstance } from '../../instance/axios';

export type PostListResponseData = {
    page: number;
    hasNext: boolean;
    totalPage: number;
    data: PostItemResponseData[];
};

export type PostItemResponseData = {
    id: number;
    title: string;
    author: string;
    createAt: string;
    viewCount: number;
    commentCount: number;
}
const getPostListPath = () => '/api/post';

export const getPostList = async (page: number, size: number): Promise<PostListResponseData> => {
const response = await fetchInstance.get(getPostListPath(), { 
    params: { page: page, size: size }
});

return response.data;
};