import React from 'react';
import {View} from 'react-native';

import {Icon, Text} from 'react-native-elements';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {
  return (
    <View className={`flex-1 p-4`}>
      <Text className={`text-2xl font-bold `}>Testing</Text>
      <Icon
        raised
        name="github"
        type="font-awesome"
        color="#f50"
        onPress={() => console.log('hello')}
      />
      <MaterialCommunityIcon name="github" size={30} color="#000" />
    </View>
  );
};

export default App;
