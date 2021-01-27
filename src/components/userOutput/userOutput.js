import '../userOutput/userOutput.css'

const UserOutComponent = (props) => {
    return(
        <div className="Pdiv">
            <p>Hello {props.userName}</p>
            <p>Word</p>
        </div>
    
    )
        
     
}

export default UserOutComponent;