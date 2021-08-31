
import Modal from "../UI/Modal";
import "./RegistrationForm.css";

const RegistrationForm=(props)=>{

    return (
        <div className="styleRegistration">
        <Modal onClose={props.onClose}>
            <form>
                <label>Enter First Name:</label>
                <input type='text' id='fname' name='fname'/>
                <br/><br/>
                <label>Enter Last Name:</label>
                <input type='text' id='lname' name='lname'/>
                <br/><br/>
                <label>Email Account:</label>
                <input type='text' id='email' name='email'/>
                <br/><br/>
                <label>Enter Full Address:</label>
                <input type='text' id='home' name='address'/>
                <br/><br/>
                <label for="img">Select image:</label>
                <input type="file" id="imgid" name="photoid" accept="image/*"/>
                <br/><br/>
                
                <label for="img">Select image:</label>
                <input type="file" id="imgself" name="photoself" accept="image/*"/>
                <br/><br/>
                <label>Emergency Contact:</label>
                <input type='text' id='emergencyContact' name='numberToParse'/>
                <br/><br/>

                <button type='submit'>Submit Registration</button>
                <button onClick={props.onClose}>Close</button>
            </form>
        </Modal>
        </div>
    )
};

export default RegistrationForm;