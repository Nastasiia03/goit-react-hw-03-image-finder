import { Item } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({images}) => {
    return images.map((image) => {
        return <Item key={image.id}><img src={image.webformatURL} alt="" width="400"/></Item>
    })
  

}