import styled from "styled-components";
import { PostItemResponseData } from "../../../services/hooks/board/getPostList";


const Post = ({item}:{item:PostItemResponseData}) => {
    return (
        <>
        <Wrapper>
        <Title>{`${item.title}`}</Title>
        <RowWrapper>
            <Text>{`${item.author}`}</Text><Seperator/>
            <Text>{`${item.createAt}`}</Text>
            <div style = {{margin: '0px 10px'}}/>
            <Text>조회수</Text><Number>{`${item.viewCount}`}</Number><Seperator/>
            <Text>댓글</Text><Number>{`${item.commentCount}`}</Number>
        </RowWrapper>  
        </Wrapper>
        <Line/>
        </>    
    )
};

export default Post;

const Wrapper = styled.div`
    margin: 8px;
    margin-left: 20px;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 900;
    padding-bottom: 1px;
`;

const Text = styled.div`
    font-size: 15px;
    color: #9C9B9B;
    font-weight: 500;
`;

const Number = styled.div`
    font-size: 15px;
    color: #E4000F;
    font-weight: bold;
    margin-left: 5px;
`;
const Line = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  background-color: #9C9B9B;
  margin: auto;
`;


const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Seperator = styled.div`
  width: 1px;
  background-color: #9C9B9B;
  height: 15px;
  margin: auto 10px; 

`;
