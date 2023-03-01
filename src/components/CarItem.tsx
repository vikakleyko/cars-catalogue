import Image from "next/image";
import React from "react";
import { Block, Flex, Link, Text } from "vcc-ui";
import { Car } from "../hooks/useFetch";

export const CarItem: React.FC<Car> = ({
  id,
  modelName,
  bodyType,
  modelType,
  imageUrl,
}) => {
  return (
    <Flex extend={{ display: "flex", flexDirection: "column", margin: 12 }}>
      <Block>
        <Text variant="kelly">{bodyType.toUpperCase()}</Text>
        <Text variant="bates">
          {modelName}
          <Text extend={{ marginLeft: 8 }} subStyle="inline-link">
            {modelType}
          </Text>
        </Text>
      </Block>

      <Block style={{ width: 250, height: 200, position: "relative" }}>
        <Image
          src={imageUrl}
          alt={bodyType}
          layout="fill"
          objectFit="contain"
        />
      </Block>

      <Flex
        extend={{
          flexDirection: "row",
          justifyContent: "center",
          columnGap: 20,
        }}
      >
        <Link href={`/${id}/learn`} arrow="right">
          LEARN
        </Link>
        <Link href={`/${id}/shop`} arrow="right">
          SHOP
        </Link>
      </Flex>
    </Flex>
  );
};
