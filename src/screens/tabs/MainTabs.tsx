import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { JSX, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import TabBar, { TabKey } from '../../components/TabBar';
import { RouteParamList } from '../../navigation/routes.type';
import LocationScreen from './LocationScreen';
import MenuScreen from './MenuScreen';
import PostScreen from './PostScreen';
import ProfileScreen from './ProfileScreen';

type Props = NativeStackScreenProps<RouteParamList, 'MainTabs'>;
const TAB_SCREENS: Record<TabKey, (props: Props) => JSX.Element> = {
  Post: ({ navigation, route }) => <PostScreen navigation={navigation} route={route} />, // Using the actual Post screen
  Location: () => <LocationScreen />, // Replace with your actual Location screen
  Profile: ({ navigation, route }) => <ProfileScreen navigation={navigation} route={route} />, // Use the new ProfileScreen
  Menu: () => <MenuScreen />, // Use the new MenuScreen, no props needed
};

const MainTabs: React.FC<Props> = ({ navigation, route }) => {
  const [selectedTab, setSelectedTab] = useState<TabKey>('Post');
  const ScreenComponent = TAB_SCREENS[selectedTab];

  return (
    <View style={styles.container}>
      <View style={styles.screenContainer}>
        <ScreenComponent navigation={navigation} route={route} />
      </View>
      <TabBar selectedTab={selectedTab} onTabPress={setSelectedTab} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  screenContainer: {
    flex: 1,
  },
});

export default MainTabs;
