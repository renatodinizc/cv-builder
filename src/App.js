import PersonalInfo from './components/PersonalInfo';
import ProfessionalExperience from './components/ProfessionalExperience';
import EducationalExperience from './components/EducationalExperience';
import SkillSet from './components/SkillSet';
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
    <div className='ProfessionalExperience'>
      <EducationalExperience />
    </div>
    <div className='ProfessionalExperience'>
      <SkillSet />
    </div>
    </>
  );
}

export default App;
