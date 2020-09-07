import React from 'react';

import { useHistory } from 'react-router-dom';
import {
  Button,
  Gap,
} from 'solarxui';

const PLAYERLIST = ['noob','noob','noob','noob','noob','noob',]

const SummaryPage = () => {
    const history = useHistory()
    const onNext = () => {
        history.push('day')
    }

    return (
        <Gap type="vertical" size="8px">
            <h1>Summary</h1>
            <div className="bold">Player killed:</div>
            {PLAYERLIST.map((name, index) => (
                <div key={index}>
                    {name}
                </div>
            ))}
            <Button onClick={onNext}>Next</Button>
        </Gap>
    )
}

export default SummaryPage
