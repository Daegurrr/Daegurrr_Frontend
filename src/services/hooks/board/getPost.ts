import { fetchInstance } from '../../instance/axios';

export type PostResponseData = {
    id: number;
    title: string,
    author: string,
    viewCount: number,
    commentCount: number,
    description: string,
    date: string,
    place: string,
    content: string;
    target: string;
    comments: CommentResponseData[];
};

export type CommentResponseData = {
    name: string;
    profileUrl: string;
    comment: string;
}
const getPostPath = () => '/api/post';

export const getPost = async (postId: number): Promise<PostResponseData> => {
const response = await fetchInstance.get(getPostPath()+`/${postId}`);

return response.data;
};