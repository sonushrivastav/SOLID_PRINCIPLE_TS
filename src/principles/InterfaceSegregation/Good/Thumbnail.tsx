import React from 'react';


interface IThumbnailProps {
    imageUrl: string;
  }

  
  const Thumbnail = (props:IThumbnailProps) => {
    const {imageUrl} = props;

    return (
      <img className="p-8 rounded-t-lg h-48"
      src={imageUrl}
      alt="product image"
      />
    )
  }
  
  export default Thumbnail