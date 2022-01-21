import React from 'react';
import PropTypes from "prop-types";
import ImageGalleryItem from '../ImageGalleryItem';
import {  GalleryList } from '../ImageGallery/ImageGallery.styled';

const  ImageGallery = ({ images,onModalShow })=> (
    
    
        <GalleryList>
          {images.map(({id,webformatURL,largeImageURL,tags}) => {
              return (
            <ImageGalleryItem
            key={id}
            smallImage={webformatURL}
            largeImage={largeImageURL}
            tags={tags}
            onModalShow={onModalShow}

             
            />
          )})}
        </GalleryList>
     
      );

   export default ImageGallery
  
   ImageGallery.propTypes={
     images:PropTypes.arrayOf(
       PropTypes.shape({
        id:PropTypes.number.isRequired,
        webformatURL:PropTypes.string.isRequired,
        largeImageURL:PropTypes.string.isRequired,
        tags:PropTypes.string.isRequired,
       

       })
     ),
     onModalShow:PropTypes.func.isRequired,
 
  }