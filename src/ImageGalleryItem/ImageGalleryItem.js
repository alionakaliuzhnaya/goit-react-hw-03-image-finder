import React from 'react';
import PropTypes from "prop-types";
import { GalleryItem, ImageGalleryItemImage,I } from './ImageGalleryItem.styled';

const ImageGalleryItem =({smallImage,largeImage,tags,onModalShow})=>{
    return (  <GalleryItem onClick={()=>onModalShow(largeImage)}>
    <ImageGalleryItemImage src={smallImage} alt={tags} />
  </GalleryItem>)
  
}

export default ImageGalleryItem

 ImageGalleryItem.propTypes={
   smallImage:PropTypes.string.isRequired,
   largeImage:PropTypes.string.isRequired,
   tags:PropTypes.string.isRequired,
   onModalShow:PropTypes.func.isRequired,


 }