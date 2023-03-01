import React, { useCallback, useState } from "react";
import { Block, IconButton, View } from "vcc-ui";
import { useFetch } from "../hooks/useFetch";
import { Cars } from "./Cars";

export const Catalogue: React.FC = () => {
  const { data } = useFetch();
  const [startIndex, setStartIndex] = useState(0);

  const handleForwardClick = useCallback(() => {
    setStartIndex(startIndex + 1);
  }, [startIndex]);

  const handleBackClick = useCallback(() => {
    setStartIndex(startIndex - 1);
  }, [startIndex]);

  const handleCircleClick = useCallback((index) => {
    setStartIndex(index);
  }, []);

  return (
    <Block style={{ maxWidth: 1100, overflow: "hidden" }}>
      {data && <Cars startIndex={startIndex} data={data} />}

      {/* desktop */}
      <View
        extend={{
          borderWidth: 0,
          untilM: {
            display: "none",
          },
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            columnGap: 10,
          }}
        >
          <IconButton
            iconName="navigation-chevronback"
            variant="outline"
            onClick={handleBackClick}
            disabled={startIndex === 0}
          />
          <IconButton
            iconName="navigation-chevronforward"
            variant="outline"
            onClick={handleForwardClick}
            disabled={data.length - 4 <= startIndex}
          />
        </div>
      </View>

      {/* mobile */}
      <View
        extend={{
          borderWidth: 0,
          fromM: {
            display: "none",
          },
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            columnGap: 10,
          }}
        >
          {data?.map((car, index) => {
            return (
              <Block
                key={car.id}
                extend={{
                  height: 8,
                  width: 8,
                  backgroundColor: index === startIndex ? "#000" : "#bbb",
                  borderRadius: "50%",
                  display: "inline-block",
                }}
                onClick={() => handleCircleClick(index)}
              />
            );
          })}
        </div>
      </View>
    </Block>
  );
};
