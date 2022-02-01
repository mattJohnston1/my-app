import './ImageError.css'

function ImageError({error, setError}) {
    return (
        <div className='error'>{error}</div>
    )
}

export default ImageError;