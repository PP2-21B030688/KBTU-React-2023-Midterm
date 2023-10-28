import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Home from './components/Home/Home';
import CreatePost from './components/CreatePost/CreatePost';
import UpdatePost from "./components/UpdatePost/UpdatePost";
import Footer from "./components/Footer/Footer";
import { useMemo } from 'react';

function App() {
	const posts = [];

	function handlePostCreation(post) {
		posts.push(post);
		console.log(posts);
	}

	function handlePostUpdate(post) {
		for(let i = 0; i < posts.length; i++) {
			if(posts[i].title === post.title && posts[i].content === post.content) {
				posts[i].title = post.title;
				posts[i].content = post.content;
				break;
			}
		}
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
					<Route path="/update" element={<UpdatePost handlePostUpdate={handlePostUpdate}/>} />
				</Routes>
			</div>
		</>
	);
}

export default App;