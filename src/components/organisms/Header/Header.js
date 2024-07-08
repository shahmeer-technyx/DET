"use client";

import logo from '@/assets/tempdetlogo.svg';
import search from '@/assets/search.svg';
import accessibility from '@/assets/accessibility.svg';
import dropdown from '@/assets/dropdown.svg';
import Image from 'next/image';
import useStyles from './style';

const Header = () => {

  const classes = useStyles();

  return (
    <div className={classes.Header}>
      <div className={classes.Logo}>
        <Image src={logo} />
      </div>
      <div className='navigation'>
        <a className='navigation-item'>Learn</a>
        <a className='navigation-item'>Resources</a>
        <a className='navigation-item'>Community</a>
      </div>
      <div className='cta-plus-settings'>
        <div className='language'>
          <div className='current-language'>EN</div>
          <div className='language-dropdown-btn'>
            <Image src={dropdown} />
          </div>
          <div className='language-dropdown'>
            <div className='language-dropdown-item'>English</div>
            <div className='language-dropdown-item'>Arabic</div>
          </div>
        </div>
        <div className='divider'></div>
        <div className='search'>
          <Image src={search} />
        </div>
        <div className='accessibility'>
          <Image src={accessibility} />
        </div>
        <div className='cta'>
          <div className='cta-btn'>Login</div>
          <div className='cta-btn style2'>Join</div>
        </div>
      </div>
    </div>
  )
}

export default Header;