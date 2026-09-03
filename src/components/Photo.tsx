import { useState } from "react";
import { ImageOff } from "lucide-react";
import { imageFor } from "../data/images";

interface PhotoProps {
  imageKey: string;
  className?: string;
  showCredit?: boolean;
}

export function Photo({ imageKey, className = "", showCredit = false }: PhotoProps) {
  const [failed, setFailed] = useState(false);
  const image = imageFor(imageKey);

  return (
    <figure className={`photo ${className}`}>
      {failed ? (
        <div className="photo-fallback"><ImageOff size={24} /><span>{image.alt}</span></div>
      ) : (
        <img src={image.src} alt={image.alt} onError={() => setFailed(true)} />
      )}
      {showCredit && (
        <figcaption>
          <a href={image.creditUrl} target="_blank" rel="noreferrer">图片：{image.credit}</a>
        </figcaption>
      )}
    </figure>
  );
}
