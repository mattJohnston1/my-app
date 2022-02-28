import { useState } from "react";
import Image from "./components/Image/Image";
// import ImageError from "./components/ImageError/ImageError";
import NewImageButton from "./components/NewImageButton/NewImageButton";
import "./main.css";

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState('')
  // const [error, setError] = useState('')
  
  return (
    <main className="main">
<<<<<<< HEAD
      <Image isLoading={isLoading} setIsLoading={setIsLoading} image={image} setImage={setImage}/>
      <NewImageButton setIsLoading={setIsLoading} setImage={setImage}/>
      {/* {error.length > 0 && <ImageError error={error} setError={setError}/>} */}
=======
      <Image isLoading={isLoading} setIsLoading={setIsLoading} image={image} setImage={setImage} setError={setError}/>
      <NewImageButton setIsLoading={setIsLoading} setImage={setImage} setError={setError}/>
      {error.length > 0 && <ImageError error={error} setError={setError}/>}
>>>>>>> b22957b2ca9fcf19410a290ec1adce33485bb48d
    </main>
  );
}

export default App;
