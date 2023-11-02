'use client'
import React from 'react';
import s from './helloBlock.module.scss';
import { UiButton } from '@/ui-kit/button/ui-button';
import catImg from 'public/assets/cat.jpeg';
import Image from 'next/image';

const HelloBlock = () => {
    return (
        <div className={s['hello-block']}>
            <UiButton label={'скажи привет!'}
                      onClick={ () => console.log('hello world')}
            />
            <Image src={catImg} alt={''}
                   className={s['img']}
            />
        </div>
    );
};

export default HelloBlock;