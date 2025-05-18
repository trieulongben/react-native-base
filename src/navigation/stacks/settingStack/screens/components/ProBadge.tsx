import COLORS from '@assets/color';
import {SvgIcon} from '@components/base';
import {sizeScale} from '@utils/dimension';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ProBadgeComponent = () => {
  return (
    <View style={styles.proBadge}>
      <View style={styles.proBadgeLeft}>
        <SvgIcon name="heartOutlineIcon" size={sizeScale(28)} fill="primary" />
        <View style={styles.proBadgeTextContainer}>
          <Text style={styles.proBadgeTitle}>Pro Version</Text>
          <Text style={styles.proBadgeText}>
            Unlimited access to all features
          </Text>
        </View>
      </View>

      <SvgIcon
        name="chevronRightWhiteIcon"
        size={sizeScale(23)}
        fill="primary"
      />
    </View>
  );
};

export const ProBadge = React.memo(ProBadgeComponent);

const styles = StyleSheet.create({
  proBadge: {
    padding: sizeScale(8),
    borderRadius: sizeScale(13.7),
    backgroundColor: COLORS.primary,
    paddingHorizontal: sizeScale(16),
    paddingVertical: sizeScale(12),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  proBadgeLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  proBadgeTitle: {
    fontSize: 16,
    lineHeight: 23,
    fontWeight: '500',
    color: COLORS.onPrimary,
    fontFamily: 'Poppins',
  },
  proBadgeText: {
    fontSize: 16,
    lineHeight: 23,
    fontWeight: '400',
    color: COLORS.onPrimary,
    fontFamily: 'Poppins',
  },
  proBadgeTextContainer: {
    flexDirection: 'column',
    marginLeft: sizeScale(18.28),
  },
});
