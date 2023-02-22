import { RElement } from 'typings/react';

const getIcon = (path: string) => require(`../assets/icons/${path}.svg`);

const PICTURE = {
  /* Setting */
  checkmark: getIcon('setting/checkmark'),
};

export type PictureName = keyof typeof PICTURE;

interface Props {
  src?: keyof typeof PICTURE;
  alt?: string;
  size?: number;
  width?: number;
  height?: number;

  className?: string;
}

export const Picture = ({
  className,
  src,
  height,
  size,
  width,
  alt = '',
}: RElement<Props>) => {
  if (!src) {
    return null;
  }

  const img = PICTURE[src];
  const imgHeight = height ?? size;
  const imgWidth = width ?? size;

  return (
    <img
      alt={alt}
      className={className}
      style={{ width: imgWidth, height: imgHeight }}
      src={img}
    />
  );
};
