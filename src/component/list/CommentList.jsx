import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    & > * {  // &는 현재 태그인 Wrapper 태그를 의미하고, *는 전체를 의미하므로, & > * 는 Wrapper 태그에 한단계 밑부분 전체의 자식 선택자 태그들을 범위로 지정한것이다.
        :not(:last-child) {  // Wrapper 태그에 한단계 밑부분 전체의 자식 선택자 태그들중에서 가장 마지막 자식 선택자를 제외한 모든 자식 태그들을 범위로 지정한것이다.
            margin-bottom: 16px;
        }
    }
`;

function CommentList(props) {
    const { comments } = props;  // 내생각엔 나중에 props로, "'댓글과 id가 담긴 여러 객체들'이 담긴 배열"이 전달되어 올것이라고 생각한다. 그래서 map을 사용 가능한것이겠지.

    return (
        <Wrapper>
            {comments.map( (comment, index) => {
                return <CommentListItem key={comment.id} comment={comment} />;
                // key={index} 를 사용하지 않은걸 보니, 내생각엔 굳이 위의 map부분에서 (comment, index) 말고 (comment)로 적어도 됐을듯하다.
            })}
        </Wrapper>
    );
}

export default CommentList;