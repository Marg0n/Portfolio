
import { PropTypes } from 'prop-types';
import js from "../assets/images/icons/js.png";
import mongo from "../assets/images/icons/mongo.png";
import node from "../assets/images/icons/nodejs.png";
import react from "../assets/images/icons/react.png";
import { Link } from 'react-router-dom';

const Card = ({name='', descp=``, lang='', link=''}) => {
    return (
        <>
            <Link to={link} target='blank' className="card bg-base-100 w-full shadow-md transition-shadow shadow-[#fd6e0a] hover:shadow-[cornflowerblue] p-4 group hover:scale-105 justify-center items-center">
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
}

export default Card;