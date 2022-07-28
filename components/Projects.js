import Project from "./Project";

import "./Projects.scss";

export default function Projects() {
  const projects = [
    {
      name: "Project 1",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/2560px-A_black_image.jpg",
      href: "https://qtbpj6.csb.app/",
    },
    {
      name: "Project 2",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/2560px-A_black_image.jpg",
      href: "https://www.google.com",
    },
    {
      name: "Project 3",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/2560px-A_black_image.jpg",
      href: "https://www.google.com",
    },
    {
      name: "Project 4",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/2560px-A_black_image.jpg",
      href: "https://www.google.com",
    },
    {
      name: "Project 4",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/2560px-A_black_image.jpg",
      href: "https://www.google.com",
    },
    {
      name: "Project 4",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/2560px-A_black_image.jpg",
      href: "https://www.google.com",
    },
    {
      name: "Project 4",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/2560px-A_black_image.jpg",
      href: "https://www.google.com",
    },
    {
      name: "Project 4",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/2560px-A_black_image.jpg",
      href: "https://www.google.com",
    },
  ];

  return (
    <div className="projects">
      {projects.map((project) => (
        <Project
          name={project.name}
          image={project.image}
          href={project.href}
          key={project.name}
        />
      ))}
    </div>
  );
}
