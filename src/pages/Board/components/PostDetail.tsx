import Img from "../../../assets/map.png";
import styled from "styled-components";
import { PostResponseData, CommentResponseData } from "../../../services/hooks/board/getPost";
import Comment from "./Comment";

const PostDetail = ({item}:{item:PostResponseData}) => {

    return (
        <Wrapper>
            <Title>{`${item.title}`}</Title>
            <Map src={Img} alt="map"/>
            <Container>
                <Item style={{marginLeft: '40px'}}><Tag>봉사 일시</Tag>{`${item.date}`}</Item>
                <Item><Tag>봉사 내용</Tag>{`${item.content}`}</Item>
                <Item style={{marginLeft: '40px'}}><Tag>봉사 장소</Tag>{`${item.place}`}</Item>
                <Item><Tag>모집 대상</Tag>{`${item.target}`}</Item>
            </Container>
            <Text>{`${item.description}`}</Text>
            <BoldLine/>
            <div style={{fontWeight: 'bold'}}>댓글</div>
            {item.comments.map((item: CommentResponseData, index: number) => (
                <Comment key={index} item={item}/>
            ))}
            <Line/>
            
            

            
            
            

        </Wrapper>
    )

}

export default PostDetail;


const Container = styled.div`
    width: 100%;
    border-radius: 20px;
    background-color: #F5F5F5;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    text-align: center;
`;

const Item = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: row;
    font-size: 15px;
    align-items: center;
    font-weight: bold;
    gap: 4px;
`;
const Tag = styled.div`
    font-size: 12px;
    font-weight: bold;
    color: #E4000F;
    background-color: #FFF;
    border: 1px solid #E4000F;
    border-radius: 18px;
    padding: 4px 8px;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
`;

const Text = styled.div`
    font-size: 15px;
`;
const Map = styled.img`
    width: 100%;
    border-radius: 20px;
`;

const Wrapper = styled.div`
    display: flex;
    position: fixed;
    flex-direction: column;
    top: 80px;
    left: 150px;
    right: 150px;
    bottom: 80px;
    overflow-y: scroll;
    overflow-x: hidden;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
    // justify-content: center;
    // align-items: center;
    z-index: 1;
    background-color: #fff;
    border-radius: 20px;
    gap: 10px;
    padding: 40px;
`;
const BoldLine = styled.div`
    width: 100%;
    height: 3px;
    background-color: #E4000F;
    padding: 1px;
`;

const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: #9C9B9B;
    padding: 1px;
`;