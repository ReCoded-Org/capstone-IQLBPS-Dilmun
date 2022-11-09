import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const MemberCard = ({ member }) => {
  return (
    <div className="max-w-sm rounded-[20px] overflow-hidden shadow-lg ">
      <img className="object-cover  w-full" src={member.img} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{member.name}</div>
        <p className="text-gray-700 text-base">{member.title}</p>
        <p className="text-gray-700 text-base">{member.desc}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {member.links.map((link) => {
          return (
            <a
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              href={link.url}
            >
              <div className="flex space-x-2 items-center">
                <div className='mr-1'>
                  {link.icon === 'linkedIn' ? (
                    <AiFillLinkedin size={20} />
                  ) : (
                    <AiFillGithub size={20} />
                  )}
                </div>

                {link.name}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default MemberCard;



