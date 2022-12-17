import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const MemberCard = ({ member }) => {
  return (
    <div className="max-w-sm flex flex-col rounded-[20px] overflow-hidden shadow-xl bg-background">
      <img className="max-h-64" src={member.img} alt="team member" />
      <div className="px-6 py-4">
        <div className="text-center font-bold text-primary text-xl mb-2">
          {member.name}
        </div>
        <p className="text-center text-primary text-base">{member.title}</p>
      </div>
      <div className="text-center px-6 pt-4 pb-2 ">
        {member.links.map((link) => {
          return (
            <a
              key={link.name}
              className="inline-block text-center bg-background rounded-full px-3 py-1 text-sm font-semibold text-primary mr-2 mb-2 hover:underline"
              href={link.url}
            >
              <div className="flex space-x-2 items-center ">
                <div className="mr-1">
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



