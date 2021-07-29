import React from "react";
import Login from "./Login";

// const isLoggedIn = false;
// const currentTime = new Date(2021,11,1,19).getHours();


function App() {
    return (
        <div className="container">{
            // ternary operator: isLoggedIn ? <h1>Hello</h1> : <Login buttonText={"submit"}/>
            //  React specific alternative: currentTime > 12 && <h1> Why are you still breaking bones ?</h1>
        }</div>
    );
}

export default App;

/*
    | && in JS                   |                   && in React |
    | -----------                | condition && expression       |
    | (expression && expression) | true && expression            |
    |                            | false && expression (jumps)   |
 */