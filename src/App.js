import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { Routes, Route, } from "react-router-dom";
import MainPage from "./routes/MainPage";
import Characters from "./routes/Characters";
import Androids from "./routes/Androids";
import LongSwords from "./routes/LongSwords";
import World from "./routes/World";
import Enemies from "./routes/Enemies";
import Story from "./routes/Story";
import Game from "./routes/Game";
import ShortSwords from "./routes/ShortSwords";
import Bracers from "./routes/ Bracers";
import Lance from "./routes/Lance";
import Machine from "./routes/Machine";
import Aliens from "./routes/Aliens";
import { Header } from './components/Menu/Header';

function App() {
	return (
		<ThemeProvider
			breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
			minBreakpoint="xxs"
		>
			<Header/>

			<Routes>
				<Route path="/" element={<MainPage/>} />
				<Route path="/characters" element={<Characters />} />
				<Route path="/androids" element={<Androids />} />
				<Route path="/longswords" element={<LongSwords />} />
				<Route path="/shortswords" element={<ShortSwords/>}/>
				<Route path="/bracers" element ={<Bracers/>}/>
				<Route path="/world" element={<World />} />
				<Route path="/enemies" element={<Enemies />} />
				<Route path="/story" element={<Story />} />
				<Route path="/lance" element={<Lance/>}/>
				<Route path="/game" element={<Game />} />
				<Route path="/aliens" element={<Aliens/>}/>
				<Route path="/machines" element={<Machine/>}/>
			</Routes>
		</ThemeProvider>
	);
}

export default App;
