import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Colors from '../constants/colors';
import RatingIcon from '../assets/images/rating.svg';

interface TripCardProps {
  user: {
    name: string;
    rating: number;
    avatar: string | null;
  };
  date: string;
  time: string;
  from: string;
  to: string;
  distance: string;
  price: string;
}

const TripCard: React.FC<TripCardProps> = ({ user, date, time, from, to, distance, price }) => {
  // Split date into day and month for display
  const [dateDay, dateMonth] = date.split(' ');
  return (
    <View style={styles.tripCard}>
      <View style={styles.tripHeader}>
        <View style={styles.avatarWrapper}>
          {user.avatar ? (
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
          ) : (
            <View style={styles.avatarPlaceholder} />
          )}
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{user.name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RatingIcon width={16} height={16} style={{ marginRight: 2 }} />
            <Text style={styles.userRating}>{user.rating}/5</Text>
          </View>
        </View>
        <View style={styles.dateBox}>
          <Text style={styles.dateDay}>{dateDay}</Text>
          <Text style={styles.dateMonth}>{dateMonth}</Text>
        </View>
      </View>
      <View style={styles.tripDetails}>
        <View style={styles.timeBox}>
          <Text style={styles.timeText}>{time}</Text>
        </View>
        <View style={styles.routeBox}>
          <Text style={styles.routeFrom}>{from}</Text>
        </View>
      </View>
      <View style={styles.tripDetails}>
        <View style={styles.timeBox}>
          <Text style={styles.timeText}>{time}</Text>
        </View>
        <View style={styles.routeBox}>
          <Text style={styles.routeFrom}>{to}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>{distance}</Text>
          <Text style={styles.infoText}>{price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tripCard: {
    backgroundColor: Colors.blue0A1C26,
    borderRadius: 16,
    marginBottom: 16,
    padding: 12,
    marginHorizontal: 16,

  },
  tripHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatarWrapper: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#e6ecf0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#c9d8df',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontWeight: '600',
    fontSize: 16,
    color: Colors.white,
  },
  userRating: {
    fontSize: 15,
    color: Colors.white,
  },
  dateBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    // borderRadius: 8,
    // backgroundColor: '#E6EFF4',
  },
  dateDay: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.white,
  },
  dateMonth: {
    fontSize: 18,
    color: Colors.white,
  },
  tripDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  timeBox: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 6,
    minWidth: 48,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D3DBDE',
    marginRight: 8,
  },
  timeText: {
    fontWeight: 'bold',
    color: Colors.textPrimary,
    fontSize: 15,
  },
  routeBox: {
    flex: 1,
    marginRight: 8,
  },
  routeFrom: {
    fontSize: 14,
    color: Colors.white,
    fontWeight: '500',
  },
  routeTo: {
    fontSize: 14,
    color: Colors.white,
  },
  infoBox: {
    alignItems: 'flex-end',
  },
  infoText: {
    fontSize: 13,
    color: Colors.textSecondary,
    fontWeight: '500',
  },
});

export default TripCard;
