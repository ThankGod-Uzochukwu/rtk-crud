import './App.css';
import { useGetAllProductsQuery } from './store/productsApi';



function App() {

  const {data, isLoading, error, isError} = useGetAllProductsQuery();
  console.log("data", data)


  if (isLoading) return <h1>Loading...</h1>
  if (isError) return <p>{error}</p>
  return (
    <div className="App">
      <div>
        {data && 
          data.products.map((item) => {
          return (
          <li>
            {item.title} 
            <img src={item.images[4]} alt="" />
            <p>{item.price}</p>
            <p>{item.description}</p>
            
          </li>
          ) 
        })}
      </div>
    </div>
  );
}

export default App;
