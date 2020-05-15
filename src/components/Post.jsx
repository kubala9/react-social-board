import React, { useState } from "react";
import { PostHeader } from "./PostHeader";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faThumbsUp,
  faShareAlt,
  faCommentAlt,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Paragraph = styled.p`
  text-align: justify;
  color: #676a6c;
  line-height: 1.3;
  font-size: 0.925rem;
`;

const StyledCard = styled(Card)`
  margin: 1rem 0;
`;

const RemoveButton = styled.button`
  float: right;
  border: none;
  background: none;
  &:focus {
    outline: none;
  }
`;

const StyledButton = styled(Button)`
  &:focus {
    box-shadow: none;
  }
`;

export const Post = (props) => {
  const [[like, isLiked], setLike] = useState([
    props.data.numberOfLikes,
    props.data.isLiked,
  ]);

  const handleLikeClick = () => {
    if (isLiked) setLike([like - 1, !isLiked]);
    else setLike([like + 1, !isLiked]);
  };

  return (
    <StyledCard body>
      <RemoveButton onClick={() => props.handleRemovePost(props.id)}>
        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
      </RemoveButton>
      <PostHeader
        name={props.data.author.authorName}
        imgUrl={props.data.author.authorImageUrl}
        date={props.data.publicationDate}
      />
      <Paragraph>{props.content}</Paragraph>
      <ButtonGroup>
        <StyledButton
          variant={isLiked ? "secondary" : "primary"}
          onClick={() => handleLikeClick()}
        >
          <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
          {` ${like} Like${isLiked ? "d!" : ""} `}
        </StyledButton>
        <StyledButton>
          <FontAwesomeIcon icon={faCommentAlt}></FontAwesomeIcon> Comment
        </StyledButton>
        <StyledButton>
          <FontAwesomeIcon icon={faShareAlt}></FontAwesomeIcon> Share
        </StyledButton>
      </ButtonGroup>
    </StyledCard>
  );
};
