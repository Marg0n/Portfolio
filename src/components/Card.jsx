/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Card = ({ projectData, techIcons }) => {
  return (
    <div className="card bg-base-100 max-w-[80vw] max-h-[90vh] shadow-md transition-shadow shadow-[#fd6e0a] p-6 group justify-center items-center overflow-hidden relative">{/* hover:scale-105 hover:shadow-[cornflowerblue]  */}

      {/* Tech Icons Section */}
      <div className="flex justify-center items-center gap-4 mb-4 flex-wrap">
        {techIcons?.map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt={`Tech Icon ${index + 1}`}
            width={40}
            height={40}
            className="w-12"
          />
        ))}
      </div>

      {/* Card Body */}
      <div className="card-body space-y-6 overflow-y-auto">
        <h2 className="card-title text-3xl font-bold text-center">{projectData.name}</h2>
        <p className="description text-base">{projectData.Overview}</p>

        {/* Features Section */}
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Features</h4>
          <ul className="list-disc ml-6">
            {projectData?.Features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Section */}
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Tech Stack</h4>
          <div>
            <strong>Frontend:</strong>
            <ul className="list-disc ml-6">
              {projectData.TechStack.Frontend.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
          <div>
            <strong>Backend:</strong>
            <ul className="list-disc ml-6">
              {projectData.TechStack.Backend.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Demo Link Section */}
        <div className="card-actions justify-center mt-4">
          <a
            href={projectData.LiveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-white bg-gradient-to-r from-indigo-600 to-rose-500"
          >
            Visit Demo
          </a>
        </div>

        {/* Admin & User Section */}
        <div className="mt-6 text-center">
          <p>
            <strong>Admin:</strong> {projectData.Admin}
          </p>
          <p>
            <strong>User:</strong> {projectData.User || "Just make one to tryout 😄"}
          </p>
        </div>
      </div>

      {/* Back to Home */}
      <div>
        <Link to="/" className="absolute top-4 left-4 text-sm text-black hover:text-orange-500 flex gap-2 items-center animate__tada animate__animated animate__infinite animate__slow">
          <FaHome size={25} />
        </Link>
      </div>
    </div>
  );
};

// PropTypes validation
Card.propTypes = {
  projectData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    Overview: PropTypes.string.isRequired,
    Features: PropTypes.arrayOf(PropTypes.string).isRequired,
    TechStack: PropTypes.shape({
      Frontend: PropTypes.arrayOf(PropTypes.string).isRequired,
      Backend: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    LiveDemo: PropTypes.string.isRequired,
    Admin: PropTypes.string.isRequired,
    User: PropTypes.string.isRequired,
  }).isRequired,
  techIcons: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;
