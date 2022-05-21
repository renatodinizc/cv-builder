import PersonalInfo from './components/PersonalInfo';
import ProfessionalExperience from './components/ProfessionalExperience';
import './app.css';

function App() {

  return (
    <>
    <div className='Header'>
      <h1> C.V. Builder</h1>
      <h2>Build beautiful, eye-catching resumes in a few clicks!</h2>
    </div>
    <div className='PersonalInfo'>
        <PersonalInfo />
    </div>
    <div className='ProfessionalExperience'>
      <ProfessionalExperience />
    </div>
    </>
  );
}

export default App;
