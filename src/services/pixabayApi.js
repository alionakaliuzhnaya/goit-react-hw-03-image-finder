//const fetchImages=(searchInfo,page) => {
//  const KEY = "25335013-218fd676bdcdcac094ea1a702";
//
//  return fetch(`https://pixabay.com/api/?q=${searchInfo}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
//  ).then(response => 
//    response.json());
//    }
//
//  
//
//
//
//export default fetchImages;



  function fetchImage(searchInfo,page) {
    const KEY = "25335013-218fd676bdcdcac094ea1a702";
 
    return fetch(`https://pixabay.com/api/?q=${searchInfo}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`).then(response => {
      if (response.ok) {
        return response.json();
      }
  
      return Promise.reject(new Error(`Sorry, we couldn't find any matches`));
    });
  }
  

  
  export default fetchImage;