import React from "react"
import styled from "styled-components"


const images = [
  { url: "https://unsplash.com/photos/m_HRfLhgABo", id: "1", name: "__item-1" },
  { url: "https://unsplash.com/photos/xrVDYZRGdw4", id: "2", name: "__item-2" },
  { url: "https://unsplash.com/photos/w7ZyuGYNpRQ", id: "3", name: "__item-3" },
  { url: "https://unsplash.com/photos/LJ9KY8pIH3E", id: "4", name: "__item-4" },
  { url: "https://unsplash.com/photos/LJ9KY8pIH3E", id: "5", name: "__item-5" },
  { url: "https://unsplash.com/photos/LJ9KY8pIH3E", id: "6", name: "__item-6" }
]
const Gallery = () => {
  return (
    <Container>
      <StyledGallery>
        {images.map(image => {
          return (
            <GalleryItem src={image.url} className={`gallery${image.name}`} />
          )
        })}
      </StyledGallery>
    </Container>
  )
}

export default Gallery

const Container = styled.div`
  width: 60%;
  margin: 2rem auto;
`
const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 5vw);
  grid-gap: 15px;
`

const GalleryItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  &__item-1 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
  }
  &__item-2 {
    gallery__item--2 {
        grid-column-start: 3;
        grid-column-end: 5;
        grid-row-start: 1;
        grid-row-end: 3;
  }
  &__item-3 {
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 6;
  }
  &__item-4 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 6;
  }
  &__item-5 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 6;
    grid-row-end: 9;
  }
  &__item-6 {
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 6;
    grid-row-end: 9;
  }
`
