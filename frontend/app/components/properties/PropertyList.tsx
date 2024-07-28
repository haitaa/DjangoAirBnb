"use client";

import { useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItem";

export type PropertyType = {
    id: string;
    title: string;
    price_per_night: number;
    image_url: string;
};

export default function PropertyList() {
    const [properties, setProperties] = useState<PropertyType[]>([]);

    const getProperties = async function () {
        const url = "http://localhost:8000/api/properties/";

        await fetch(url, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((json) => {
                setProperties(json.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getProperties();
    }, []);

    return (
        <>
            {properties.map((property) => (
                <PropertyListItem key={property.id} property={property} />
            ))}
        </>
    );
}
