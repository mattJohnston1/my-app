import './NewImageButton.css';

function NewImageButton({setIsLoading, setImage}) {
    const handleClick = () => {
        setIsLoading(true)
        fetch('http://localhost:8080')
          .then((response) => {
            console.log(response.status)
            if (response.status == 200) {
              return response.json()
<<<<<<< HEAD
            } 
=======
            } else {
              setError(`Error Code ${response.status}: Please Try Again.`)
            }
>>>>>>> b22957b2ca9fcf19410a290ec1adce33485bb48d
          })
          .then((data) => {
            setImage(data)
            setIsLoading(false)
          })
    }
    return (<button onClick={handleClick}>Refresh Image</button>)
}

export default NewImageButton;