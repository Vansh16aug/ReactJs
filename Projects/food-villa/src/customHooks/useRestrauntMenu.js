import { useEffect } from "react";
import { API_URL } from "../constants";
const useRestrauntMenu = (id, setRestrauntInfo) => {
  useEffect(() => {
    getRestrauntInfo();
    // eslint-disable-next-line
  }, []);

  async function getRestrauntInfo() {
    try {
      const response = await fetch(API_URL + "/" + id);
      const data = await response.json();
      setRestrauntInfo(data);
    } catch (error) {
      console.error(error);
    }
  }
};
export default useRestrauntMenu;
