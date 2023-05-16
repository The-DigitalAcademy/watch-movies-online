import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://c4.wallpaperflare.com/wallpaper/189/878/453/scarlett-johansson-infinity-vision-hulk-wallpaper-preview.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Marvel Avengers</h3>
            <p>Avengers: Infinity War, Black Panther</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://c4.wallpaperflare.com/wallpaper/848/459/694/movie-spider-man-into-the-spider-verse-marvel-comics-miles-morales-spider-man-hd-wallpaper-preview.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Spider-Man</h3>
            <p>Into The Spider-Verse, Marvel Comics, Miles Morales</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default Slider;