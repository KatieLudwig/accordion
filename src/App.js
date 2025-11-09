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
import TabTest from './components/custom-tabs/tab-test';
import ModalTest from './components/custom-modal-popup/modal-test';
import GithubProfileFinder from './components/github-profile-finder';
import SearchAutocomplete from './components/search-autocomplete-with-api';
import TicTacToe from './components/tic-tac-toe';
import FeatureFlagGlobalState from './components/feature-flag/context';
import FeatureFlags from './components/feature-flag';
import UseFetchHookTest from './components/use-fetch/test';
import UseOnclickOutsideTest from './components/use-outside-click/test';
import UseWindowResizeTest from './components/use-window-resize/test';
import ScrollToTopAndBottom from './components/scroll-to-top-and-bottom';

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

      {/* Load more products component */}
      {/* <LoadMoreData/> */}

      {/* Tree View Component */}
      {/* <TreeView menus={menus} /> */}

      {/* QR Code generator */}
      {/* <QRCodeGenerator /> */}

      {/* Light Dark Mode  */}
      {/* <LightDarkMode /> */}

      {/* Scroll inicatior component */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} /> */}
      
      {/* Tabs Component */}
      {/* <TabTest /> */}

      {/* Modal Popup  */}
      {/* <ModalTest /> */}

      {/* Github Profile Finder */}
      {/* <GithubProfileFinder /> */}

      {/* search autocomplete */}
      {/* <SearchAutocomplete /> */}

      {/* tic tac toe */}
      {/* <TicTacToe /> */}

      {/* Feature Flag Implementation */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      {/* useFetch - Custom Hook Test */}
      {/* <UseFetchHookTest/> */}

      {/* Use OnClick Outside Hook Test */}
      {/* <UseOnclickOutsideTest/> */}
      
      {/* Use window resize hook test */}
      {/* <UseWindowResizeTest/> */}

      {/* Scroll to Top and Bottom*/}
      <ScrollToTopAndBottom/>
    </div>
  );
}

export default App;
