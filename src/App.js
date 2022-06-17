import './App.css';
import ImageGallery from './ImageGallery';
import { useRef, useState } from 'react';

function App() {
const [fetchData, setFetchData] = useState([]);
const ref = useRef();

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(ref.current.value);

  //API URL
  const endpointURL = `https://pixabay.com/api/?key=28034100-f403ac92e14077e3bb5a753ec&q=${ref.current.value}&image_type=photo&pretty=true`;
  //APIを叩く（データフェッチング）
  fetch(endpointURL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.hits);
      setFetchData(data.hits);
    });
};

  return (
    <div className="container">
      <h1>My Pixabay</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="画像を探す" ref={ref} />
      </form>
      <ImageGallery fetchData={fetchData} />
    </div>
  );
}

export default App;

// 動画6:43から再開