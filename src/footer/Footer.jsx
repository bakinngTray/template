import './footer.css';


/**
 * генерирует нижний колонтитул
 * @returns HTMLElement
 */
export default function Footer() {
    return (
        <footer className="footer">
        <div className="footer__otherLinks">
            <div>
                <div className="footer__linksOther_title">COMPANY</div>
                <ul>
                    <li className="footer__li"><a href="/" className="footer__otherLink">About Last.fm</a></li>
                    <li className="footer__li"><a href="/" className="footer__otherLink">Contact Us</a></li>
                    <li className="footer__li"><a href="/" className="footer__otherLink">Jobs</a></li>
                </ul>
            </div>

            <div>
                <div className="footer__linksOther_title">HELP</div>
                <ul>
                    <li className="footer__li"><a href="/" className="footer__otherLink">Track My Music</a></li>
                    <li className="footer__li"><a href="/" className="footer__otherLink">Community Support</a></li>
                    <li className="footer__li"><a href="/" className="footer__otherLink">Community Guidelines</a></li>
                    <li className="footer__li"><a href="/" className="footer__otherLink">Help</a></li>
                </ul>
            </div>

            <div>
                <div className="footer__linksOther_title">GOODIES</div>
                <ul>
                    <li className="footer__li"><a href="/" className="footer__otherLink">Download Scrobbler</a></li>
                    <li className="footer__li"><a href="/" className="footer__otherLink">Developer API</a></li>
                    <li className="footer__li"><a href="/" className="footer__otherLink">Free Music Downloads</a></li>
                    <li className="footer__li"><a href="/" className="footer__otherLink">Merchandise</a></li>
                </ul>
            </div>

            <div>
                <div className="footer__linksOther_title">ACCOUNT</div>
                <ul>
                    <li className="footer__li"><a href="/" className="footer__otherLink">Sign Up</a></li>
                    <li className="footer__li"><a href="/" className="footer__otherLink">Log In</a></li>
                    <li className="footer__li"><a href="/" className="footer__otherLink">Subscribe</a></li>
                </ul>
            </div>

            <div>
                <div className="footer__linksOther_title">FOLLOW US</div>
                <ul>
                    <li className="footer__li"><a href="https://www.facebook.com/" className="footer__otherLink">Facebook</a></li>
                    <li className="footer__li"><a href="https://twitter.com/" className="footer__otherLink">Twitter</a></li>
                    <li className="footer__li"><a href="https://www.instagram.com/" className="footer__otherLink">Instagram</a></li>
                    <li className="footer__li"><a href="https://www.youtube.com/" className="footer__otherLink">YouTube</a></li>
                </ul>
            </div>
        </div>
        <hr className="footer__hr"></hr>

        <div className="footer__languages">
            English
            <a href="/" className="footer__linkLanguage">Deutsch</a>
            <a href="/" className="footer__linkLanguage">Español</a>
            <a href="/" className="footer__linkLanguage">Français</a>
            <a href="/" className="footer__linkLanguage">Italiano</a>
            <a href="/" className="footer__linkLanguage">日本語</a>
            <a href="/" className="footer__linkLanguage">Polski</a>
            <a href="/" className="footer__linkLanguage">Português</a>
            <a href="/" className="footer__linkLanguage">Русский</a>
            <a href="/" className="footer__linkLanguage">Svenska</a>      
            <a href="/" className="footer__linkLanguage">Türkçe</a>
            <a href="/" className="footer__linkLanguage">简体中文</a>
        </div>

        <div className="footer__timeZone">
            Time zone:
            <div className="footer__timeZone_now">Europe/Amsterdam</div>
        </div>
        <div className="footer__copyright">
            <a href="/" className="footer__linkCopiright"> CBS Interactive</a> © 2022 Last.fm Ltd. All rights reserved <a href="/" className="footer__linkCopiright">Terms of Use</a> <a href="/" className="footer__linkCopiright">Privacy Policy</a> <a href="/" className="footer__linkCopiright">Legal Policies</a> <a href="/" className="footer__linkCopiright">Cookies Policy</a> <a href="/" className="footer__linkCopiright">Manage Cookies</a> <a href="/" className="footer__linkCopiright">Jobs at ViacomCBS</a> <a href="/" className="footer__linkCopiright">Last.fm Music</a>
        </div>
    </footer>
    )
}