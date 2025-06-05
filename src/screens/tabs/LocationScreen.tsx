import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../constants/colors';
import TripCard from '../../components/TripCard';
import ArrowDown from '../../assets/images/arrow_down.svg';
import Calender from '../../assets/images/calender.svg';
import Coins from '../../assets/images/coins.svg';
import LocationSmall from '../../assets/images/location_small.svg';

const trips = [
    {
        id: 1,
        user: {
            name: 'Martin Alba',
            rating: 4.8,
            avatar: null,
        },
        date: '10 jun',
        time: '07:45',
        from: 'Avenida Alberto Alcocer, 35',
        to: 'Thales Alenia Space',
        distance: '21km',
        price: '€ 10,34',
    },
    {
        id: 2,
        user: {
            name: 'Maria Castillo',
            rating: 5.0,
            avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
        },
        date: '10 jun',
        time: '07:45',
        from: 'Plaza Castilla',
        to: 'GMV, Tres Cantos',
        distance: '21km',
        price: '0,89€',
    },
    {
        id: 3,
        user: {
            name: 'John Reto',
            rating: 4.0,
            avatar: null,
        },
        date: '10 jun',
        time: '07:50',
        from: 'Nuevos Ministerios',
        to: 'Tres Cantos',
        distance: '23km',
        price: '0,74€',
    },
];

const LocationScreen = () => {
    return (
        <LinearGradient colors={[Colors.gradientStart, Colors.gradientEnd]} style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.mainContent}>
                    <View style={styles.formContainer}>
                        {/* Left side icons */}
                        <View style={styles.iconLine}>
                            <View style={styles.blackCircle} />
                            <ArrowDown width={28} height={28} />
                            <LocationSmall width={28} height={28} />
                        </View>

                        {/* Right side inputs */}
                        <View style={styles.inputsContainer}>
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Avenida Alberto Alcocer, 30"
                                    placeholderTextColor="#000"
                                />
                            </View>
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Thales Alenia Space"
                                    placeholderTextColor="#000"
                                />
                            </View>

                        </View>
                    </View>
                    <View style={styles.dateRow}>
                        <Calender width={28} height={28} />
                        <View style={[styles.inputWrapper, styles.dateInput]}>
                            <TextInput
                                style={[styles.input, styles.dateInputText]}
                                placeholder="10/06/2024"
                                placeholderTextColor="#000"
                            />
                        </View>
                        <View style={styles.priceContainer}>
                            <Coins width={28} height={28} style={styles.coinIcon} />
                            <Text style={styles.priceText}>€ 10,34</Text>
                        </View>
                    </View>

                    {/* Filter Button */}
                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterText}>Filtros</Text>
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
    safeArea: {
        flex: 1,
        marginTop: 20,
    },
    headerTitle: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 16,
        marginTop: 8,
        marginBottom: 16,
    },
    mainContent: {
        marginHorizontal: 16,
    },
    formContainer: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    iconLine: {
        width: 24,
        marginRight: 12,
        alignItems: 'center',
        paddingTop: 12,
        justifyContent: 'space-between',
        height: 100
    },
    blackCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#000',
    },

    inputsContainer: {
        flex: 1,
        gap: 8,
    },
    inputWrapper: {
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 12,
    },
    input: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 12,
        fontSize: 16,
        color: '#000',
    },
  
    dateInputText: {
        paddingLeft: 8,
    },
    dateRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: 16,
    },
    dateInput: {
        flex: 1,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    coinIcon: {
        marginRight: 4,
    },
    priceText: {
        color: Colors.blue0A1C26,
        fontSize: 16,
        fontWeight: 'bold',
    },
    filterButton: {
        backgroundColor: '#0A1C26',
        borderRadius: 24,
        paddingVertical: 12,
        paddingHorizontal: 24,
        alignSelf: 'center',
        marginVertical: 8,
    },
    filterText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
    scrollArea: {
        flex: 1,
        marginTop: 16,
        paddingHorizontal: 16,
    },
});

export default LocationScreen;
