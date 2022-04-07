const PostImage = ({ details }) => {
  const relativeImageURL = `../Images/${details.PostImage}`;
  return (
    <div className="PostImage">
      <img src={relativeImageURL} alt="img" />
    </div>
  );
};

export default PostImage;
