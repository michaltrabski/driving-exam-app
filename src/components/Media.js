import React from "react";
import { Video } from "../elements/elements";
import { Img } from "./../elements/elements";

const path = "https://poznaj-testy.pl/wp-content/uploads/media/";

const Media = ({ m, v }) => {
  const src = path + m;

  const video = (
    <Video
      src={src}
      controls
      // onCanPlayThrough={() => this.mediaLoaded("video loaded")}
    />
  );
  const image = (
    <Img
      src={src}
      alt="obraz"
      // onLoad={() => this.mediaLoaded("image loaded")}
    />
  );
  return v ? video : image;
};

export default Media;
