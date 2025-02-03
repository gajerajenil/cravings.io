import { useEffect,useState } from "react";
import { MENU_API } from "./contants";

const useRestaurantMenu = (resId) =>{

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
      }, []);
      const fetchMenu = async () => {
        try {
          const data = await fetch(
            MENU_API + resId
          );
          const json = await data.json();
          console.log(json);
          setResInfo(json.data);
        } catch (error) {
          console.error("Failed to fetch menu:", error);
        }
      }
      return resInfo;
    }

export default useRestaurantMenu;