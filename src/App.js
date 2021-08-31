//import './Application.css';
//import LoginForm from './LoginForms/LoginForm';

import Header from './UI/Header';
import LoginForm from './LoginForms/LoginForm';
//import MeetingForm from './LoginForms/MeetingForm';
import RegistrationForm from './LoginForms/RegistrationForm';
import {useState} from 'react';




function App() {

  const [LoginShows,setLoginShows]=useState(false);

  const ShowLoginHandler=() =>{
      setLoginShows(true);
  }
  const HideLoginHandler=()=>{
      setLoginShows(false);
  };

  const [RegistrationShows,setRegistrationshows]=useState(false);

  const ShowRegistrationHandler=()=>{
      setRegistrationshows(true);
  };
  const hideRegistrationHandler=()=>{
      setRegistrationshows(false);
  };

  const [ScheduleDate,setScheduleDate]=useState(false);

  const ShowSheduleDate=()=>{
    setScheduleDate(true);
  };

  const hideScheduleDate=()=>{
    setScheduleDate(false);
  };

  return (
    <div>
      {LoginShows && <LoginForm onClose={HideLoginHandler,ShowSheduleDate} />}

      {RegistrationShows && <RegistrationForm onClose={hideRegistrationHandler}/>}

      <Header onShowLogin={ShowLoginHandler} onShowRegistration={ShowRegistrationHandler} ></Header>
    </div>
  )

};

export default App;
