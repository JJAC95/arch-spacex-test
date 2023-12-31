import { useQuery } from "react-query";
import fetchData from "../helpers/fetchData";
const FetchAllDragonsData = () => {
  return useQuery("dragons", () =>
    fetchData("https://api.spacexdata.com/v3/dragons", {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    })
  );
};

export default FetchAllDragonsData;
