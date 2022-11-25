import React from 'react';
import abtImg from '../../assets/aboutUS.png';

const AboutUsHeader = () => {
    return (
        <div className=" container mx-auto px-4 mt-28" >
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <h1 className='text-4xl text-primary font-bold mt-0 mb-6'>
                    Meet Our Team
                </h1>
            </div>
            <div className=" flex lg:flex-row md:flex-col sm:flex-col justify-around">
                <div className="">
                    <p className="text-secondary text-lg p-12 pt-24">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="max-sm rounded-[32px] overflow-hidden shadow-lg"><img src={abtImg} alt='Team' /></div>
                {/* {team.map((member) => {
          return <MemberCard key={member.id} member={member} />; */}
                {/* })} */}
            </div>
        </div>
    );
};

export default AboutUsHeader;



