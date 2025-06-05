import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import i18n, { TRANSLATION_KEYS } from '../constants/localization/localization';
import { FONT_FAMILY_GOTHIC_A1 } from '../constants/fonts';

import PostSelected from '../assets/images/tab/tab_post_selected.svg';
import PostUnselected from '../assets/images/tab/tab_post_unselected.svg';
import LocationSelected from '../assets/images/tab/tab_location_selected.svg';
import LocationUnselected from '../assets/images/tab/tab_location_unselected.svg';
import ProfileSelected from '../assets/images/tab/tab_profile_selected.svg';
import ProfileUnselected from '../assets/images/tab/tab_profile_unselected.svg';
import MenuSelected from '../assets/images/tab/tab_menu_selected.svg';
import MenuUnselected from '../assets/images/tab/tab_menu_unselected.svg';
import { moderateScale } from 'react-native-size-matters';

const TAB_ICONS = [
  {
    key: 'Post',
    selected: PostSelected,
    unselected: PostUnselected,
    label: 'tab_post',
  },
  {
    key: 'Location',
    selected: LocationSelected,
    unselected: LocationUnselected,
    label: 'tab_location',
  },
  {
    key: 'Profile',
    selected: ProfileSelected,
    unselected: ProfileUnselected,
    label: 'tab_profile',
  },
  {
    key: 'Menu',
    selected: MenuSelected,
    unselected: MenuUnselected,
    label: 'tab_menu',
  },
];

export type TabKey = 'Post' | 'Location' | 'Profile' | 'Menu';

interface TabBarProps {
  selectedTab: TabKey;
  onTabPress: (tab: TabKey) => void;
}

const TabBar: React.FC<TabBarProps> = ({ selectedTab, onTabPress }) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}> 
      {TAB_ICONS.map(tab => {
        const Icon = selectedTab === tab.key ? tab.selected : tab.unselected;
        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tabItem}
            onPress={() => onTabPress(tab.key as TabKey)}
            activeOpacity={0.7}
          >
            <Icon width={50} height={50} />
            <Text style={[styles.tabLabel, selectedTab === tab.key && styles.selectedLabel]}>
              {i18n.t(tab.label)}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#D3DBDE',
    borderTopWidth: 1,
    borderTopColor: '#B0B8BC',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 100,
    paddingTop: 20,
    
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: moderateScale(16),
    color: '#222',
    marginTop: 2,
    fontWeight: '400',
    fontFamily: FONT_FAMILY_GOTHIC_A1,
  },
  selectedLabel: {
    fontWeight: '700',
     fontSize: moderateScale(16),
  },
});

export default TabBar;
