import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./WhatIUse.scss";

export default function WhatIUse() {
  return (
    <div className="what-i-use">
      <h1>What I use ?</h1>
      <div className="languages">
        <span>
          <FontAwesomeIcon icon="fa-brands fa-html5" />
          HTML
        </span>
        <span>
          <FontAwesomeIcon icon="fa-brands fa-css3" />
          CSS
        </span>
        <span>
          <FontAwesomeIcon icon="fa-brands fa-js" />
          Javascript
        </span>
        <span>
          <FontAwesomeIcon icon="fa-brands fa-python" />
          Python
        </span>
        <span>
          <FontAwesomeIcon icon="fa-brands fa-php" />
          PHP
        </span>
        <span>
            <FontAwesomeIcon icon="fa-brands fa-react" />
          React
        </span>
      </div>
    </div>
  );
}
