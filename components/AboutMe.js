import "./AboutMe.scss";

export default function AboutMe() {
  return (
    <div className="about-me">
      <div className="col-1">
        <p>
          I am Tambadou Tidiane, a developer student at sup de vinci. vinci,
          currently in my first year of preparatory studies, my goal is to
          become a to become a fullstack or front-end developer even if I am
          interested in the of cybersecurity interest me
        </p>
        <p>I'm looking for an internship!</p>
        <p>
          So, if you are interested by my profile, you will find below, the
          different ways to contact me.
        </p>
      </div>
      <div className="col-2">
        <h1>Mon parcours</h1>
        <div className="experiences">
          <ExperienceElement dates="2018-2019">
            Collège Pablo picasso
          </ExperienceElement>
          <ExperienceElement dates="2019-2021">
            Lycée Jean perrin Saint ouen l'aumone
          </ExperienceElement>
          <ExperienceElement dates="2022-20xx">
            Sup de vinci, Paris
          </ExperienceElement>
        </div>
      </div>
    </div>
  );
}

function ExperienceElement(props) {
  return (
    <div className="experience">
      <div className="dates">{props.dates}</div>
      <div className="content">{props.children}</div>
    </div>
  );
}
