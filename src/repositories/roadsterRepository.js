import { useQuery } from "react-query";
import fetchData from "../helpers/fetchData";
const fetchElonsRoadster = () => {
  return useQuery("roadster", () =>
    fetchData("https://api.spacexdata.com/v3/roadster", {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    })
  );
};

export default fetchElonsRoadster;
