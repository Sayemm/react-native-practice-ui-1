import React, {FC} from 'react';
import AntDesignI from 'react-native-vector-icons/AntDesign';
import EntypoI from 'react-native-vector-icons/Entypo';
import EvilIconsI from 'react-native-vector-icons/EvilIcons';
import FeatherI from 'react-native-vector-icons/Feather';
import FontAwesomeI from 'react-native-vector-icons/FontAwesome';
import FontAwesome5I from 'react-native-vector-icons/FontAwesome5';
import FoundationI from 'react-native-vector-icons/Foundation';
import IoniconsI from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIconsI from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIconsI from 'react-native-vector-icons/MaterialIcons';
import OcticonsI from 'react-native-vector-icons/Octicons';
import SimpleLineIconsI from 'react-native-vector-icons/SimpleLineIcons';
import ZocialI from 'react-native-vector-icons/Zocial';

interface IconProps {
  name: string;
  color?: string;
  size: number;
  style?: object;
}

const MaterialCommunityIcons: FC<IconProps> = props => (
  <MaterialCommunityIconsI {...props} />
);
const SimpleLineIcons: FC<IconProps> = props => <SimpleLineIconsI {...props} />;
const MaterialIcons: FC<IconProps> = props => <MaterialIconsI {...props} />;
const FontAwesome5: FC<IconProps> = props => <FontAwesome5I {...props} />;
const FontAwesome: FC<IconProps> = props => <FontAwesomeI {...props} />;
const Foundation: FC<IconProps> = props => <FoundationI {...props} />;
const EvilIcons: FC<IconProps> = props => <EvilIconsI {...props} />;
const Ionicons: FC<IconProps> = props => <IoniconsI {...props} />;
const Octicons: FC<IconProps> = props => <OcticonsI {...props} />;
const Feather: FC<IconProps> = props => <FeatherI {...props} />;
const Entypo: FC<IconProps> = props => <EntypoI {...props} />;
const Zocial: FC<IconProps> = props => <ZocialI {...props} />;
const AntDesign: FC<IconProps> = props => <AntDesignI {...props} />;
export default {
  MaterialCommunityIcons,
  SimpleLineIcons,
  MaterialIcons,
  FontAwesome5,
  FontAwesome,
  Foundation,
  EvilIcons,
  Ionicons,
  Octicons,
  Feather,
  Entypo,
  Zocial,
  AntDesign,
};
