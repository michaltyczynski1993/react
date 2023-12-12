import NewComponent from "./NewComponent";
import { useState } from "react";

function App() {
  const [object, setObject] = useState({});
  const [objectList, setObjectList] = useState([
    { id: 0, text: "something here..." },
  ]);
  const newObjects = () => {
    const newId = objectList.length;
    const newText = "something else...";
    setObjectList([...objectList, { id: newId, text: newText }]);
    console.log(objectList);
  };
  return (
    <>
      <h1>React dynamic component learn</h1>
      <ul>
        {objectList.map((object) => (
          <NewComponent key={object.id} text={object.text} />
        ))}
      </ul>

      <hr />
      <button onClick={newObjects}>Click to add p tag with default text</button>
    </>
  );
}

export default App;
