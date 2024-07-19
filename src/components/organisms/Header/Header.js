"use client";

import logo from '@/assets/tempdetlogo.svg';
import search from '@/assets/search.svg';
import accessibility from '@/assets/accessibility.svg';
import dropdown from '@/assets/dropdown.svg';
import Image from 'next/image';
import useStyles from './style';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const Header = ({tl, duration, ease}) => {

  const classes = useStyles();
  const header = useRef();

  useGSAP(() => {

    tl
      .fromTo('.animate-set-1', { yPercent: -250 }, { duration: duration, yPercent: 0, stagger: {amount: 0.1}, ease: ease })
      .fromTo('.animate-set-2', { yPercent: -250 }, { duration: duration, yPercent: 0, stagger: {amount: 0.1}, ease: ease }, '<');
  }, { scope: header })

  return (
    <div ref={header} className={classes.Header}>
      <div className={classes.Logo}>
        <Image src={logo} />
      </div>
      <div className='navigation'>
        <a className='navigation-item animate-set-1'>Learn</a>
        <a className='navigation-item animate-set-1'>Resources</a>
        <a className='navigation-item animate-set-1'>Community</a>
      </div>
      <div className='cta-plus-settings'>
        <div className='language animate-set-2'>
          <div className='current-language'>EN</div>
          <div className='language-dropdown-btn'>
            <Image src={dropdown} />
          </div>
          <div className='language-dropdown'>
            <div className='language-dropdown-item'>English</div>
            <div className='language-dropdown-item'>Arabic</div>
          </div>
        </div>
        <div className='divider animate-set-2'></div>
        <div className='search animate-set-2'>
          <Image src={search} />
        </div>
        <div className='accessibility animate-set-2'>
          <Image src={accessibility} />
        </div>
        <div className='cta'>
          <div className='cta-btn animate-set-2'>Login</div>
          <div className='cta-btn style2 animate-set-2'>Join</div>
        </div>
      </div>
    </div>
  )
}

export default Header;