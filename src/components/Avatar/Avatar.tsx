import Image from 'next/image';
import React from 'react';

interface AvatarProps {
  image: string;
}

function Avatar({ image }: AvatarProps) {
  return (
    <Image
      className='mx-5 size-7 rounded-full border border-black'
      width={5}
      height={5}
      alt='finbot'
      src={image}
    />
  );
}

export default Avatar;
