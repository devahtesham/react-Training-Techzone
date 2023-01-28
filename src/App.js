// import Heading from "./components/Heading.jsx"
// import React from 'react';
// import Heading2 from "./components/Heading2.jsx";
// import Card from "./components/Card.jsx";
import Form from "./components/Form.jsx";
import UseRefExample from "./components/UseRefExample.jsx";
function App() {
  let myData={
    name:"ahtesham",
    id:"12355",
    course:"reactjs"
  }

  return <>
        {/* <div className="App">
          <h1>Hello react</h1>
        </div>
        <MyHeading /> */}
      {/* <Heading heading={myData} />
      <Heading2 /> */}
      {/* <Card /> */}
      {/* <Form /> */}
      <UseRefExample />
      </>

  ;
}

export default App;
