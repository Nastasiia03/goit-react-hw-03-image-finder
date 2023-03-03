import { Component } from 'react';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { getImages } from 'services/getImages';
import { List } from './ImageGallery.styled';

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
            this.setState({ loading: true })
            
            getImages(this.props.value.trim(), this.state.page)
                .then((response) => response.json())
                .then((images) => {
                    console.log(images)
                    // if (images.status !== 200) {
                    //     return Promise.reject(images.message)
                    // }
                    this.setState({images: images.hits})
                })
        }
    }

    render() {
        const { images } = this.state

        return <List>
            <ImageGalleryItem images={images} />
        </List>
    }
}