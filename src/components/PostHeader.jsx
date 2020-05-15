import React from "react";
import styled from "styled-components";

const Avatar = styled.img`
  float: left;
  height: 40px;
  margin-right: 1rem;
`;
const StyledPostHeader = styled.div`
  margin-bottom: 1rem;
`;
const StyledAuthorName = styled.h5`
  line-height: 1;
  margin: 0;
`;
const StyledPostDate = styled.span`
  font-size: 0.8rem;
  color: #929292;
`;
export const PostHeader = (props) => {
  return (
    <StyledPostHeader>
      <Avatar src={`${props.imgUrl}`} alt={props.name} />
      <div>
        <StyledAuthorName>
          <a href="#">{props.name}</a>
        </StyledAuthorName>
        <StyledPostDate>{props.date}</StyledPostDate>
      </div>
    </StyledPostHeader>
  );
};
