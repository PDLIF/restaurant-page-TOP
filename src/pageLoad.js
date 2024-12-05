import './styles.css';
import loadButtons from './tabs.js';
import showHomepage from './homepage.js';

const initialLoad = () => {
    loadButtons();
    showHomepage();
}

export default initialLoad;