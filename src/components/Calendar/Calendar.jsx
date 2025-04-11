import { useState } from "react";
import "./Calendar.sass";

const months = [
    { name: "Январь", days: 31 },
    { name: "Февраль", days: 28 },
    { name: "Март", days: 31 },
    { name: "Апрель", days: 30 },
    { name: "Май", days: 31 },
    { name: "Июнь", days: 30 },
    { name: "Июль", days: 31 },
    { name: "Август", days: 31 },
    { name: "Сентябрь", days: 30 },
    { name: "Октябрь", days: 31 },
    { name: "Ноябрь", days: 30 },
    { name: "Декабрь", days: 31 }
];

const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

const Calendar = ({ selectedDay, setSelectedDay }) => {
    const currentYear = new Date().getFullYear();
    const [year, setYear] = useState(currentYear);

    const updatedMonths = months.map((month) => {
        if (month.name === "Февраль") {
            return { ...month, days: isLeapYear(year) ? 29 : 28 };
        }
        return month;
    });

    const handleDateClick = (monthIndex, day) => {
        const date = new Date(year, monthIndex, day);
        setSelectedDay(date);
    };

    return (
        <div className="calendar">
            <h3>Выбери дату</h3>
            <input
                type="date"
                onChange={(e) => {
                    const date = new Date(e.target.value);
                    setYear(date.getFullYear());
                    setSelectedDay(date);
                }}
            />

            <div className="months-grid">
                {updatedMonths.map((month, index) => (
                <div key={index} className="month-box">
                    <h4>{month.name}</h4>
                    <div className="days-grid">
                        {Array.from({ length: month.days }, (_, i) => {
                            const day = i + 1;
                            const isSelected =
                                selectedDay.getFullYear() === year &&
                                selectedDay.getMonth() === index &&
                                selectedDay.getDate() === day;

                            return (
                                <span
                                    key={i}
                                    className={`day ${isSelected ? "selected" : ""}`}
                                    onClick={() => handleDateClick(index, day)}
                                >
                                    {day}
                                </span>
                            );
                        })}
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
