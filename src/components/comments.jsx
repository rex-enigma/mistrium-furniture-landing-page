import React from "react";
import filterNodeImages from '../utils/filter_node_images';
import { scrollXStyle } from "../shared_styles/scroll_x_axis";
import Container from "./container";
import Comment  from "./comment";
import useAllImgFiles from "../custom_hooks/use_all_img_files";
import useAllCommentDataNode  from "../custom_hooks/use_all_comment_data_node";
import associateData from "../utils/associate_data";

const commentsStyle = {
  alignItems: 'start',
  paddingLeft:'40px',
  paddingRight:'40px',
};


 function Comments() {

    let allImgFiles = useAllImgFiles();
    let filteredCommentNodeImages = filterNodeImages('commentAvatar', allImgFiles);
    let commentDataNodes = useAllCommentDataNode();
    let commentDataList = associateData(filteredCommentNodeImages, commentDataNodes);


    let commentList = commentDataList.map((commentData) => {
        let CommentDataNode = commentData.dataNode;
        return <Comment gatsbyImgNode={commentData.gatsbyImgNode} commentDataNode={CommentDataNode}  key={commentData.gatsbyImgNode.id}  />
    });
    
      return (<Container  css = {[scrollXStyle, commentsStyle]} > {commentList} </Container>);
}


export default Comments;

//should have a key but have used them for the list of stars
{/* <Comment gatsbyImgNode={commentData.gatsbyImgNode} commentDataNode={CommentDataNode}  key={CommentDataNode.id}/> */}

