
import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import fetchImages from "./services/pixabayApi"
import Button from './Button/Button';
import Loader from "./Loader/Loader"
import Modal from "./Modal/Modal"
import { Container,Notification } from './App.styled';


class App extends Component {
  state ={ 
    searchInfo: "",
  images:[],
  page:1,
  status:"idle",
  largeImage:"",
  

    };

componentDidUpdate(prevProps, prevState) {
  if (
    prevState.searchInfo !== this.state.searchInfo ||
  prevState.page !== this.state.page) 
  {
    //this.setState({status:"pending"})
    this.fetchInfo();

  }}

  handleFormSubmit = name => {
    this.setState({ searchInfo:name,page:1,images:[] });
  };

  fetchInfo =()=>{
    const {searchInfo,page}= this.state;
     this.setState({status:"pending"})

  

  fetchImages(searchInfo, page).then(images => {
    if (images.totalHits !== 0) {
      return this.setState(prevState => ({
        images: [...prevState.images, ...images.hits],
        status: 'resolved',
      }));
    }
    return this.setState({ status: 'rejected' });
  });
};
  
  onLoadMore= ()=>{
    this.setState(prevState=>({page:prevState.page+1,}));
  

  window.scrollTo({
    top:document.documentElement.scrollHeight,
    behavior:"smooth",
  });};

  onCloseModal= ()=>{
    this.setState({largeImage:""})

  }
  onImageOpen =largeImage=>{
    this.setState({largeImage: largeImage})
  }
  render(){
    const { images, status,page,largeImage } = this.state;
   
    return (
      <Container>
        <Searchbar  onSubmit={this.handleFormSubmit} />
        {status==="idle" && <Notification>Enter image to search</Notification>}
        {status==="pending" && <Loader/>}

        {status === 'pending' && page > 1 && (
        <>
         <ImageGallery images={images} onModalShow={this.onImageOpen} />
         <Loader/>
        </>)}
        
         {status==="resolved" &&(
           <>
           <ImageGallery images={images}  onModalShow={this.onImageOpen}/>
           <Button onLoadMore={this.onLoadMore}/>
           </>
         )}

{status==="rejected" && 
<Notification>Sorry, there are no images matching your search query. Please try again.</Notification>}

  {largeImage && <Modal image={largeImage} onClose={this.onCloseModal}></Modal>}
      
       
      </Container>
    );
  }

 
}

export default App;

