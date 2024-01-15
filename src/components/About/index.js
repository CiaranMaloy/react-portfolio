import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { Loader } from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <h2>
                    Ambitious /Confident /Humble
                    </h2>
                    <p>
                        With a background rooted in Acoustical and Audio Engineering, I am driven by a relentless ambition to push the boundaries of technology. From designing cutting-edge audio algorithms to exploring the realms of machine learning, I consistently seek opportunities to contribute to innovative solutions that redefine industry standards.
                    </p>
                    <p>
                        As an experienced Audio Engineer, I approach challenges with unwavering confidence. My proficiency in software development, particularly in backend design and data analysis using Python, coupled with my expertise in VST design in C++, reflects my confidence in navigating diverse technical landscapes. I am adept at implementing machine learning systems and algorithms for Music Information Retrieval, showcasing a confident stride in the rapidly evolving field of audio technology.
                    </p>
                    <p>
                        Despite my technical prowess, I maintain a humble perspective that values continuous learning and collaboration. Whether providing on-site acoustic testing for high-profile clients or consulting on essential business services, I understand the importance of humility in approaching tasks. My commitment to effective communication, collaboration, and problem-solving underscores my belief in the power of collective intelligence and teamwork.
                    </p>
                </div>
                <div className='stage-cube-cont'>
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faPython} color="#3776ab" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="ball-beat" />
        </>
    )
}

export default About