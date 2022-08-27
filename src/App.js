import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { Routes, Route, Link } from "react-router-dom";
import MainPage from "./routes/MainPage";
import Characters from "./routes/Characters";
import Races from "./routes/Races";
import Weapons from "./routes/Weapons";
import World from "./routes/World";
import Enemies from "./routes/Enemies";
import Story from "./routes/Story";
import Menu from "./components/Menu/Menu";
import { Header } from './components/Menu/Header';

function App() {
	return (
		<ThemeProvider
			breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
			minBreakpoint="xxs"
		>
			<Header/>
			{/* <Menu/> */}
			<Routes>
				<Route path="/" element={<MainPage/>} />
				<Route path="/characters" element={<Characters />} />
				<Route path="/races" element={<Races />} />
				<Route path="/weapons" element={<Weapons />} />
				<Route path="/world" element={<World />} />
				<Route path="/enemies" element={<Enemies />} />
				<Route path="/story" element={<Story />} />
			</Routes>
		</ThemeProvider>
	);
}

export default App;
