import '../userInput/userInput.css'

const UserInputComponent = (props) => {
    return(
        <div className="inputDiv">
            <input className="nameInput" type="text" onChange={props.setUser} 
            value={props.currentName} />
        </div>  
    )

}

export default UserInputComponent;