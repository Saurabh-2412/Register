import axios from 'axios';

const headers = {
    'apikey': 'm8bFhVGWZxPG97IZzkLLpUCPNkfPEZQC',
};

//const URL = `("https://apim.quickwork.co/ayyub/interview/v1/fetchhobbies",${headers})`

async function fetchingHobbies () {
    try {
        const response = await axios.get("https://apim.quickwork.co/ayyub/interview/v1/fetchhobbies",{headers});
        console.log("response",response.data.hobbies);
        return response.data.hobbies.value
    } catch (err) {
        console.log(err);
    }
}

fetchingHobbies()

export const json =  {
    "title":"Register Yourself with QuickWork",
    "description":"Register yourself with quickwork and subscribe with newsletter and be updated with QICK WORK transformation.",
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "text",
                    "name": "name",
                    "title": "User Name",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "email",
                    "title": "E-mail-ID",
                    "isRequired": true
                },
                {
                    "type": "radiogroup",
                    "name": "gender",
                    "title": "Gender",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "male",
                            "text": "Male"
                        },
                        {
                            "value": "female",
                            "text": "Female"
                        },
                        {
                            "value": "transgender",
                            "text": "TransGender"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "hobbies",
                    "title": "Hobbies",
                    "isRequired": true,
                    "requiredErrorText": "Something went wrong please try again later",
                    "choicesByUrl": {
                        "url": "https://hobbies.saurabhsharma11.repl.co/hobbies",
                        //"url":"https://apim.quickwork.co/ayyub/interview/v1/fetchhobbies",headers:{ 'apikey': 'm8bFhVGWZxPG97IZzkLLpUCPNkfPEZQC' },
                        /* "headers" : {
                            'Content-Type': 'application/json',
                            'apikey': 'm8bFhVGWZxPG97IZzkLLpUCPNkfPEZQC'
                        }, */   
                        //"url":URL,
                        "valueName": "value",
                        "titleName": "value"
                    }
                },
                {
                    "type": "dropdown",
                    "name": "playingsubhobbies",
                    "visibleIf": "{hobbies} = 'playing'",
                    "title": "Playing Sub Category",
                    "choices": [
                        {
                            "value": "chess",
                            "text": "Chess"
                        },
                        {
                            "value": "cricket",
                            "text": "Cricket"
                        },
                        {
                            "value": "football",
                            "text": "Football"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "readingsubhobbies",
                    "visibleIf": "{hobbies} = 'Reading'",
                    "title": "Reading Sub Category",
                    "choices": [
                        {
                            "value": "blogs",
                            "text": "Blogs"
                        },
                        {
                            "value": "articles",
                            "text": "Articles"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "writingsubhobbies",
                    "isRequired": true,
                    "visibleIf": "{hobbies} = 'Writing'",
                    "title": "Writing Sub Category",
                    "choices": [
                        {
                            "value": "newsletter",
                            "text": "News Letter"
                        },
                        {
                            "value": "content",
                            "text": "Content"
                        }
                    ]
                }
            ]
        }
    ]
}