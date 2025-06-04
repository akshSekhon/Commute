import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../constants/colors';
import FilterMenuIcon from '../../assets/images/filter_menu.svg';
import i18n, { TRANSLATION_KEYS } from '../../constants/localization/localization';
import TripCard from '../../components/TripCard';

const trips = [
    {
        id: 1,
        user: {
            name: 'El Mallorco',
            rating: 4.8,
            avatar: null,
        },
        date: '10 jun',
        time: '07:45',
        from: 'Plaza Castilla',
        to: 'GMV, Tres Cantos',
        distance: '21km',
        price: '0,56€',
        status: 'cancelled',
        isMorning: true,
    },
    {
        id: 2,
        user: {
            name: 'El Gomeras',
            rating: 4.8,
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        },
        date: '10 jun',
        time: '07:45',
        from: 'Plaza Castilla',
        to: 'GMV, Tres Cantos',
        distance: '21km',
        price: '0,56€',
        status: 'cancelled',
        isMorning: false,
    },
];

const MenuScreen = () => {
    const [activeTab, setActiveTab] = useState<'passenger' | 'driver'>('passenger');
    const [indicatorX] = useState(new Animated.Value(0));
    const [activeHeaderTab, setActiveHeaderTab] = useState<'scheduled' | 'finished' | 'cancelled'>('scheduled');

    const handleTabPress = (tab: 'passenger' | 'driver') => {
        setActiveTab(tab);
        Animated.spring(indicatorX, {
            toValue: tab === 'passenger' ? 0 : 1,
            useNativeDriver: false,
        }).start();
    };

    // Interpolate indicator position
    const indicatorTranslate = indicatorX.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '100%'],
    });

    return (
        <LinearGradient
            colors={[Colors.gradientStart, Colors.gradientEnd]}
            style={{ flex: 1 }}
        >
            <View style={styles.topBarContainer}>
                <SafeAreaView style={styles.topBarTabsRow}>
                    <TouchableOpacity style={styles.filterIconWrapper}>
                        <FilterMenuIcon width={32} height={32} />
                    </TouchableOpacity>
                    <View style={styles.topBarTabs}>
                        <TouchableOpacity
                            style={activeTab === 'passenger' ? styles.topBarTabActive : styles.topBarTab}
                            onPress={() => handleTabPress('passenger')}
                        >
                            <Text style={activeTab === 'passenger' ? styles.topBarTabActiveText : styles.topBarTabText}>
                                {i18n.t(TRANSLATION_KEYS.menu_passenger)}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={activeTab === 'driver' ? styles.topBarTabActive : styles.topBarTab}
                            onPress={() => handleTabPress('driver')}
                        >
                            <Text style={activeTab === 'driver' ? styles.topBarTabActiveText : styles.topBarTabText}>
                                {i18n.t(TRANSLATION_KEYS.menu_driver)}
                            </Text>
                        </TouchableOpacity>
                        <Animated.View
                            style={[
                                styles.segmentBar,
                                {
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '50%',
                                    transform: [{ translateX: indicatorTranslate }],
                                },
                            ]}
                        />
                    </View>
                </SafeAreaView>
            </View>
            <SafeAreaView style={{ flex: 1 }}>

                <View style={styles.headerTabs}>
                    <TouchableOpacity onPress={() => setActiveHeaderTab('scheduled')}>
                        <Text style={[styles.tab, activeHeaderTab === 'scheduled' && styles.tabActive]}>{i18n.t(TRANSLATION_KEYS.menu_scheduled)}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setActiveHeaderTab('finished')}>
                        <Text style={[styles.tab, activeHeaderTab === 'finished' && styles.tabActive]}>{i18n.t(TRANSLATION_KEYS.menu_finished)}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setActiveHeaderTab('cancelled')}>
                        <Text style={[styles.tab, activeHeaderTab === 'cancelled' && styles.tabActive]}>{i18n.t(TRANSLATION_KEYS.menu_cancelled)}</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.scrollArea}>
                    {trips.map(trip => (
                        <TripCard
                            key={trip.id}
                            user={trip.user}
                            date={trip.date}
                            time={trip.time}
                            from={trip.from}
                            to={trip.to}
                            distance={trip.distance}
                            price={trip.price}
                        />
                    ))}
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topBarContainer: {
        backgroundColor: Colors.gradientEnd,
    },
    topBarTabsRow: {
        flexDirection: 'column',
    },
    topBarTabs: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    topBarTab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    topBarTabText: {
        fontSize: 18,
        color: Colors.textSecondary,
        fontWeight: '400',
    },
    topBarTabActive: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    topBarTabActiveText: {
        fontSize: 18,
        color: Colors.textPrimary,
        fontWeight: '500',
    },
    filterIconWrapper: {
        marginLeft: 12,
        marginRight: 4,
        alignSelf: 'flex-end',
    },
    segmentBar: {
        height: 4,
        backgroundColor: '#0A1C26',
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2,
        // marginTop: 8,
        marginLeft: 'auto',
        marginRight: 4,
        // width: 40,
    },
    headerTabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        marginBottom: 10,
    },
    tab: {
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 16,
        backgroundColor: 'rgba(10, 28, 38, 0.7)',
        color: Colors.white,
        fontWeight: '500',
        fontSize: 14,
        marginHorizontal: 2,
    },
    tabActive: {
        backgroundColor: Colors.blue0A1C26,
        color: Colors.white,
        fontWeight: 'bold',
    },
    scrollArea: {
        flex: 1,
        paddingHorizontal: 10,
    },
});

export default MenuScreen;
