import archiveData from "./archiveData.js";
import Archive from "./Archive.js";

function Body() {
  return (
    <div className="bod">
      <div id="arcColumn">
        <h1 className="bodColumns">Archives</h1>
        <ul className="boards">
          {archiveData.map((board) => (
            <Archive boardObj={board} />
          ))}
        </ul>
      </div>
      <div id="boardColumn">
        <h1 className="bodColumns">Boards</h1>
        <ul className="boards">
          <Boards
            name="Internal"
            short="desu"
            link="https://desuarchive.org/desu/"
          />
          <Boards
            name="Meta"
            short="meta"
            link="https://desuarchive.org/meta/"
          />
        </ul>
      </div>
      <div id="artColumn">
        <h1 className="bodColumns">Articles</h1>
        <ul className="boards">
          <a
            href="https://desuarchive.org/_/articles/donate/"
            className="artLink"
          >
            Donate
          </a>
          <a href="https://desuarchive.org/_/articles/faq/" className="artLink">
            Frequently Asked Questions
          </a>
          <a href="http://status.desuarchive.org/" className="artLink">
            Status
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Body;

function Boards(props) {
  return (
    <div className="board">
      <a href={props.link} className="boardLink">
        <h1 className="blink2">/{props.short}/ ‌‌</h1>
        <h2 className="blink"> {props.name}</h2>
      </a>
    </div>
  );
}
