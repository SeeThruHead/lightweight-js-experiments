import Clock from './app';
import { h, render } from 'preact';
import { createStore } from 'redux';

const store = createStore(() => ({ bob: 'bob' }));

render(
  <Clock />,
  document.getElementById('app')
);
