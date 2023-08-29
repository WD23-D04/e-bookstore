import './styles/main.scss';
import { header } from './components/header';
import { getCurrentPage } from './utilities/router';

// const getPathname = JSON.stringify(window.location.pathname) || '/';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /* html */ `

   ${header()}
    ${getCurrentPage()}
`;
