import "./Header.sass";

const Header = () => {
    return (
        <div className="header">
            <button className="header-button">←</button>
            <button className="header-button header-center">Сегодня</button>
            <button className="header-button">→</button>
        </div>
    );
};

export default Header;
