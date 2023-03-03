import { Component } from 'react'
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from "./Searchbar/Searchbar";

export class App extends Component {
  state = {
		textSearch: '',
  }
  
handleSubmit = (textSearch) => {
		this.setState({ textSearch })
  }
  
  render() {
    return (<div>
      <Searchbar onSearch={this.handleSubmit} />
      <ImageGallery value={this.state.textSearch}/>
    </div>
    )
  };
};
