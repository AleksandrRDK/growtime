import { useState } from "react";

import "./DayView.sass";

const DayView = () => {
    const [hashtags, setHashtags] = useState([]);
    const [newHashtag, setNewHashtag] = useState("");
    const [showHashPopup, setShowHashPopup] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [activityName, setActivityName] = useState('');
    const [measurementType, setMeasurementType] = useState('minutes');
    const [activityValue, setActivityValue] = useState('');
    const [activities, setActivities] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    const handleAddClickHash = () => {
        setShowHashPopup(!showHashPopup);
    }

    const handleSubmitHashtag = () => {
        const trimmed = newHashtag.trim();
        if (trimmed) {
            setHashtags([...hashtags, trimmed]);
            setNewHashtag("");
            setShowHashPopup(false);
        }
    };

    const handleRemoveHashtag = (indexToRemove) => {
        setHashtags(hashtags.filter((_, i) => i != indexToRemove));
    }

    const handleAddClick = () => {
        setShowPopup(!showPopup);
    }

    const handleSubmit = () => {
        if (!activityName.trim() || !activityValue) {
            setErrorMsg('Пожалуйста, заполните все поля');
            return;
        }

        const newActivity = {
            name: activityName.trim(),
            type: measurementType,
            value: activityValue
        };

        setActivities([...activities, newActivity]);

        setActivityName("");
        setMeasurementType("minutes");
        setActivityValue("");
        setShowPopup(false);
        setErrorMsg('');
    };


    return (
        <div className="day-view">
            <button className="plus" onClick={handleAddClickHash}>+</button>
            {showHashPopup && (
                <div className="popup__hash">
                    <input
                        type="text"
                        placeholder="Название хештега"
                        value={newHashtag}
                        onChange={(e) => setNewHashtag(e.target.value)}
                    />
                    <button onClick={handleSubmitHashtag}>Добавить</button>
                </div>
            )}
            <h2>1 апреля</h2>
            <textarea placeholder="Расскажи, что сегодня сделал"></textarea>
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
            <div className="time-spent">
                <label>Времени потрачено с пользой:</label>
                <button className="add-btn" onClick={handleAddClick}>Добавить</button>

                {showPopup && (
                    <div className="add-popup">
                        <input
                            type="text"
                            placeholder="Название действия (например, чтение)"
                            value={activityName}
                            onChange={(e) => setActivityName(e.target.value)}
                        />
                        <select
                            value={measurementType}
                            onChange={(e) => setMeasurementType(e.target.value)}
                        >
                            <option value="minutes">Минуты</option>
                            <option value="count">Количество</option>
                        </select>
                        <input
                            type="number"
                            placeholder={measurementType === "minutes" ? "Сколько минут?" : "Сколько раз?"}
                            value={activityValue}
                            onChange={(e) => setActivityValue(e.target.value)}
                        />
                        <button onClick={handleSubmit}>Сохранить</button>
                    </div>
                )}
                {errorMsg && <div className="error">{errorMsg}</div>}
                {activities.length > 0 && (
                    <div className="activities-list">
                        {activities.map((act, idx) => (
                            <div key={idx} className="activity-item">
                                <span>{act.name} — {act.value} {act.type === "minutes" ? "минут" : "раз"}</span>
                                <div className="progress-bar" />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="satisfaction">
                <label>На сколько ты доволен саморазвитием сегодня?</label>
                <div className="emoji-picker">
                <span>😡</span>
                <span>😞</span>
                <span>😐</span>
                <span>😊</span>
                <span>😃</span>
                </div>
            </div>
        </div>
    );
};

export default DayView;
