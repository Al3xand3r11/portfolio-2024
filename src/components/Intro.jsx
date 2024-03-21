import React from "react";

function Intro(){
    return(
        <div className="flex items-center
        justidy-center flex-col text-center pt-20
        pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1
            md:mb-3 font-bold">Brandon Nance</h1>
            <p className="text-base md:text-xl mb-3
            font-medium">Software Engineer</p>
            <p className="text-sm max-w-x1 mb-6 font-bold">
                My name is Brandon Nance. I am a front end software engineer at work and a full stack software
                engineer in my free time. While I am most comfortable and create the most projects recently with React, <br/>I am learning more about DevOps and Machine Learning.
                I am currently building more coding projects on a weekly basis and I
                love to solve problems with code. 
                <br/>From the brainstorming and creation to the actual hosting and implementation, building something of value has always been a passion of mine.
                <br/>When I am not coding I am usually running or doing something outdoors. Check out my {' '} 
                <a 
                    href="https://www.linkedin.com/in/bnance1/"
                    target="_blank"
                    className="text-cyan-600 hover:underline
                    underline-offset-2 decoration-2
                    decoration-red-600"
                    rel="noreferrer noopener"
                >
                    LinkedIn 
                </a>{' '}
                 or my coding {''}
                <a 
                    href="https://www.instagram.com/btn.codes?igsh=MzRlODBiNWFlZA=="
                    target="_blank"
                    className="text-cyan-600 hover:underline
                    underline-offset-2 decoration-2
                    decoration-red-600"
                    rel="noreferrer noopener"
                >
                    Instagram
                </a>
            </p>


        </div>
    )
}

export default Intro;