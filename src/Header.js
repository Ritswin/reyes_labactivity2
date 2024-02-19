import archiveData from "./archiveData.js";

function Header() {
  return (
    <div className="header">
      <div className="topHeader">
        <div className="desuDropdown">
          <button onClick={dropDownTitle} className="desuDropbtn">
            Desuarchive
            <i class="desuDropArrow"></i>
          </button>
          <div id="desuLinks" className="desuDropContent">
            <ul className="archives">
              {archiveData.map((board) => (
                <Arch boardObj={board} />
              ))}
            </ul>
          </div>
        </div>

        <a
          href="https://desuarchive.org/_/articles/donate/"
          className="donateBtn"
        >
          Donate
        </a>

        <div className="searchBarDiv">
          <input
            type="text"
            placeholder="   Search through all the boards"
            id="searchBar"
            onClick={searchBarClick}
          ></input>
        </div>
      </div>
      <div className="bottomHeader">
        <p>
          <a
            href="https://desuarchive.org/_/articles/donate/"
            className="bottomLinks"
          >
            Donations to the archive
          </a>
          <span> </span>
          would be appreciated to help fund our server hardware & storage
          drives. We are looking for developers to help build new software and
          archives,
          <span> </span>
          <a href="https://desuarchive.org/desu" className="bottomLinks">
            discuss here.
          </a>
        </p>
      </div>
    </div>
  );
}

export default Header;

function dropDownTitle() {
  document.getElementById("desuLinks").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".desuDropbtn")) {
    var dropdowns = document.getElementsByClassName("desuDropContent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function searchBarClick() {
  //alert("yuhh");
}

function Arch(props) {
  return (
    <div className="archive">
      <a
        href={`${
          props.boardObj.boardtype === "blue" ? props.boardObj.link : "#"
        }`}
        className={`${
          props.boardObj.boardtype === "blue" ? "arcLink" : "arcRed"
        }`}
      >
        <h1 className="blink4">/{props.boardObj.short}/ - ‌‌</h1>
        <h2 className="blink3"> {props.boardObj.name} </h2>
      </a>
    </div>
  );
}
