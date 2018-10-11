/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import login from './login'
import {name as appName} from './app.json';
import main from './Componens/main';

AppRegistry.registerComponent(appName, () => login);
