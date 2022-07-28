import "./ContactMe.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function ContactMe() {
    return (
        <div className="contact-me">
            <h1>Contact me</h1>

            <div className="contacts">
                <h2>
                    <a href="https://discord.com/users/981929268823072848" className={"f"}>
                        <FontAwesomeIcon icon="fa-brands fa-discord"/>
                        KreYzeFR#3391
                    </a>
                </h2>
                <div className="separator">
                    <span>or</span>
                </div>
                <h2>
                    <a href="mailto:tamba.tidiane22@gmail.com">
                        <FontAwesomeIcon icon="fa-solid fa-envelope"/>
                        tamba.tidiane22@gmail.com
                    </a>
                </h2>
                <div className="separator">
                    <span>or</span>
                </div>
                <h2>
                    <a href="https://discord.com/users/981929268823072848" className={"l"}>
                        <FontAwesomeIcon icon="fa-brands fa-linkedin"/>
                        LinkedIn
                    </a>
                </h2>
            </div>
        </div>
    );
}
