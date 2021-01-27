import UserOutComponent from './components/userOutput/userOutput';
import UserInputComponent from './components/userInput/userInput';
import './App.css';
import { useState } from 'react';

function App() {

 const [userName,setUserName] = useState(
   {
     name:'Daniel'
   }
 )

 const setUser = (name) => {
   setUserName({
     name:name.target.value
   })
 }

  return (
    <div className="App">
     <h1>Hello App</h1>

     <div className="userInputComponent">
     <UserInputComponent setUser={setUser} currentName={userName.name}/>
     </div>

    <div className="userOutComponent">
     <UserOutComponent userName={userName.name}/>
     <UserOutComponent userName={userName.name}/>
     <UserOutComponent userName="Max"/>
     </div>
    </div>
  );
}

export default App;
