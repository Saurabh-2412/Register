import React from 'react';
import 'survey-react/survey.css';
import * as survey from 'survey-react';
import { json } from '../surveys/questionsOne'

export const MySurvey = (prop) => {
    return (
        <survey.Survey
        showCompletedPage = { false }
        onComplete = { data => prop.showCompletedPage(data.valuesHash)}
        json = { json }
        />
    )
}