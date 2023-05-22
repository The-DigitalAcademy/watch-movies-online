import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Popular() {
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

      <br> </br>

      <p>
        Use our filters to find the best content to stream tonight. Either
        you’re a fan of horror movies or romantic comedies or you simply want to
        watch some Netflix 4K content or you’re searching for a kids movie or
        series to enjoy with your children, our filters let you browse and
        easily find a specific movie or TV series to watch it legally online.
      </p>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Popular;
