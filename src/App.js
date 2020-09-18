import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./redux/action/IncrementAction";
import { login} from "./redux/action/loggedAction";

function App() {
  const data = useSelector(state=>state.counter);
  const islogged = useSelector(state=>state.islogged);
  const  dispatch = useDispatch();
  

  return (
    <div className="App">
      <h2>{data}</h2>
      <button onClick={()=>dispatch(increment())} style={{margin:"0px 5px"}}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>

      {islogged && <><p>Logged in</p><button onClick={()=>dispatch(login())}>LOG OUT</button></>}
      {!islogged && <><p>Logged out</p><button onClick={()=>dispatch(login())}>LOG IN</button></>}
      



    </div>
  );
}

export default App;
