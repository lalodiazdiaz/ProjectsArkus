import React, { useState } from "react";
import ImageList from './components/ImageList'
import SearchBar from "./components/SearchBar";
import searchImage from "./api";

function App() {

const [images, setImages] = useState([]); 

const handlerSubmit = async(term) => {
    const result =await searchImage(term);
    setImages(result)
  };

  return (
    <div>
      <SearchBar onSubmit={handlerSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
