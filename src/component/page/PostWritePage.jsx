import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

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

function PostWritePage(props) {
    const navigate = useNavigate();  // 페이지 이동에 사용함. react-router-dom의 useNavigate() 훅이다.

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return (
        <Wrapper>
            <Container>
                <TextInput
                    height={20}
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);  // 이 코드줄의 value는, 윗 코드줄의 value={title} 을 의미한다.
                    }}
                />

                <TextInput
                    height={480}
                    value={content}
                    onChange={(event) => {
                        setContent(event.target.value);  // 이 코드줄의 value는, 윗 코드줄의 value={content} 을 의미한다.
                    }}
                />

                <Button  // 주의사항: 이 프로젝트는 form없이 개발하였기에, 그저 겉부분만 만든것이다. 내부 코드도 약간 다르게 적힌 부분도있으니, 실제로 백엔드 응용할땐 고려해서 바꾸자.
                    title="글 작성하기"
                    onClick={() => {
                        navigate("/");
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default PostWritePage;