import './NewImageButton.css';

function NewImageButton({setIsLoading, setImage}) {
    const handleClick = () => {
        setIsLoading(true)
        fetch('http://localhost:5000')
          .then((response) => {
            console.log(response.status)
            if (response.status == 200) {
              return response.json()
            } 
          })
          .then((data) => {
            setImage(data)
            setIsLoading(false)
          })
    }
    return (
    <button onClick={handleClick}>Refresh Image</button>
    )
}

export default NewImageButton;