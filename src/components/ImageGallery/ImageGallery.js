
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

import { List } from './ImageGallery.styled';




export const  ImageGallery = ({images}) => {
        return (
        <>
        <List>
        <ImageGalleryItem images={images} />
        </List>
        </>      
    )}
