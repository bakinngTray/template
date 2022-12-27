import './header.css';


/**
 * генерирует верхний колонтитул
 * @returns HTMLElement
 */
export default function MainHeader() {
    return (
        <header className="header">
        <div className="header__MainDiv">
            <div className="header__group">
                <img src="img/player_default_album.png"></img>
                <img src="img/player_controls.png"></img>
            </div>

            <div>
                <a href=""><img src="img/logo_static.png"></img></a>
            </div>

            <div className="header__group">
                <nav className="header__navigation">
                    <a href="./search_result" className="header__link header__ItemView"><img src="img/search.png"></img></a>
                    <a href="" className="header__link header__ItemView">Live</a>
                    <a href="" className="header__link header__ItemView">Music</a>
                    <a href="" className="header__link header__ItemView">Charts</a>
                    <a href="" className="header__link header__ItemView">Events</a>
                    <a href="" className="header__link header__ItemView">Features</a>
                    <div className="header__ItemView header__link">•</div>
                    <a className="header__ItemView header__link" href="/">Log In</a>
                    <a className="header__link header__SignUp" href="/">Sign Up</a>
                </nav>
            </div>
        </div>
  
    </header>
    );
}