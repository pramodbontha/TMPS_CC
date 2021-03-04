import "./App.css";
import * as autobahn from "autobahn";
import Journals from "./components/Journals/Journals";

function App() {
	const connection = new autobahn.Connection({
		url: "ws://testassignment.filmdatabox.com:8249/ws",
		realm: "democontrol",
	});
	return (
		<div className="App">
			<Journals connection={connection} />
		</div>
	);
}

export default App;
