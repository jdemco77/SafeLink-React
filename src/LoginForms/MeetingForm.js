import Card from "../UI/Card";

const MeetingForm = () =>{

    return (
        <Card>
            <form className='Meetingform'>
        <label>Who you meeting</label>
        <input type='text' id='meetid' name='meeter'/>
        <label>Location of Date:</label>
        <input type='text' id='location' name='location'/>
        <label>Departure Time:</label>
        <input type='text' id='departuretime' name='departuretime'/>
        <label>Duration:</label>
        <input type='text' id='pword' name='pword'/>
        <label>Expected return:</label>
        <input type='text' id='eReturn' name='eReturn'/>
        <label>Description of Meeting:</label>
        <input type='text' id='desc' name='desc'/>
        

        <button type='submit'>schedule Date</button>
        
    </form>


        </Card>
    )

};

export default MeetingForm;