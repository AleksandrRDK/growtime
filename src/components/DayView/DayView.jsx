import { useState } from "react";
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import "./DayView.sass";

import HashtagInput from "./HashtagInput/HashtagInput";
import DayDescription from "./DayDescription/DayDescription";
import ActivityInput from "./ActivityInput/ActivityInput";
import SatisfactionPicker from "./SatisfactionPicker/SatisfactionPicker";

const DayView = ({selectedDay}) => {
    const [hashtags, setHashtags] = useState([]);
    const [activities, setActivities] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    const handleRemoveHashtag = (indexToRemove) => {
        setHashtags(hashtags.filter((_, i) => i != indexToRemove));
    }

    const formattedDate = format(selectedDay, 'd MMMM', { locale: ru });

    return (
        <div className="day-view">
            <HashtagInput hashtags={hashtags} setHashtags={setHashtags} setErrorMsg={setErrorMsg}/>
            <h2>{formattedDate}</h2>
            <DayDescription/>
            {hashtags.length > 0 && (
                <div className="hashtags">
                    {hashtags.map((tag, index) => (
                        <span key={index} className="hashtag">
                            #{tag}
                            <button className="remove-btn" onClick={() => handleRemoveHashtag(index)}>×</button>
                        </span>
                    ))}
                </div>
            )}
            <ActivityInput activities={activities} setActivities={setActivities} setErrorMsg={setErrorMsg}/>
            {errorMsg && <div className="error_msg">{errorMsg}</div>}
            <SatisfactionPicker/>
        </div>
    );
};

export default DayView;
