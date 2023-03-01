import React from "react";
import { Block } from "vcc-ui";
import { Car } from "../hooks/useFetch";
import { CarItem } from "./CarItem";

type CarsProps = {
  startIndex: number;
  data: Car[];
};

export const Cars: React.FC<CarsProps> = ({ startIndex, data }) => (
  <div style={{ display: "flex" }}>
    {data?.map((car, index) => {
      return (
        <Block key={car.id}>
          {index >= startIndex && <CarItem {...car} />}
        </Block>
      );
    })}
  </div>
);
