import React, { useState } from "react";

function voting() {
  const [like, setlike] = useState(100);
  const [dislike, setdislike] = useState(4);
  const [likeactive, setlikeactive] = useState(false);
  const [dislikeactive, setdislikeactive] = useState(false);

  //   function likef() {
  //     if (likeactive) {
  //       setlikeactive(false);
  //       setlike(like - 1);
  //     } else {
  //       setlikeactive(true);
  //       setlike(like + 1);
  //     }
  //     if (dislikeactive) {
  //       setdislikeactive(false);
  //       setlike(like + 1);
  //       setdislike(like - 1);
  //     }
  //   }
  // }

  // function dislikef() {
  //   if (dislikeactive) {
  //     setdislikeactive(false);
  //     setdislike(dislike - 1);
  //   } else {
  //     setdislikeactive(true);
  //     setdislike(like + 1);
  //   }
  //   if (likeactive) {
  //     setlikeactive(false);
  //     setdislike(like + 1);
  //     setlike(like - 1);
  //   }
  // }
  return (
    <>
      <button onClick={likef}> like{like}</button>
      <button onClick={dislikef}> dislike{dislike}</button>
    </>
  );
}

export default voting();
