import { useEffect, useState } from "react"

export type Car = {
    id: string,
    modelName: string,
    bodyType: string,
    modelType: string,
    imageUrl: string
}

export function useFetch() {
    const [data, setData] = useState<Car[]>([]);

    useEffect(() => {
        const fetchData = () => {
            fetch('api/cars.json')
            .then(response => {
              return response.json();
            }).then(data => {
              setData(data);
            }).catch((e: Error) => {
              console.log(e.message);
            });
        }
        fetchData();
    }, []);

    return {data}
}