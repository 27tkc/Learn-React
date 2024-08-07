import { useState } from "react";
import { useGeolocation } from "./useGeolocation";

export default function App() {
  const {
    isLoading,
    position: { lat, lng },
    error,
    getPosition,
  } = useGeolocation();
  const [countClicks, setCountClicks] = useState(0);

  function handleClicks() {
    setCountClicks((count) => count++);
    getPosition();
  }

  return (
    <div>
      <button onClick={handleClicks} disabled={isLoading}>
        Get my position
      </button>

      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS position:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}

      <p>You requested position {countClicks} times</p>
    </div>
  );
}
