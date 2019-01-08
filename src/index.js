import React from 'react';
import { render } from 'react-dom';
import PlayList from './playlist/components/playlist';
import data from './api.json';

const app = document.getElementById('app');

render(<PlayList data={data}/>, app);
