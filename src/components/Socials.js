import React from 'react';
import {ImFacebook,ImInstagram,ImTwitter,ImLinkedin,ImGithub} from 'react-icons/im'

const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li>
        <a href='' target='_blank'><ImFacebook/></a>
      </li>
      <li>
        <a href='' target='_blank'><ImInstagram/></a>
      </li>
      <li>
        <a href='' target='_blank'><ImLinkedin/></a>
      </li>
      <li>
        <a href='' target='_blank'><ImGithub/></a>
      </li>
    </ul>
  </div>;
};

export default Socials;
