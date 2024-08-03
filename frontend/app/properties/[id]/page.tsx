import Image from "next/image";

import ReservationSideBar from "@/app/components/properties/ReservationSideBar";
import apiService from "@/app/services/apiService";

const PropertyDetailPage = async ({ params }: { params: { id: string } }) => {
    try {
        const url = `/api/properties/${params.id}`;
        const property = await apiService.get(url);

        if (!property) {
            return (
                <main className="max-w-[1500px] mx-auto px-6 pb-6">
                    <p>Property not found.</p>
                </main>
            );
        }

        return (
            <main className="max-w-[1500px] mx-auto px-6 pb-6">
                <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                    <Image
                        fill
                        src={property.image_url}
                        alt="Beach House"
                        className="object-cover w-full h-full"
                    />
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="py-6 pr-6 col-span-3">
                        <h1 className="mb-4 text-4xl">{property.title}</h1>

                        <span className="mb-6 block text-lg text-gray-600">
                            {property.guests} guests - {property.bedrooms}{" "}
                            bedrooms - {property.bathrooms} bathroom
                        </span>

                        <hr />

                        <div className="py-6 flex items-center space-x-4">
                            <Image
                                src={property.landlord.avatar_url}
                                alt="The user name"
                                width={50}
                                height={50}
                                className="rounded-full"
                            />
                            <p>
                                <strong>{property.landlord.name}</strong> is
                                your host
                            </p>
                        </div>

                        <hr />

                        <p className="mt-6 text-lg">{property.description}</p>
                    </div>

                    <ReservationSideBar
                        property={property}
                    ></ReservationSideBar>
                </div>
            </main>
        );
    } catch (error) {
        console.error("Error fetching property details:", error);
        return (
            <main className="max-w-[1500px] mx-auto px-6 pb-6 pt-6">
                <p>Failed to load property details. Please try again later.</p>
            </main>
        );
    }
};

export default PropertyDetailPage;
