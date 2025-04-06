import Header from "../Header/Header";
import PreviousDayView from "../PreviousDayView/PreviousDayView";
import DayView from "../DayView/DayView";
import ComparisonBox from "../ComparisonBox/ComparisonBox";
import Calendar from "../Calendar/Calendar";

import './App.sass';

function App() {
	return (
		<div className="app">
			<div className="app__wrapper">
				<Header />
				<div className="main-content">
					<PreviousDayView/>
					<DayView />
					<ComparisonBox />
				</div>
			</div>
			<Calendar />
		</div>
	);
}

export default App;