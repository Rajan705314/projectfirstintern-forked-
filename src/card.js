import React from "react";
import "./styles.css";
import like from "./like";
const objects = [
  {
    id: 1,
    name: "aakash",
    image: "https://i.stack.imgur.com/f94hv.jpg",
    description: "approximately 2.5 mill light-years from Earth.",
  },
  {
    id: 2,
    name: "rajan",
    image:
      "https://plsadaptive.s3.amazonaws.com/gmedia/externalresizes/panopoly_image_full_96dc305f0159d3bf6281109ec8c4ddff.jpg",
    description: " largest planet in the Solar System.",
  },
  {
    id: 3,
    name: "deepak",
    image:
      "https://th.bing.com/th/id/OIP.Nku4xgn9U2Vt3DRjh4wRRwHaHa?pid=ImgDet&rs=1",
    description: " in the constellation Orion, ",
  },
  {
    id: 4,
    name: "rajan",
    image: "https://www.alidays.it/wp-content/uploads/2019/01/400x300.png",
    description:
      " in the constellation Orion, approximately 700 light-years from Earth.",
  },
  {
    id: 5,
    name: "utpal",
    image:
      "https://th.bing.com/th/id/OIP.Nku4xgn9U2Vt3DRjh4wRRwHaHa?pid=ImgDet&rs=1",
    description:
      " in the constellation Orion, approximately 700 light-years from Earth.",
  },
  {
    id: 6,
    name: "talib sir",
    image:
      "https://i.pinimg.com/474x/bf/4b/fa/bf4bfa8a40608fe04f4e046335727af8.jpg",
    description: " in the constellation Orion, approximately 700 light-y.",
  },

  {
    id: 4,
    name: "rajan",
    image: "https://www.alidays.it/wp-content/uploads/2019/01/400x300.png",
    description:
      " in the constellation Orion, approximately 700 light-years from Earth.",
  },
  {
    id: 5,
    name: "utpal",
    image:
      "https://th.bing.com/th/id/OIP.Nku4xgn9U2Vt3DRjh4wRRwHaHa?pid=ImgDet&rs=1",
    description:
      " in the constellation Orion, approximately 700 light-years from Earth.",
  },
  {
    id: 6,
    name: "talib sir",
    image:
      "https://i.pinimg.com/474x/bf/4b/fa/bf4bfa8a40608fe04f4e046335727af8.jpg",
    description: " in the constellation Orion, approximately 700 light-y.",
  },
  {
    id: 5,
    name: "utpal",
    image:
      "https://th.bing.com/th/id/OIP.Nku4xgn9U2Vt3DRjh4wRRwHaHa?pid=ImgDet&rs=1",
    description:
      " in the constellation Orion, approximately 700 light-years from Earth.",
  },
  {
    id: 6,
    name: "talib sir",
    image:
      "https://i.pinimg.com/474x/bf/4b/fa/bf4bfa8a40608fe04f4e046335727af8.jpg",
    description: " in the constellation Orion, approximately 700 light-y.",
  },
  {
    id: 5,
    name: "utpal",
    image:
      "https://th.bing.com/th/id/OIP.Nku4xgn9U2Vt3DRjh4wRRwHaHa?pid=ImgDet&rs=1",
    description:
      " in the constellation Orion, approximately 700 light-years from Earth.",
  },
  {
    id: 6,
    name: "talib sir",
    image:
      "https://i.pinimg.com/474x/bf/4b/fa/bf4bfa8a40608fe04f4e046335727af8.jpg",
    description: " in the constellation Orion, approximately 700 light-y.",
  },
];

function CosmicGallery() {
  return (
    <>
      <h1>Cosmic Gallery</h1>

      <div className="card">
        {objects.map((object) => (
          <div key={object.id} className="card2">
            <img
              src={object.image}
              alt={object.name}
              width="300"
              heigth="400"
            />
            <div className="description">
              <h2>{object.name}</h2>

              <p>{object.description}</p>
            </div>
            <div class="like-count">
              <span id="like-count">0</span> people like this
            </div>
            {like}
          </div>
        ))}
      </div>
    </>
  );
}

export default CosmicGallery();
