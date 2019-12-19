import { useState, useEffect } from "react";
import { WordPressAttachment } from "../types/wp-attachment";

type Props = {
  id: number,
  size: "small" | "medium" | "medium_large" | "full" | "hero"
  className?: string
}

const WordPressLazyImage = (props:Props) => {
  const [data, setData] = useState<WordPressAttachment|null>(null);

  useEffect(() => {
    setData(null);
    fetch(`https://kpg.rcdev.ahrengot.com/wp-json/wp/v2/media/${props.id}`)
      .then(res => res.json())
      .then(setData);
  }, [props.id]);

  if (data && data.media_details.sizes[props.size]) {
    return (
      <img
        src={data.media_details.sizes[props.size].source_url}
        alt={data.title.rendered}
        className={props.className}
      />
    );
  } else {
    return (
      <div className={props.className} />
    )
  }
}

export default WordPressLazyImage;