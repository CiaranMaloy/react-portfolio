import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import React, { useState, useEffect } from 'react'
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
                        {(typeof data.members === 'undefined') ? (
                            <p>Loading...</p>
                        ): (
                            data.members.map((member, i) => (
                                <p key={i}>{member}</p>
                            ))
                        )}
                </div>
            </div>
            <Loader type="ball-beat" />
        </>
    )
}

export default Projects