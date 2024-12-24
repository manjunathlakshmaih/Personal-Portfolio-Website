import React from "react";
import ProjectCard from "../../components/Project-details/Project-details";
import "./Project-section.css";
const projects = [
  {
    id: 1,
    title: "Project One",
    description:
      "This is a brief description of Project One. It does amazing things!",
    technologies: ["React", "CSS", "Node.js"],
    github: "https://github.com/yourusername/project-one",
    demo: "https://yourprojectone.com",
    image: "https://www.w3schools.com/w3images/lights.jpg",
  },
  {
    id: 2,
    title: "Project Two",
    description:
      "This is a brief description of Project Two. It's built with awesome technologies!",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/yourusername/project-two",
    demo: "https://yourprojecttwo.com",
    image: "https://www.w3schools.com/w3images/fjords.jpg",
  },
  {
    id: 3,
    title: "Project Three",
    description:
      "A brief description of Project Three. It's an amazing project!",
    technologies: ["React", "Redux", "Node.js"],
    github: "https://github.com/yourusername/project-three",
    demo: "https://yourprojectthree.com",
    image: "https://www.w3schools.com/w3images/mountains.jpg",
  },
  {
    id: 4,
    title: "Project Four",
    description: "Description of Project Four. Built with some cool tech!",
    technologies: ["Vue.js", "CSS", "Express"],
    github: "https://github.com/yourusername/project-four",
    demo: "https://yourprojectfour.com",
    image: "https://www.w3schools.com/w3images/forest.jpg",
  },
  {
    id: 5,
    title: "Project Five",
    description: "Project Five does amazing things. Check it out!",
    technologies: ["Node.js", "MongoDB", "Express"],
    github: "https://github.com/yourusername/project-five",
    demo: "https://yourprojectfive.com",
    image: "https://www.w3schools.com/w3images/snow.jpg",
  },
  {
    id: 6,
    title: "Project Six",
    description:
      "This is Project Six. A really cool project built with JavaScript!",
    technologies: ["React", "Node.js", "GraphQL"],
    github: "https://github.com/yourusername/project-six",
    demo: "https://yourprojectsix.com",
    image: "https://www.w3schools.com/w3images/rock.jpg",
  },
];

const ProjectSection = () => {
  return (
    <section className="project-section">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
