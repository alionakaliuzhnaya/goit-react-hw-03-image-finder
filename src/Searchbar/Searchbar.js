import React, { Component } from 'react';
import PropTypes from "prop-types";
import toast, { Toaster } from 'react-hot-toast';
import { FixedHeader, FormButton, Input, SearchForm,SearchAlt } from './Searchbar.styled';

 class Searchbar extends Component{
    state ={ searchInfo:""

    }

    handleNameChange =event=>{
        this.setState({searchInfo: event.currentTarget.value.toLowerCase()})
    }
 handleSubmit=event=>{
     event.preventDefault()

     if (this.state.searchInfo.trim()===""){
          toast.error("Sorry, there are no images matching your search query. Please try again.")
          return;
        }
     
    this.props.onSubmit(this.state.searchInfo);
    this.setState({ searchInfo: '' });
 }



    render(){

        return (
            
            <FixedHeader >
  <SearchForm  onSubmit={this.handleSubmit}
 >
    <FormButton type="submit">
     <SearchAlt/>
    </FormButton>

    <Input
      type="text"
      autoComplete="off"
      placeholder="Search images and photos"
      value={this.state.searchInfo}
      onChange={this.handleNameChange}
    />
  </SearchForm>
  <Toaster />
</FixedHeader>
        )
    }
}

export default Searchbar

Searchbar.propTypes={
  onSubmit:PropTypes.func.isRequired
}