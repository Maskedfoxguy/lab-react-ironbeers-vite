import beersImage from "../assets/beers.png";
import randomBeerImage from "../assets/random-beer.png";
import newBeerImage from "../assets/new-beer.png";

import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="category">
        <img src={beersImage} alt="beers" />
        <h2>
          <Link to="/beers">All Beers</Link>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit
          amet diam nec arcu pretium egestas ac pellentesque nibh. Nam in urna
          in sapien iaculis molestie sit amet ut risus. Etiam nec quam massa.
          Nam commodo in sapien eu dapibus. Suspendisse facilisis diam in
          accumsan eleifend. Sed non dignissim eros.
        </p>
      </div>
      <div className="category">
        <img src={randomBeerImage} />
        <h2>
          <Link to="/random-beer">Random Beer</Link>
        </h2>
        <p>
        This beer is a refreshing pale ale with a citrusy aroma and a hint of caramel sweetness. 
        Its balanced bitterness and crisp finish make it perfect for enjoying on a warm summer day.
         With a moderate ABV, it's an excellent choice for both casual drinkers and craft beer enthusiasts alike.
        </p>
      </div>
      <div className="category">
        <img src={newBeerImage} />
        <h2>
          <Link to="/new-beer">New Beer</Link>
        </h2>
        <p>
          
        Introducing our latest creation, the "Golden Horizon" IPA, a beacon of innovation in craft brewing. Bursting with tropical fruit flavors like juicy mango and tangy pineapple, 
        this IPA is a tropical paradise in a glass. Its vibrant golden hue mirrors the warmth of a sunset, inviting you to embark on a flavor journey with every sip. Crafted with care using a blend of specialty hops, 
        it delivers a bold yet smooth taste experience that will captivate your senses. 
        Embrace the adventure and discover the golden horizon of flavor with every refreshing sip of this exceptional IPA.
        </p>
      </div>
    </>
  );
}

export default HomePage;