import './fonts/MonumentExtended-Regular.otf'
import './fonts/MonumentExtended-Ultrabold.otf'
import './index.css';
import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent("App", () => App);
AppRegistry.runApplication("App", {
    rootTag: document.getElementById("react-root")
});
