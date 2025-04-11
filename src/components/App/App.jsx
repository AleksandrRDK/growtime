import { useState } from "react";

import Header from "../Header/Header";
import PreviousDayView from "../PreviousDayView/PreviousDayView";
import DayView from "../DayView/DayView";
import ComparisonBox from "../ComparisonBox/ComparisonBox";
import Calendar from "../Calendar/Calendar";

import './App.sass';

function App() {
	const today = new Date();
	const [selectedDay, setSelectedDay] = useState(today);

	return (
		<div className="app">
			<div className="app__wrapper">
				<Header
					selectedDay = {selectedDay}
					setSelectedDay = {setSelectedDay}
					today = {today}
				/>
				<div className="main-content">
					<PreviousDayView selectedDay = {selectedDay}/>
					<DayView selectedDay = {selectedDay}/>
					<ComparisonBox />
				</div>
			</div>
			<Calendar
				selectedDay={selectedDay}
				setSelectedDay={setSelectedDay}
			/>
		</div>
	);
}

export default App;