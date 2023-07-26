import axios from "axios";
import { ActionTypes } from "../constans/actionType";

export const GetDataStart = () => ({
    type: ActionTypes.GET_DATA_START,
    payload: true,
});


export const getAnswer = (prompt) => async (dispatch) => {
    //asenkron
    const options = {
        method: 'GET',
        url: 'https://chatgpt-api9.p.rapidapi.com/ask',
        params: {
            question: `${prompt}`
        },
        headers: {
            'X-RapidAPI-Key': '4987035418mshdebef18890f1b4ap14ca4ajsn0f715a51bec2',
            'X-RapidAPI-Host': 'chatgpt-api9.p.rapidapi.com'
        }
    };

    const res = await axios.request(options);

    dispatch({
        type: ActionTypes.GET_ANSWER,
        payload: {prompt, answer:res.data.answer}
    })
}