import { Image, Item } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({images}) => {
    return images.map((image) => {
        return <Item key={image.id}><Image src={image.webformatURL} alt=""/></Item>
    })
  

}