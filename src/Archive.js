function Archive(props) {
  return (
    <div className="board">
      <a href={props.boardObj.link} className="boardLink">
        <h1 className="blink2">/{props.boardObj.short}/ ‌‌</h1>
        <h2 className="blink"> {props.boardObj.name}</h2>
      </a>
    </div>
  );
}

export default Archive;
