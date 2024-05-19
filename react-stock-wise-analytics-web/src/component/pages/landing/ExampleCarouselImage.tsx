import React from 'react';


interface CarouselContentProps {
    text: string;
    src: string;
}

const CarouselContent: React.FC<CarouselContentProps> = ({ text, src }) => {
    return (
        <div className='d-flex'>
            <div className="d-block w-50">
                <h1>{text}</h1>
            </div>
            <div className="d-block w-50 d-flex justify-content-center align-items-center p-4 m-4">
                <img src={src} alt={text} style={{filter: 'blur(10px)'}} />
            </div>
        </div>
    );
}

export default CarouselContent;