// @flow
'use client'
import * as React from 'react'
import s from './ui-button.module.scss'
import clsx from 'clsx';

type ButtonType = 'button' | 'submit' | 'reset';
type ButtonWidth = 'fit-content' | 'fill-parent';

type Props = {
    label: string;
    onClick?: () => void;
    type?: ButtonType;
    width?: ButtonWidth;
};
export const UiButton = ({label,
                         onClick,
                         type = 'button',
                         width = 'fit-content',
}: Props) => {
    return (
        <button className={clsx(s['button'],
                                width === 'fill-parent' && s['button--wide'])}
                onClick={onClick}
                type={type}
        >
            {label}
        </button>
    );
};