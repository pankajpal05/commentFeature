import { useState } from "react";
import "./App.css";
import Comment from "./Comment";

function App() {
  const [item, setItem] = useState("");
  const [data, setData] = useState([]);

  const handleChanged = (e) => {
    setItem(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setData([...data, item]);
      setItem("");
    }
  };

  const handleClicked = () => {
    setData([...data, item]);
    setItem("");
  };

  return (
    <>
      <h1>Add Comment Here....</h1>
      <div className="comment-layout">
        <input
          type="text"
          value={item}
          onChange={(e) => handleChanged(e)}
          onKeyPress={(e) => handleKeyPress(e)}
        />
        <button className="cmt-btn" onClick={handleClicked}>
          Comment
        </button>
      </div>

      <Comment data={data} />
    </>
  );
}

export default App;
