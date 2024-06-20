import React from "react";
import { useEffect, useState } from "react";

const FetchDataOnMount = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Code to run when the component mounts
    //   0ac78c89321c4eb88f4d866b55778e21
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2024-04-28&sortBy=publishedAt&apiKey=0ac78c89321c4eb88f4d866b55778e21"
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default FetchDataOnMount;
