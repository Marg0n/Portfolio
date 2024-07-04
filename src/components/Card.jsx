
import { PropTypes } from 'prop-types';
import js from "../assets/images/icons/js.png";
import mongo from "../assets/images/icons/mongo.png";
import node from "../assets/images/icons/nodejs.png";
import react from "../assets/images/icons/react.png";
import { Link } from 'react-router-dom';

const Card = ({name, descp, lang, link}) => {
    return (
        <>
            <Link to={link} target='blank' className="card bg-base-100 w-96 shadow-xl p-4 group hover:scale-105">
                <figure className='flex justify-center items-center gap-4'>
                    <img
                        src={js}
                        alt="" />
                    <img
                        src={mongo}
                        alt="" />
                    <img
                        src={node}
                        alt="" />
                    <img
                        src={react}
                        alt="" />
                </figure>
                <div className="card-body mt-2">
                    <h2 className="card-title hover:scale-105 primary-color"><a href={link}>{name}</a></h2>
                    <p>{descp}</p>
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
}

export default Card;