import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { Loader } from 'react-loaders'

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [data, setData] = useState([{}])

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    useEffect(() => {
        fetch("/members").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                            idx={15}
                        />
                    </h1>
                    <h2>
                        Things I've been working on!
                    </h2>
                    <p>
                        Projects
                    </p>
                    <p>
                        Projects
                    </p>
                    <p>
                        Projects
                    </p>
                </div>
            </div>
            <Loader type="ball-beat" />
        </>
    )
}

export default Projects