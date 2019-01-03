import React from 'react';
import { render } from 'react-dom'; 
import Media from './playlist/components/media';

const app = document.getElementById('app');

render(
<Media
    title="¿Que es HTML5?"
    author="@javiernuber"
    image="./images/covers/html5.jpg"
    type='video'
/>
, app);