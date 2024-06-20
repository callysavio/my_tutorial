// DataFetcher Component
function DataFetcher(props) {
  const Api = "https://api.adviceslip.com/advice";
  const fetchFunction = async () => {
    const response = await fetch(Api);
    const data = await response.json();
    const finalData = data.slip
    console.log(finalData)
    return finalData;

  };
  fetchFunction();
return props.render(finalData);
  
  // const data = { name: "Alice", age: "23", stipend: "23" }; // Simulated data fetching
}
export default DataFetcher;
