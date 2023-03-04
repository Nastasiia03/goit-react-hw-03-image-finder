import { Component } from 'react'
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Layout } from './Layout.styled';
import { Searchbar } from "./Searchbar/Searchbar";

export class App extends Component {
  state = {
    images: [],
    textSearch: '',
    page: 1,
  }
  
handleSubmit = (textSearch, page) => {
		this.setState({ textSearch, page })
  }
  
  render() {
    return (
      <>
        <Searchbar onSearch={this.handleSubmit} />
        <Layout>
        <ImageGallery value={this.state.textSearch} />
        </Layout>
      </>
    )
  };
};
