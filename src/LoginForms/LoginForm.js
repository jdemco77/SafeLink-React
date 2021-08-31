import Modal from "../UI/Modal";


const LoginForm=props=>{

    return (
        
            <Modal onClose={props.onClose}>
            
            <form className='loginform'>
                <label>UserName:</label>
                <input type='text' id='uname' name='uname'/>
                <label>Password:</label>
                <input type='text' id='pword' name='pword'/>
                <button type='submit' onClick={props.onClose}>Log In</button>
                <h6> Dont have an account yet?<br/> register now!</h6>
                <button onClick={props.onClose}>Close</button>
            </form>
            </Modal>
    )
};

export default LoginForm;