import { AiFillLike } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import "./styles.css";

function like() {
  return (
    <>
      {/* <AiOutlineHeart /> */}

      <button className="btn">
        <AiOutlineHeart />
      </button>
    </>
  );
}

export default like();
