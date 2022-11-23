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
                <h1 className='text-4xl font-bold mt-0 mb-6'>
                    Meet Our Team
                </h1>
            </div>
            <div className=" flex flex-row justify-around">
                <div className="">something</div>
                <div className="max-w-sm rounded-[32px] overflow-hidden shadow-lg"><img src={abtImg} alt='Team' /></div>
                {/* {team.map((member) => {
          return <MemberCard key={member.id} member={member} />; */}
                {/* })} */}
            </div>
        </div>
    );
};

export default AboutUsHeader;



