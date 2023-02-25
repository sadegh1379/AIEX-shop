import data from "./data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/">AIEX</a>
      </header>
      <main>
        <h1>Featured products</h1>
        <div>
          {data.products.map((product, i) => (
            <div key={i}>
              <img src={product.image} alt={product.name}/>
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
