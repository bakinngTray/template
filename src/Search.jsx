import MainHeader from './header/MainHeader';
import Footer from './footer/Footer';
import SearchResult from './search_result/SearchResult'


/**
 * Страница с поиском треков
 * @returns HTMLElement
 */
function Search() {
  return (
    <>
      <div className="SearchResult">
        <MainHeader/>
        <SearchResult/>
        <Footer/>
      </div>
    </>
  );
}

export default Search;
