import React from "react";
import Image from "next/image";
function StoryCard({ name, src, profile }) {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20">
      <Image
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
        src={profile}
        width={40}
        height={40}
        layout="fixed"
        objectFit="cover"
      />
      <Image
        className="object-cover  filter brightness-75 lg:rounded-3xl rounded-full"
        src={src}
        width={40}
        height={40}
        objectFit="fill"
      />
    </div>
  );
}

export default StoryCard;
