"use client";

import { useEffect, useState } from "react";

import apiService from "@/app/services/apiService";
import PropertyListItem from "./PropertyListItem";
import { url } from "inspector";

export type PropertyType = {
    id: string;
    title: string;
    price_per_night: number;
    image_url: string;
};

export default function PropertyList() {
    const [properties, setProperties] = useState<PropertyType[]>([]);

    const getProperties = async function () {
        const tmpProperties = await apiService.get("/api/properties/");

        setProperties(tmpProperties.data);
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
