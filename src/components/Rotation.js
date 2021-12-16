import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'

const styles = {
    color: 'purple',
    fontSize: 10,
    border: "2px solid purple",
    height: 5
  };

function Rotation () {
    return(
    <Carousel>
    <Carousel.Item>
<img
  className="d-block w-100"
  src="./images/every last lie.jpg"
  alt="First slide"
/>
<Carousel.Caption>
  <h3>First slide label</h3>
  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
  className="d-block w-100"
  src="./images/1984.jpg"
  alt="Second slide"
/>
<Carousel.Caption>
  <h3>Second slide label</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
  className="d-block w-100"
  src="holder.js/800x400?text=Third slide&bg=20232a"
  alt="Third slide"
/>

<Carousel.Caption>
  <h3>Third slide label</h3>
  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
</Carousel.Caption>
</Carousel.Item>
    </Carousel>
    )
}

export default Rotation;