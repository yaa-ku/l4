// @flow
'use client'

import * as React from 'react';
import s from './header.module.scss'
import Link from 'next/link';
import { useState } from 'react';
import clsx from 'clsx';

type ActiveLinkType = 'home' | 'cards';

const pages: ActiveLinkType[] = ['home', 'cards']

export const Header = () => {

    const [activeLink, setActiveLink] = useState<ActiveLinkType>('home');
    return (
        <div className={s['header']}>
            {
                pages.map( (page, index) =>
                    <Link href={`/${page === 'home' ? '' : page}`}
                          className={clsx(activeLink === `${page}`
                                  ? s['header__link--active']
                                  : s['header__link'],
                              'navigation-text')}
                          onClick={() => setActiveLink(page)}
                            key={index}>
                        {page.toUpperCase()}
                    </Link>
                )
            }
        </div>
    );
};