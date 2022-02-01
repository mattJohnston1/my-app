import './NewImageButton.css';

function NewImageButton({setIsLoading, setImage, setError}) {
    const handleClick = () => {
        setIsLoading(true)
        fetch('http://localhost:8080')
          .then((response) => {
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
    }
    return (<button onClick={handleClick}>Refresh Image</button>)
}

export default NewImageButton;