import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import data from '../../data.json';

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function MainPage(props) {
    const {} = props;  // 이 코드줄은 아마 안써도 되는듯?하다.

    const navigate = useNavigate();  // 페이지 이동에 사용함. react-router-dom의 useNavigate() 훅이다.

    return (
        <Wrapper>
            <Container>
                <Button
                    title="글 작성하기"
                    onClick={() => {  // 나중에 onClick 함수 호출할때, 파라미터없이 호출 가능하게 만듦.
                        navigate("/post-write");
                    }}
                />

                <PostList
                    posts={data}
                    onClickItem={(item) => {  // 나중에 onClickItem 함수 호출할때, 파라미터를 하나 갖고서 호출하게 만듦.
                        navigate(`/post/${item.id}`);
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default MainPage;