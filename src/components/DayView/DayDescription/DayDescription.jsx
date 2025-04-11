import { useState } from "react";
import './DayDescription.sass';

const DayDescription = () => {
    const [description, setDescription] = useState("");

    return (
        <textarea
            className="day-description"
            placeholder="Расскажи, что сегодня сделал"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
    );
};

export default DayDescription;
