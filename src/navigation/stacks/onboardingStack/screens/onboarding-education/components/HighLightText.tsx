import COLORS from '@assets/color';
import {sizeScale} from '@utils/dimension';
import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface IHighlightText {
  text: string;
}

const HighlightText = ({text}: IHighlightText) => {
  const textStyle = (input: string) => {
    const regex = /<high>(.*?)<\/high>/g;
    const parts = [];
    let match;
    let lastIndex = 0;

    while ((match = regex.exec(input)) !== null) {
      if (match.index > lastIndex) {
        parts.push({
          text: input.substring(lastIndex, match.index),
          isHighlight: false,
        });
      }
      parts.push({text: match[1], isHighlight: true});
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < input.length) {
      parts.push({text: input.substring(lastIndex), isHighlight: false});
    }

    return parts.map((part, index) =>
      part.isHighlight ? (
        <Text key={`${part.text}-${index}`} style={styles.highlight}>
          {part.text}
        </Text>
      ) : (
        <Text key={`${part.text}-${index}`} style={styles.title}>
          {part.text}
        </Text>
      ),
    );
  };

  return <Text>{textStyle(text)}</Text>;
};

export default HighlightText;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    paddingHorizontal: sizeScale(20),
    paddingTop: sizeScale(78),
  },
  logo: {
    width: sizeScale(86),
    height: sizeScale(86),
  },
  title: {
    fontSize: sizeScale(28),
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
    color: COLORS.onSurface,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    flex: 1,
  },
  highlight: {
    fontSize: sizeScale(28),
    fontFamily: 'Inter-Bold',
    fontWeight: '700',
    color: COLORS.primary,
    textAlign: 'center',
  },
});
