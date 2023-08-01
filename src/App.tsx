import React from "react";
import Notes from "./component/Notes";
import Index from "./config/Index";
import "./css/all.css";
// type iterate = {
//   text: String,
//   id: number
// };
const App = () => {
  return (
    <>
      <div className="app">
      <h1>Album</h1>

        {Index.map((i) => {
          return <Notes text={i.text} id={i.id} />;
        })}
      </div>
    </>
  );
};

export default App;
