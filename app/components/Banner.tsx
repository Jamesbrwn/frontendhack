import React from "react";
// import Image from "next/image";
import { Heading, Text } from "@radix-ui/themes";

const Banner = () => {
  return (
    <>
      {/* <Image
        src="/assets/RAG-banner.png"
        width="300"
        height="300"
        alt="Picture of the author"
      /> */}
      <Heading
        size="7"
        // className="bg-gradient-to-r via-gray-600 to-blue-800 bg-clip-text text-transparent"
      >
        Battlefield Intelligence with RAG
      </Heading>
      <Text className="font-semibold">
        Upload and analyze battlefield documents, video, and 3D scans
      </Text>
    </>
  );
};

export default Banner;
