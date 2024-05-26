import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function Avatar() {
  return <img className="avatar" src="images/IMG_3975.jpg" />;
}
function Intro() {
  return (
    <p className="intro">
      <h1>Tarun KC</h1>
      Full-stack developer, when not being a Hooman, lifting weights and
      exploring different cuisines. I like to play Basketball and do adrenaline
      stuff.
    </p>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {/* <Skill skill="React" emoji="⚔️" bgColor="pink" />
      <Skill skill="JS" emoji="🎓" bgColor="orangered" />
      <Skill skill="Debugging" emoji="🦾" bgColor="skyblue" />
      <Skill skill="Salesforce" emoji="☁️" bgColor="red" />
      <Skill skill="Backend" emoji="⚙️" bgColor="lightgreen" />
      <Skill skill="MERN" emoji="✅" bgColor="grey" /> */}
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
}
function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
