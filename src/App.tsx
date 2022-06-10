import React, { useState } from 'react';
import Header from './components/shared/Header';
import SideMenu from './components/shared/SideBar';
import ActionButtons from './components/shared/ActionButtons';
import tw from 'twin.macro';

import { GetApertures } from './services/aperture.services';

import axios from 'axios'

function App() {
	return (
		<>
			<Header />
			<main tw='bg-gray-200 h-screen'>
				<SideMenu />
				<ActionButtons />
			</main>
		</>
	);
}

export default App;
