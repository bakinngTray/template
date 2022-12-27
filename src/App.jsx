import MainHeader from './header/MainHeader';
import Footer from './footer/Footer';
import MainContent from './main_content/MainContent';


/**
 * Главная страница
 * @returns HTMLElement
 */
function App() {
  return (
    <>
      <div className="app">
        <MainHeader/>
        <MainContent/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
