import "./Header.sass";

const Header = ({selectedDay, setSelectedDay, today}) => {

    const goToPreviosDay = () => {
        const newDate = new Date(selectedDay)
        newDate.setDate(newDate.getDate() - 1)
        setSelectedDay(newDate)
    }

    const goTONextDay = () => {
        const newDate = new Date(selectedDay)
        newDate.setDate(newDate.getDate() + 1)
        setSelectedDay(newDate)
    }

    const goToToday = () => {
        setSelectedDay(today);
    }

    return (
        <div className="header">
            <button className="header-button" onClick={() => goToPreviosDay()}>←</button>
            <button className="header-button header-center" onClick={() => goToToday()}>Сегодня</button>
            <button className="header-button" onClick={() => goTONextDay()}>→</button>
        </div>
    );
};

export default Header;
