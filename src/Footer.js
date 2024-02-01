function Footer() {
  return (
    <div className="foot">
      <footer className="footer">
        <a href="https://github.com/FoolCode/FoolFuuka">
          FoolFuuka Imageboard 2.2.0 ‌
        </a>
        ‌‌‌- ‌<a href="https://github.com/eksopl/asagi">Asagi Fetcher</a>
        <div id="biblio">
          A ‌
          <a href="https://wiki.bibanon.org/Main_Page" id="bibnoma">
            Bibliotheca Anonoma
          </a>
          ‌ project
        </div>
        <div id="faqdonate">
          <a href="https://desuarchive.org/_/articles/faq/">
            Frequently Asked Questions
          </a>{" "}
          ‌‌‌ ‌- ‌
          <a href="https://desuarchive.org/_/articles/donate/">Donate</a>
        </div>
        <select name="lang" id="lang" className="changers">
          <option value="" disabled selected hidden>
            Change Language
          </option>
          <option value="eng">English</option>
          <option value="fre">French</option>
          <option value="ita">Italian</option>
          <option value="por">Portuguese</option>
        </select>
        <select name="theme" id="theme" className="changers">
          <option value="" disabled selected hidden>
            Change Theme
          </option>
          <option value="yotsuba1">Yotsubatwo - Yotsuba</option>
          <option value="yotsuba2">Yotsubatwo - Yotsuba B</option>
          <option value="ffm">FoolFuuka Mobile - Default</option>
          <option value="ffm12">FoolFuuka Mobile - Midnight</option>
          <option value="ffmXmas">FoolFuuka Mobile - Christmas</option>
          <option value="ffmV">FoolFuuka Mobile - Valentine's Day</option>
          <option value="ffmSpooky">FoolFuuka - Halloween</option>
          <option value="ff">FoolFuuka - Default</option>
          <option value="ff12">FoolFuuka - Midnight</option>
          <option value="ffXmas">FoolFuuka - Christmas</option>
          <option value="ffV">FoolFuuka - Valentine's Day</option>
          <option value="ffSpooky">FoolFuuka - Halloween</option>
          <option value="fuuka">Fuuka</option>
        </select>
      </footer>
    </div>
  );
}

export default Footer;
