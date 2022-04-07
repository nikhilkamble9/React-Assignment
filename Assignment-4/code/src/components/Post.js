import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostFooter from "./PostFooter";
const Post = ({ details }) => {
  return (
    <div className="PostContainer">
      <PostHeader details={details} />
      <PostImage details={details} />
      <PostFooter details={details} />
    </div>
  );
};

export default Post;
