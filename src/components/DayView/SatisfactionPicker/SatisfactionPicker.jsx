import './SatisfactionPicker.sass';

const SatisfactionPicker = () => {
    return (
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
    )
}

export default SatisfactionPicker;