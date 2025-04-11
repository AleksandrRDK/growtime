import { useState } from "react";

import './ActivityInput.sass';

const ActivityInput = ({activities, setActivities, setErrorMsg}) => {
    const [showPopup, setShowPopup] = useState(false);
    const [activityName, setActivityName] = useState('');
    const [measurementType, setMeasurementType] = useState('minutes');
    const [activityValue, setActivityValue] = useState('');

    const handleAddClick = () => {
        setShowPopup(!showPopup);
        setErrorMsg('');
    }

    const handleSubmit = () => {
        const nameTrimmed = activityName.trim()
        const valueNumber = parseFloat(activityValue)

        if (!nameTrimmed) {
            setErrorMsg("Название действия не может быть пустым.")
            return
        }

        if (!activityValue || isNaN(valueNumber) || valueNumber <= 0) {
            setErrorMsg("Введите корректное значение больше нуля.")
            return
        }

        const newActivity = {
            name: nameTrimmed,
            type: measurementType,
            value: valueNumber
        }

        setActivities([...activities, newActivity])
        setActivityName("")
        setMeasurementType("minutes")
        setActivityValue("")
        setShowPopup(false)
        setErrorMsg("")
    }

    const handleRemoveActiveItem = (indexToremove) => {
        setActivities(activities.filter((_, i) => i != indexToremove));
    }

    return(
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
            {activities.length > 0 && (
                <div className="activities-list">
                    {activities.map((act, idx) => (
                        <div key={idx} className="activity-item">
                            <span>{act.name} — {act.value} {act.type === "minutes" ? "мин" : "раз"}</span>
                            <button className="activity-item__remove-btn"
                                onClick={() => handleRemoveActiveItem(idx)}>x
                            </button>
                            <div className="progress-bar" />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ActivityInput;