'use client'
// @flow
import * as React from 'react';
import { Switch } from '@/ui-kit/switch/switch';
import { useState } from 'react';
import HelloBlock from '@/components/helloBlock/helloBlock';
export const ShowingBlock = () => {

    const [isShowing, setIsShowing] = useState<boolean>(false);
    return (
        <div>
            <Switch isChecked={isShowing}
                    handleSwitchToggle={ () => setIsShowing(!isShowing)}
            />

            {isShowing &&
                <HelloBlock/>
            }
        </div>
    );
};