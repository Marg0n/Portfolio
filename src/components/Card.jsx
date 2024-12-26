
import { PropTypes } from 'prop-types';
import js from "../assets/icons/js.png";
import mongo from "../assets/icons/mongo.png";
import node from "../assets/icons/nodejs.png";
import react from "../assets/icons/react.png";
import { Link } from 'react-router-dom';

const Card = ({name='', descp='', lang='', link='', aos = '', aosDuration = ''}) => {
    return (
        <>
            <Link to={link} target='blank' className="card bg-base-100 w-full shadow-md transition-shadow shadow-[#fd6e0a] hover:shadow-[cornflowerblue] p-4 group hover:scale-105 justify-center items-center" data-aos={aos} data-aos-duration={aosDuration}>
                <figure className='flex justify-center items-center gap-4'>
                    <img
                        src={js}
                        alt="JavaScript" />
                    <img
                        src={mongo}
                        alt="MongoDB" />
                    <img
                        src={node}
                        alt="Node.js" />
                    <img
                        src={react}
                        alt="React" />
                </figure>
                <div className="card-body mt-2">
                    <h2 className="card-title hover:scale-105 primary-color">{name}</h2>
                    <p className="description">{descp}</p>
                    <div className="card-actions justify-end">
                        Tech: {lang}
                    </div>
                </div>
            </Link>
        </>
    );
};

Card.propTypes = {
    name : PropTypes.string, 
    descp : PropTypes.string,
    lang : PropTypes.string,
    link : PropTypes.string,
    live : PropTypes.string,
    aos: PropTypes.string, 
    aosDuration: PropTypes.string,
}

export default Card;