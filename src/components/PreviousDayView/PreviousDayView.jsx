import "./PreviousDayView.sass";

import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const PreviousDayView = ({selectedDay}) => {
    const prevDate = new Date(selectedDay);
    prevDate.setDate(prevDate.getDate() - 1);
    const formattedDate = format(prevDate, 'd MMMM', { locale: ru });

    return (
        <div className="previous-day-view">
            <h2>{formattedDate}</h2>

            <div className="readonly-section">
                <label>Что ты сделал:</label>
                <p>Почитал книгу, сделал зарядку и выучил 10 слов на английском.</p>
            </div>

            <div className="readonly-section">
                <label>Времени потрачено с пользой:</label>
                <p>2.5 часа</p>
            </div>

            <div className="readonly-section">
                <label>Уровень удовлетворенности:</label>
                <div className="emoji-static">
                    <span>😊</span>
                </div>
            </div>
        </div>
    );
};

export default PreviousDayView;