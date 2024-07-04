

const Skills = () => {
    return (
        <div className="hero min-h-screen" id="skills">
            <div className="hero-content text-text-center w-3/4 h-3/4 shadow-2xl bg-opacity-5 bg-orange-500 flex flex-col justify-between items-center">

                <div className="max-w-xl ">
                    <h1 className="text-5xl font-bold text-center">Skills Set</h1>
                    <p className="py-6 text-justify">
                        From my university tenure to recent years, I have gained knowledge about various languages. But now, I am more proficient on  <strong className="primary-color">MERN stack</strong> web development. I am currently working more with <i className="primary-color">HTML</i>,  <i className="primary-color">CSS</i>, <i className="primary-color">Tailwind</i>, <i className="primary-color">JavaScript</i>, <i className="primary-color">React</i>, <i className="primary-color">Firebase</i>, <i className="primary-color">Node JS</i>, <i className="primary-color">Express JS</i>, <i className="primary-color">MongoDB</i> and <i className="primary-color">MySQL</i>. I am also a team player and can work in group environment.
                    </p>
                </div>

                <div className="space-y-4">
                    <br />
                    <p className="flex justify-center items-center gap-2">
                        <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" />
                        <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />
                        <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP" />
                    </p>
                    <p className="flex justify-center items-center gap-2">
                        <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="REACT" />
                        <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind_CSS" />
                        <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
                        <img src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase" alt="Firebase" />

                    </p>
                    <p className="flex justify-center items-center gap-2">
                        <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
                        <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express.js" />
                        <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />

                    </p>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default Skills;