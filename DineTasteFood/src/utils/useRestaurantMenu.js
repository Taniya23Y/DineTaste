import { useState, useEffect } from "react";
import { Menu_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(Menu_API + resId);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setResInfo(json);
      } catch (err) {
        console.error("Failed to fetch data:", err);
        setError(err.message || "Failed to fetch data");
        setResInfo(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [resId]);

  return { resInfo, loading, error };
};

export default useRestaurantMenu;
