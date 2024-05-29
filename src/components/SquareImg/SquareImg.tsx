import { FC } from 'react';
import './square-img.scss';

interface Props {
  src: string;
  alt: string;
  size: number;
}

const SquareImg: FC<Props> = ({ src, alt, size }) => {
  return (
    <img
      style={{ width: `${size}px`, height: `${size}px` }}
      className='square-img'
      src={src}
      alt={alt}
    />
  );
};

export default SquareImg;
