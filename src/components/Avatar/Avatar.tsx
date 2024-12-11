import Image from 'next/image';
import React from 'react';

interface AvatarProps {
  image: string;
}

function Avatar({ image }: AvatarProps) {
  return (
    <Image
      className="m-5 size-10 rounded-full"
      width={5}
      height={5}
      alt="finbot"
      src={image}
    />
  );
}

export default Avatar;
