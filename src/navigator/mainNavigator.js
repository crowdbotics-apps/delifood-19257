import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps85534Navigator from '../features/Maps85534/navigator';
import Add-Item85533Navigator from '../features/Add-Item85533/navigator';
import Maps85529Navigator from '../features/Maps85529/navigator';
import UserProfile85525Navigator from '../features/UserProfile85525/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps85534: { screen: Maps85534Navigator },
Add-Item85533: { screen: Add-Item85533Navigator },
Maps85529: { screen: Maps85529Navigator },
UserProfile85525: { screen: UserProfile85525Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
