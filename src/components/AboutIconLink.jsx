import { Link } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";

const AboutIconLink = () => {
  return (
    <div className="about-link">
      <Link to="/about" title="About this site">
        <FaQuestion size={20} />
      </Link>
    </div>
  );
};

export default AboutIconLink;
