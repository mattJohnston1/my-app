import LoadSpinner from "../Loader/LoadSpinner";
import { useEffect } from "react";
import './Image.css';

function Image({isLoading, setIsLoading, image, setImage, setError}) {

    useEffect(() => {
        fetch('http://localhost:5000')
          .then((response) => {
            console.log("aljhsgjashdgkahjksghjkdahjkgkhjsdjkhasgd")
            if (response.status == 200) {
              return response.json()
            } else {
              setError(`Error Code ${response.status}: Please Try Again.`)
            }
          })
          .then((data) => {
            setImage(data)
            setIsLoading(false)
          })
      }, []);
    return (
        <div className="image">
            {isLoading && <LoadSpinner />}
            {!isLoading && <img src={image} className="coffee-image"/>}
        </div>
    )
}


export default Image;