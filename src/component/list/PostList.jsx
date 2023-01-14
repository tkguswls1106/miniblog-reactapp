import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

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

function PostList(props) {
    const { posts, onClickItem } = props;

    return (
        <Wrapper>
            {posts.map( (post, index) => {
                return (
                    <PostListItem
                        key={post.id}  // key={index} 를 사용하지 않은걸 보니, 내생각엔 굳이 위의 map부분에서 (post, index) 말고 (post)로 적어도 됐을듯하다.
                        post={post}
                        onClick={() => {
                            onClickItem(post);  // MainPage.jsx에서 onClickItem 함수 만들때 파라미터를 하나 갖고 호출하도록 만들었었음.
                        }}
                    />
                );
            })}
        </Wrapper>
    );
}

export default PostList;