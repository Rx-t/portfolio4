import "./Project.scss";

export default function Project(props) {
  return (
    <div className="project" style={{ backgroundImage: `url(${props.image})` }}>
      <div className="content">
        <h1>{props.name}</h1>

        {/* eslint-disable-next-line */}
        <a href={props.href} target="_blank">
          Accéder au projet
        </a>
      </div>
    </div>
  );
}
