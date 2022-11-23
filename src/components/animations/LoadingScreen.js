import React from 'react';
import { Circles } from 'react-loader-spinner';

const LoadingScreen = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <Circles
                height="100"
                width="100"
                color="#16425B"
                timeout={3000}
                visible
            />
        </div>
    )
}

export default LoadingScreen