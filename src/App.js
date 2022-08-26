import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { Routes, Route, Link } from "react-router-dom";
import {mainPage} from "./routes/main-page";
import {characters} from "./routes/characters";
import {races} from "./routes/races";
import {weapons} from "./routes/weapons";
import world from "./routes/world";
import Menu from "./components/Menu/Menu";
import { Main } from './Main';
function App() {
	return (
		<ThemeProvider
			breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
			minBreakpoint="xxs"
		>
			<Main />
			<Menu/>
			<Routes>
				<Route path="/" element={<mainPage/>} />
				<Route path="characters" element={<characters />} />
				<Route path="races" element={<races />} />
				<Route path="weapons" element={<weapons />} />
				<Route path="world" element={<world />} />
				<Route path="characters" element={<characters />} />

			</Routes>
		</ThemeProvider>
	);
}

export default App;
