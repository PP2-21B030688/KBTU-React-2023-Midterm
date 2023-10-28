import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Home from './components/Home/Home';
import CreatePost from './components/CreatePost/CreatePost';
import Footer from "./components/Footer/Footer";
import { useMemo } from 'react';

function App() {
	const posts = [];
	function handlePostCreation(post) {
		posts.push(post);
		console.log(posts);
	}

	return (
		<>
			<div className="App">
				<Header />
				<Footer />

				<Routes>
					<Route path="/" element={<Home posts={posts} />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/create" element={<CreatePost handlePostCreation={handlePostCreation}/>} />
				</Routes>
			</div>
		</>
	);
}

export default App;