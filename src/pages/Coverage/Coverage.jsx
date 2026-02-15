import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap
} from "react-leaflet";
import warehouses from "../../../public/warehouses.json";


const FlyToLocation = ({ position }) => {
  const map = useMap();

  if (position) {
    map.flyTo(position, 10, { duration: 2 });
  }

  return null;
};

const Coverage = () => {
  const [search, setSearch] = useState("");
  const [selectedPosition, setSelectedPosition] = useState(null);

  // 🔍 Filter Logic
  const filteredWarehouses = warehouses.filter((warehouse) =>
    warehouse.district.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();

    const found = warehouses.find(
      (w) => w.district.toLowerCase() === search.toLowerCase()
    );

    if (found) {
      setSelectedPosition([found.latitude, found.longitude]);
    }
  };

  return (
    <div className="bg-base-100 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold">
            We are available in{" "}
            <span className="text-primary">64 districts</span>
          </h1>
        </div>

        {/* Search Box */}
        <form
          onSubmit={handleSearch}
          className="flex justify-center mb-10 gap-3"
        >
          <input
            type="text"
            placeholder="Search district..."
            className="input input-bordered w-full max-w-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-primary">
            Search
          </button>
        </form>

        {/* Map */}
        <div className="h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
          <MapContainer
            center={[23.6850, 90.3563]}
            zoom={7}
            scrollWheelZoom={true}
            className="h-full w-full"
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <FlyToLocation position={selectedPosition} />

            {filteredWarehouses.map((warehouse, index) => (
              <Marker
                key={index}
                position={[warehouse.latitude, warehouse.longitude]}
              >
                <Popup>
                  <div>
                    <h3 className="font-bold text-lg">
                      {warehouse.district}
                    </h3>
                    <p>Status: {warehouse.status}</p>
                    <p className="mt-2 font-semibold">Covered Areas:</p>
                    <ul className="list-disc ml-4 text-sm">
                      {warehouse.covered_area.map((area, i) => (
                        <li key={i}>{area}</li>
                      ))}
                    </ul>
                  </div>
                </Popup>
              </Marker>
            ))}

          </MapContainer>
        </div>

      </div>
    </div>
  );
};

export default Coverage;
