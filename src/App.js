import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
import QRCodeGenerator from './components/qr-code-generator';
import LightDarkMode from './components/light-dark-mode';
import ScrollIndicator from './components/scroll-indicator';

function App() {
  return (
    <div className="App">
      {/* Accordion Component */}
      {/* <Accordian /> */}
      
      {/* Random color component */}
      {/* <RandomColor/> */}

      {/*Star Rating component */}
      {/* <StarRating noOfStars={10}/> */}

      {/*Image Slider component */}
      {/* <ImageSlider
        url={'https://picsum.photos/v2/list'}
        page={'1'}
        limit={'10'}
      /> */}

      {/* Load more products component
      <LoadMoreData/> */}

      {/* Tree View Component
      <TreeView menus={menus} /> */}

      {/* QR Code generator
      <QRCodeGenerator /> */}

      {/*Light Dark Mode 
      <LightDarkMode /> */}

      {/* Scroll inicatior component */}
      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/>
    </div>
  );
}

export default App;
