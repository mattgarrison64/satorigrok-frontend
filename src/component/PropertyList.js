import React from "react";

const PropertyList = ({ listings }) => {
  if (!listings.length) return <p>No properties found.</p>;

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
      {listings.map((property) => (
        <div key={property.property_id} className="border p-4 rounded bg-white shadow-md">
          <div className="relative w-full h-48 overflow-hidden rounded-t">
            <img
              src={property.media?.[0]?.media_url || "placeholder.jpg"}
              alt={property.property_id}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium text-[#BA0C2F]">{property.property_subtype}</h3>
            <p className="text-gray-600">{property.city}</p>
            <p className="text-gray-800 font-semibold">${parseFloat(property.list_price).toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;