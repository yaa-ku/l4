'use client'

// @flow
import s from './switch.module.scss';
import * as React from 'react';
import { useId } from 'react';

type SwitchProps = {
    isChecked: boolean;
    handleSwitchToggle: () => void;
};
export const Switch = ({isChecked, handleSwitchToggle}: SwitchProps) => {
    const switchId: string = useId();

    return (
        <>
            <input
                checked={isChecked}
                onChange={handleSwitchToggle}
                className={s['react-switch-checkbox']}
                id={switchId}
                type="checkbox"
            />
            <label
                className={s['react-switch-label']}
                htmlFor={switchId}
            >
                <span className={s[`react-switch-button`]} />
            </label>
        </>
    );
};