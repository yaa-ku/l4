// @flow 
import * as React from 'react';
import { forwardRef, LegacyRef, useState } from 'react';
import s from './passwordInput.module.scss';
import Image from 'next/image';
import clsx from 'clsx';
const hiddenImg = require('public/assets/hidden.png'); // with require
const visibleImg = require('public/assets/visible.png'); // with require

interface PasswordInputProps{
    id: string;
    placeholder?: string;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(({id, placeholder, ...props}, ref: LegacyRef<HTMLInputElement> | undefined) => {
    const [isShowing, setIsShowing] = useState<boolean>(false);

    return (
        <div className={s['password-field']}>
            <input id={id}
                   ref={ref}
                   className={clsx(s['password-field__input'],
                                        'plain-text')}
                   type={isShowing ? 'text' : 'password'}
                   placeholder={placeholder}
                   {...props}/>
            {isShowing
                ? <Image
                    className={s['password-field__img']}
                    src={visibleImg}
                    alt={''}
                    width={20}
                    height={20}
                    onClick={() => setIsShowing(false)}
                />
                : <Image
                    className={s['password-field__img']}
                    src={hiddenImg}
                    alt={''}
                    width={20}
                    height={20}
                    onClick={() => setIsShowing(true)}/>
            }
        </div>
    );
});