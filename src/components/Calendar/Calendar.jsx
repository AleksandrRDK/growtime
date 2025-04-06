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

    const Calendar = () => {
    const currentYear = new Date().getFullYear();
    const [year, setYear] = useState(currentYear);

    const updatedMonths = months.map((month) => {
        if (month.name === "Февраль") {
            return { ...month, days: isLeapYear(year) ? 29 : 28 };
        }
        return month;
    });

    return (
        <div className="calendar">
            <h3>Выбери дату</h3>
            <input
                type="date"
                onChange={(e) => {
                const selectedYear = new Date(e.target.value).getFullYear();
                setYear(selectedYear);
                }}
            />

            <div className="months-grid">
                {updatedMonths.map((month, index) => (
                <div key={index} className="month-box">
                    <h4>{month.name}</h4>
                    <div className="days-grid">
                    {Array.from({ length: month.days }, (_, i) => (
                        <span key={i} className="day">{i + 1}</span>
                    ))}
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
