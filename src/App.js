function App() {
  return (
    <div className="app">
      <main>
        <input type="text" id="searchbox" placeholder="Search City..." />
        <div className="main-container">
          <div className="city-info text">Hyderabad, India</div>
          <div className="temp text">32°C</div>
          <div className="weather text">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
