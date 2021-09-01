import axios from 'axios';

const headers = {
    'apikey': 'm8bFhVGWZxPG97IZzkLLpUCPNkfPEZQC',
};

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
                    "name": "question1",
                    "title": "User Name"
                },
                {
                    "type": "text",
                    "name": "question2",
                    "title": "E-mail-ID"
                },
                {
                    "type": "radiogroup",
                    "name": "question3",
                    "title": "Gender",
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
                    "name": "question4",
                    "title": "Hobbies",
                    "isRequired": true,
                    "requiredErrorText": "Something went wrong please try again later",
                    "choicesByUrl": {
                        "url": "https://hobbies.saurabhsharma11.repl.co/hobbies",
                        //"url":`https://apim.quickwork.co/ayyub/interview/v1/fetchhobbies,${headers}`,
                        "valueName": "value",
                        "titleName": "value"
                    }
                },
                {
                    "type": "dropdown",
                    "name": "question5",
                    "visibleIf": "{question4} = 'playing'",
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
                    "name": "question6",
                    "visibleIf": "{question4} = 'Reading'",
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
                    "name": "question7",
                    "visibleIf": "{question4} = 'Writing'",
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