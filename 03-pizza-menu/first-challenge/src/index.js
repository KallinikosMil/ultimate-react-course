import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
const skills = [
  {
    skill: 'HTML+CSS',
    level: 'advanced',
    color: '#2662EA',
  },
  {
    skill: 'JavaScript',
    level: 'advanced',
    color: '#EFD81D',
  },
  {
    skill: 'Web Design',
    level: 'advanced',
    color: '#C3DCAF',
  },
  {
    skill: 'Git and GitHub',
    level: 'intermediate',
    color: '#E84F33',
  },
  {
    skill: 'React',
    level: 'advanced',
    color: '#60DAFB',
  },
  {
    skill: 'Svelte',
    level: 'beginner',
    color: '#FF3B00',
  },
];

const Avatar = () => {
  return (
    <div className="avatar">
      <img src="avatar.png" alt="avatar" />
    </div>
  );
};
const Intro = () => {
  return (
    <div>
      <h1>Kallinikos Milonakis</h1>
      <p>
        Whatever that's me Kallinikos. Trying to become the best version of a
        software engineer that I can be!
      </p>
    </div>
  );
};
const SkillList = (props) => {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
};
const Skill = ({ skill, color, level }) => {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === 'beginner' && '👶'}
        {level === 'intermediate' && '👍'}
        {level === 'advanced' && '💪'}
      </span>
    </div>
  );
};
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList>
          <Skill background="red">HTML</Skill>
        </SkillList>
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
