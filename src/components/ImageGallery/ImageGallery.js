import { Component } from 'react';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { getImages } from 'services/getImages';
import { List } from './ImageGallery.styled';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';


export class ImageGallery extends Component {
    state = {
        images: [],
        error: "",
        page: 1,
        loading: false,
    }

    
    componentDidUpdate(prevProps, prevState) {
        if (
			prevProps.value !== this.props.value ||
			prevState.page !== this.state.page
        ) {
            this.setState({ loading: true})
            
            getImages(this.props.value.trim(), this.state.page)
                .then((response) => response.json())
                .then((images) => {
                    console.log(images)
                    // if (images.status !== 200) {
                    //     return Promise.reject(images.message)
                    // }
                    this.setState({ images: [...this.state.images, ...images.hits] })
                    // this.props.images(this.state.images)
                })
                .finally(() => {
                   this.setState({ loading: false}) 
                })
            
        }
        
    }

    handleLoad = () => {
		this.setState((prev) => ({ page: prev.page + 1 }))
	}

    render() {
        const { images, loading } = this.state;

        return (
        <>
        {loading && <Loader/>}
        {images !== [] && <>
        <List>
        <ImageGalleryItem images={images} />
        </List>
        <Button onLoad={this.handleLoad} />
        </>}
        </>
    )}
}