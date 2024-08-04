"use client";

import { useEffect, useState } from "react";

import apiService from "@/app/services/apiService";
import PropertyListItem from "./PropertyListItem";

export type PropertyType = {
    id: string;
    title: string;
    price_per_night: number;
    image_url: string;
};

interface PropertyListProps {
    landlord_id?: string | null;
}

const PropertyList: React.FC<PropertyListProps> = ({ landlord_id }) => {
    const [properties, setProperties] = useState<PropertyType[]>([]);

    const getProperties = async function () {
        let url = "/api/properties/";
        if (landlord_id) {
            url += `?landlord_id=${landlord_id}`;
        }
        const tmpProperties = await apiService.get(url);

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
};

export default PropertyList;
