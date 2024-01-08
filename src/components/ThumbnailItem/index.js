import {Component} from 'react'
import './index.css'

class ThumbnailItem extends Component {
  render() {
    const {thumbnails, viewImage, isActive} = this.props
    const {id, thumbnailUrl} = thumbnails
    const changeImage = () => {
      viewImage(id)
    }

    const isActivedBtn = isActive ? 'add-btn' : ''

    return (
      <li key={id}>
        <button type="button" className={`${isActivedBtn}`}>
          <img
            src={thumbnailUrl}
            alt={thumbnails.thumbnailAltText}
            onClick={changeImage}
          />
        </button>
      </li>
    )
  }
}

export default ThumbnailItem
