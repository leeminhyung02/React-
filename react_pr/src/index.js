import React from 'react';
import ReactDOM from 'react-dom/client';
import Link from './Link';
import { JSXpr1} from './JSXpr';
import {Child, Parent} from './PropsPr/Child';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Link/>
    <JSXpr1/>
    <Parent/>
    <Child/>
  </React.StrictMode>
);