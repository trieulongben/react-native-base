import COLORS from '@assets/color';
import {IMAGES} from '@assets/images';
import LocalImage from '@components/base/image/LocalImage';
import {sizeScale} from '@utils/dimension';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  EHabitsDetailElement,
  THabitsDetailCard,
  THabitsDetailElement,
  THabitsDetailImage,
} from '../habits';
import CheckListDetailCardElement from './card-elements/CheckListDetailElement';

interface ICheckListDetailElementProps {
  type: EHabitsDetailElement;
  data: THabitsDetailElement;
}

interface ICheckListDetailElementCardProps {
  data: THabitsDetailCard;
}

const CheckListDetailElementCard = ({
  data,
}: ICheckListDetailElementCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{data.title}</Text>
      {data.elements.map((item, idx) => {
        return (
          <CheckListDetailCardElement
            key={`${item.type} - ${idx}`}
            data={item}
          />
        );
      })}
    </View>
  );
};

interface ICheckListDetailElementImageProps {
  data: THabitsDetailImage;
}

const CheckListDetailElementImage = ({
  data,
}: ICheckListDetailElementImageProps) => {
  const {width, height} = Image.resolveAssetSource(IMAGES[data.image]);

  const imageStyle = StyleSheet.compose(styles.image, {
    aspectRatio: width / height,
  });

  return (
    <LocalImage resizeMode="cover" style={imageStyle} source={data.image} />
  );
};

const CheckListDetailElement = ({type, data}: ICheckListDetailElementProps) => {
  const mapData = () => {
    switch (type) {
      case EHabitsDetailElement.IMAGE:
        return data as THabitsDetailImage;
      case EHabitsDetailElement.CARD:
        return data as THabitsDetailCard;
    }
  };

  const renderElement = () => {
    const elementData = mapData();
    switch (type) {
      case EHabitsDetailElement.IMAGE:
        return (
          <CheckListDetailElementImage
            data={elementData as THabitsDetailImage}
          />
        );
      case EHabitsDetailElement.CARD:
        return (
          <CheckListDetailElementCard data={elementData as THabitsDetailCard} />
        );
    }
  };
  return <View style={styles.container}>{renderElement()}</View>;
};

const styles = StyleSheet.create({
  container: {},
  image: {
    resizeMode: 'cover',
    width: '100%',
  },
  card: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.outline,
    padding: sizeScale(16),
    gap: sizeScale(8),
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Inter-SemiBold',
    color: COLORS.onSurfaceDark,
  },
  description_card: {},
});

export default CheckListDetailElement;
