import { Component } from 'react'
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Layout } from './Layout.styled';
import { Searchbar } from "./Searchbar/Searchbar";
import { Button } from 'components/Button/Button';
import { getImages } from 'services/getImages';
import { Loader } from './Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';


export class App extends Component {
  state = {
    images: [],
    page: 1,
    textSearch: '',
    loading: false,
    error: ''
  }
  
componentDidUpdate(prevProps, prevState) {
  if (prevState.textSearch !== this.state.textSearch) {
    this.getData();
  }
}

getData=()=>{
  const {page, textSearch} = this.state;
  this.setState({loading: true});
getImages(textSearch.trim(), page)
.then((response) => response.json())
.then((images) => {
 if (images.hits.length < 1) {
  toast.error("The gallery is empty 😒")
  return Promise.reject(new Error('Not found'))
}
this.setState(prevState=>({ images: [...prevState.images, ...images.hits], page: prevState.page+1 }))
})
.catch((error) => {
  console.log('error :>> ', error)
  this.setState({error})
})
.finally(() => {
this.setState({ loading: false}) 
 })
}

handleSubmit = (textSearch) => {
		this.setState({ 
      images: [],
      page: 1,
      textSearch: textSearch,
     })
  }
  
  render() {
    const {images, loading} = this.state;
    const showLoadMore = images.length > 0 && images.length >= 12;
    return (
      <>
        <Searchbar onSearch={this.handleSubmit} />
        {loading && <Loader/>}
        <Toaster position="top-right"/>
        <Layout>
        <ImageGallery images={images} />
        {showLoadMore &&
        <Button onLoad={this.getData} />}
        </Layout>
      </>
    )
  };
};
