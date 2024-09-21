import Img from "../../assets/Daefree.png"
import styled from "styled-components";
import { getPostList } from "../../services/hooks/board/getPostList";
import { useEffect,useState } from "react";
import Post from "./components/Post";
import { PostItemResponseData } from "../../services/hooks/board/getPostList";
import CategoryButton from "../../components/common/button/CategoryButton";

const BoardPage = () => {
    const [data, setData] = useState<PostItemResponseData[] | null>(null);
    const [page, setPage] = useState(0);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getPostList(page,7);
                setData(response.data);
            } catch (error) {
                console.error('게시글 조회 실패:', error);
            } 
        };
        fetchData(); 
        }, [page]);

    const handlePageChange = (pageNumber: number) => {
        setPage(pageNumber);
    }

    return (
    <Wrapper>
    <Logo src={Img} alt="logo"/>
    <RowWrapper>
        <CategoryButton backgroundcolor='#e4000f' textcolor="#fff">쉼터 찾기</CategoryButton>
        <CategoryButton backgroundcolor='#e4000f' textcolor="#fff">로그인</CategoryButton>
    </RowWrapper>
    <CategoryButton textcolor="#747474">글쓰기</CategoryButton>
    <BoldLine/>
    {data && data.length > 0 ? (
    data.map((item: PostItemResponseData, index: number) => (
        <Post key={index} item={item} />
    ))
    ) : (
        <p>기다려~~~</p>
    )}
    <Line/>

    {/* 페이지네이션 버튼 */}
    <PageButton>
    {Array.from({ length: 5 }, (_, index) => (
                page === index ? (
                    <ActivePageNumber 
                        key={index} 
                        onClick={() => handlePageChange(index)}
                    >
                        {index + 1}
                    </ActivePageNumber>
                ) : (
                    <InActivePageNumber 
                        key={index} 
                        onClick={() => handlePageChange(index)}
                    >
                        {index + 1}
                    </InActivePageNumber>
                )
            ))}
    </PageButton>
    </Wrapper>
    )
};

export default BoardPage;


const PageButton = styled.div`
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
`;

const ActivePageNumber = styled.button`
    font-size: 12px;
    width: 20px;
    height: 20px;  
    color: #FFF;
    background-color: #E4000F;
    border: none;
    border-radius: 50%;   
    text-align: center;
    margin: 5px;
`;

const InActivePageNumber = styled.button`
    font-size: 12px;
    width: 20px;
    height: 20px;  
    color: #E4000F;
    background-color: transparent;
    border: none;
    border-radius: 50%;   
    text-align: center; 
    margin: 5px;
`;

const RowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 20px;
    right: 40px;
    gap: 8px;
`;

const Wrapper = styled.div`
    overflow: auto;
    margin: 0px 40px;
`;
const Logo = styled.img`
    width: 200px;
    height: 40px;
    display: block;
    margin: auto;
    padding-top: 20px;
`;
const BoldLine = styled.div`
    position: relative;
    width: 100%;
    height: 4px;
    background-color: #E4000F;
    margin: auto;
    margin-top: 20px;
`;
const Line = styled.div`
    position: relative;
    width: 100%;
    height: 1px;
    background-color: #E4000F;
    margin: auto;
`;
