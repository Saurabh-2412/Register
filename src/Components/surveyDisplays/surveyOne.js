import React,{ useState, useCallback } from 'react';
import { MySurvey } from '../surveyTypes/surveyTypeOne';
import axios from 'axios';

export const SurveyOne = () => {
    const [ showPage, setShowPage] = useState(true);
    const [ loader, setLoader ] = useState("Loading...");

    const onCompletePage = useCallback((data,loader) => {
        const headers = {
            'apikey': 'm8bFhVGWZxPG97IZzkLLpUCPNkfPEZQC',
            'Content-Type': 'application/json'
        };
        
        async function fetchingHobbies () {
            try {
                const { status } = await axios.post("https://apim.quickwork.co/ayyub/interview/v1/submitdata",data,{headers});
                alert(loader)
                if(status === 200){
                    if(data.playingsubhobbies !== undefined){
                        alert( data.name + " " + data.email + " " + data.gender + " " + data.hobbies + " " + data.playingsubhobbies);
                    } else if(data.readingsubhobbies !== undefined){
                        alert(data.name + " " + data.email + " " + data.gender + " " + data.hobbies + " " + data.readingsubhobbies );
                    } else if(data.writingsubhobbies !== undefined){
                        alert(data.name + " " + data.email + " " + data.gender + " " + data.hobbies + " " + data.writingsubhobbies);
                    }
                    setShowPage(!showPage)
                    setLoader();
                }
            } catch (err) {
                alert("Something went wrong, please try again later..!");
                console.log(err);
            }
        }

        fetchingHobbies()
    },[showPage])

    const settingFeedbackPage = () => {

        setTimeout(() => {
            setShowPage(true)
        }, 3000);

        return(
            <div>
                <main>
                    <h1>Thank you for taking survey</h1>
                </main>
            </div>
        )
    }

    return(
        <div className="App">
            {showPage? <MySurvey showCompletedPage={ data => onCompletePage(data,loader) }/> : settingFeedbackPage()}
        </div>
    )
}