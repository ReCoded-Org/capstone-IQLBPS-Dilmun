import React from 'react'
import {Watch} from 'react-loader-spinner'

const LoadingScreen = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <Watch
                color="#4fa94d"
                height="100"
                radius="48"
                width="100"
                timeout={3000}
                visible
            />
        </div>
    )
}

export default LoadingScreen