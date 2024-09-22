import styled from "styled-components";
import { CommentResponseData } from "../../../services/hooks/board/getPost";

const Comment = ({item}:{item:CommentResponseData}) => {

    return (
        <RowWrapper>
        <Img src={`${item.profileUrl}`}/>
        <ColWrapper>
        <Name>{`${item.name}`}</Name>
        <Text>{`${item.comment}`}</Text>
        </ColWrapper>
        </RowWrapper>
    )

}

export default Comment;

const ColWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const RowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
`;

const Name = styled.div`
    font-size: 12px;
    font-weight: bold;
    color: #747474;
`
const Text = styled.div`
    font-size: 15px;
`;
const Img = styled.img`
    width: 30px;
    height: 30px;
    overflow: hidden;
    border-radius: 50%;
    display: flex;
    // justify-content: center;
    // align-items: center;
    // align-self: center;
`;