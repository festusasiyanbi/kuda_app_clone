import React from 'react';
import type {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type IconProps = PropsWithChildren<{
  name: string;
  color: string;
}>;

const Icons = ({name, color}: IconProps) => {
  return <Icon name={name} size={20} color={color} />;
};

export default Icons;
