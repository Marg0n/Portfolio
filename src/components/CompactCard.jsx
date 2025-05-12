
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const CompactCard = ({ name = '', descp = '', lang = '', link = '', aos = '', aosDuration = '', techIcons = [] }) => {
    return (
        <div>
            
            <Link to={link} className="card bg-base-100 w-full shadow-md transition-shadow shadow-[#fd6e0a] hover:shadow-[cornflowerblue] p-4 group hover:scale-105 justify-center items-center" data-aos={aos} data-aos-duration={aosDuration}>
                <figure className='flex justify-center items-center gap-4'>
                    {/* <img
                        src={js}
                        alt="JavaScript" />
                    <img
                        src={ts}
                        alt="TypeScript" 
                        className='w-11'/>
                    <img
                        src={nextjs}
                        alt="Next.js" 
                        className='w-11'/>
                    <img
                        src={mongo}
                        alt="MongoDB" />
                    <img
                        src={node}
                        alt="Node.js" />
                    <img
                        src={react}
                        alt="React" /> */}
                    {techIcons.map((icon, index) => (
                        <img key={index} src={icon} alt={`Tech ${index}`} className='w-11' />
                    ))}
                </figure>
                <div className="card-body mt-2">
                    <h2 className="card-title hover:scale-105 primary-color">{name}</h2>
                    <p className="description">{descp}</p>
                    <div className="card-actions justify-end">
                        Tech: {lang}
                    </div>
                </div>
            </Link>
        </div>
    );
};

CompactCard.propTypes = {
    name: PropTypes.string,
    descp: PropTypes.string,
    lang: PropTypes.string,
    link: PropTypes.string,
    live: PropTypes.string,
    aos: PropTypes.string,
    aosDuration: PropTypes.string,
    techIcons: PropTypes.array
}

export default CompactCard;