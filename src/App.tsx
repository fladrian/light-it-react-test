import React, { useState } from 'react';
import Header from './components/Header/Header';
import SideMenu from './components/Sidebar/Sidebar';
import ActionButtons from './components/ActionButtons/ActionButtons';
import tw from 'twin.macro';

function App() {
	return (
		<>
			<Header />
			<main tw='bg-gray-200'>
				<SideMenu />
				<ActionButtons />
			</main>
		</>
	);
}

export default App;
