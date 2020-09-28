import React from 'react';
import "./imagelist.css";
import Image from "./Image";

const ImageList = ({images}) => {
    const preparedImageList = images.map(image => {
        return(
            <Image key={image.id} image={image}/>
        )
    });
    return (
        <div className="img-fluid z-depth-1 image-list-container">
            {/* {images.length} tane resim var.. */}
            {preparedImageList}
        </div>
    )
}
export default ImageList;