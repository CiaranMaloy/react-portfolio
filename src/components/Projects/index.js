import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import React, { useState, useEffect } from 'react'
import { Loader } from 'react-loaders'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faUser, faList } from '@fortawesome/free-solid-svg-icons'

import { projectsList } from './projectsList';
import ProjectBox from '../ProjectBox/index';

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
            <div className='container projects-page'>
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
                    <div className='all-projects-container'>
                        {projectsList.map((project) => {
                            return <ProjectBox key={project.id} {...project} />;
                        })}
                    </div>
                </div>
            </div>
            <Loader type="ball-beat" />
        </>
    )
}

export default Projects