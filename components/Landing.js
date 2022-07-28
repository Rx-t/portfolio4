import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Landing.scss";

export default function Landing() {
  const text = "Download my resume - ";

  return (
    <div className="landing">
      <h1>
        Hello, I am <span className="name">Tambadou Tidiane</span>, a student in
        web development.
      </h1>

      <div className="download-resume">
        <a href="/">
          <FontAwesomeIcon
            icon="fa-solid fa-arrow-down"
            color="#4cd137"
            size="3x"
          />
        </a>
        <p>
          {text.split("").map((char, index) => (
            <span key={char + text.charAt(index + 1)}>{char}</span>
          ))}
        </p>
      </div>
    </div>
  );
}
