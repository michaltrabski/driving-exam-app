import React from "react";
import { Video } from "../elements/elements";
import { MEDIA_PATH } from "../settings/settings";
import { Img } from "./../elements/elements";

const path = MEDIA_PATH;

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
