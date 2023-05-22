import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SpecialPages() {
  return (
    <div>
      <h1>Welcome to JustWatch South Africa</h1>

      <p>
        We are glad you're here! On JustWatch you can easily find out where to
        watch your favorite movies & TV series in South-Africa. JustWatch is
        easy and effective: choose your favorite streaming providers in the
        WatchBar below and see what’s on Netflix, Amazon Prime Video and 6 other
        legal streaming providers. We organized this list of movies and tv
        series by popularity to help you stream the best online in South-Africa.
        Right now, amongst the best movies you can watch online, you’ll find
        Solo: A Star Wars Story, the marvel movie Avengers: Infinity War and the
        horror movie Purge: Anarchy. Regarding series, the most popular series
        available on legal streaming right now are The Big Bang Theory, Friends,
        and Grey’s Anatomy.
      </p>
      <div class="filter-bar-content-type__item active"><a href="/za"> All </a></div>
      <div class="filter-bar-content-type__item"><a href=".0"> Movies </a></div>
      <div class="filter-bar-content-type__item"><a href="/za/tv-series"> TV series </a></div>
     
       
    <Row>
        <Col>
         <Card style={{ width: '10rem' }}>
      <Card.Img variant="top" src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg" />
      <Card.Body>
      </Card.Body>
    </Card></Col>
    
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
       
    </div>
  );
}

export default SpecialPages;
