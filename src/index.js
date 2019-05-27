import React from 'react';
import ReactDom from 'react-dom';

const title = React.createElement('h1', {}, 'My First React Code');
const paragraph = React.createElement('p', {}, 'Writing some more HTML. Cool Stuff!');
const container = React.createElement('div', {}, [title, paragraph]);
ReactDom.render(
  title,
  document.getElementById('global')
);
