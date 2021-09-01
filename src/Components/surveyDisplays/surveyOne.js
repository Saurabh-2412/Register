import React,{ useState, useCallback } from 'react';
import { MySurvey } from '../surveyTypes/surveyTypeOne';
import axios from 'axios';

export const SurveyOne = () => {
    const [ showPage, setShowPage] = useState(true);
    const onCompletePage = useCallback((data) => {
        const headers = {
            'apikey': 'm8bFhVGWZxPG97IZzkLLpUCPNkfPEZQC',
            'Content-Type': 'application/json'
        };
        
        async function fetchingHobbies () {
            try {
                const { status } = await axios.post("https://apim.quickwork.co/ayyub/interview/v1/submitdata",data,{headers});
                if(status === 200){
                    if(data.question5 !== undefined){
                        alert(data.question1 + " " + data.question2 + " " + data.question3 + " " + data.question4 + " " + data.question5);
                    } else if(data.question6 !== undefined){
                        alert(data.question1 + " " + data.question2 + " " + data.question3 + " " + data.question4 + " " + data.question6 );
                    } else if(data.question7 !== undefined){
                        alert(data.question1 + " " + data.question2 + " " + data.question3 + " " + data.question4 + " " + data.question7);
                    }
                    setShowPage(!showPage)
                }
            } catch (err) {
                console.log(err);
            }
        }

        fetchingHobbies()
    },[showPage])

    const settingFeedbackPage = () => {
        return(
            <main>
                <h1>Thank you for taking survey</h1>
            </main>
        )
    }

    return(
        <div className="App">
            {showPage? <MySurvey showCompletedPage={ data => onCompletePage(data) }/> : settingFeedbackPage()}
        </div>
    )
}