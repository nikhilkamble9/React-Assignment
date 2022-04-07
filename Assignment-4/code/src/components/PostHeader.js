const PostHeader = ({ details }) => {
  return (
    <>
      <div className="PostHeader">
        <div className="leftside">
          <div className="heading">{details.name}</div>
          <div className="location">{details.location}</div>
        </div>
        <div className="rightside">
          <div className="dot">
            <p className="dotBox">...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostHeader;
