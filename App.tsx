import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Switch,
} from 'react-native';

import {Appearance} from 'react-native';
import {FAB, Icon} from 'react-native-elements';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// import Svg, {Path} from 'react-native-svg';

// Task interface
interface Task {
  id: string;
  title: string;
  category: 'complete' | 'pending' | 'postponed';
}

const App = () => {
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    Appearance.getColorScheme() === 'dark',
  );

  // Tasks state
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState<string>('');
  const [selectedCategory, setSelectedCategory] =
    useState<Task['category']>('pending');

  // Color schemes with Tailwind-inspired colors
  const lightTheme = {
    background: 'bg-gray-100',
    text: 'text-gray-900',
    inputBg: 'bg-white',
    inputBorder: 'border-gray-300',
    cardBg: 'bg-white',
    completeBtn: 'bg-green-500',
    pendingBtn: 'bg-yellow-500',
    postponedBtn: 'bg-red-500',
    iconColor: '#000000',
  };

  const darkTheme = {
    background: 'bg-gray-900',
    text: 'text-gray-100',
    inputBg: 'bg-gray-800',
    inputBorder: 'border-gray-700',
    cardBg: 'bg-gray-800',
    completeBtn: 'bg-green-700',
    pendingBtn: 'bg-yellow-700',
    postponedBtn: 'bg-red-700',
    iconColor: '#FFFFFF',
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  // Add new task
  const addTask = () => {
    if (newTaskTitle.trim()) {
      const newTask: Task = {
        id: Math.random().toString(),
        title: newTaskTitle,
        category: selectedCategory,
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle('');
    }
  };

  // Update task category
  const updateTaskCategory = (
    taskId: string,
    newCategory: Task['category'],
  ) => {
    setTasks(
      tasks.map(task =>
        task.id === taskId ? {...task, category: newCategory} : task,
      ),
    );
  };

  // Category icons
  const CategoryIcons = {
    complete: 'check-circle',
    pending: 'access-time',
    postponed: 'pause-circle-filled',
  };

  return (
    <View className={`flex-1 ${theme.background} p-4`}>
      <Text className={`text-2xl font-bold ${theme.text}`}>Testing</Text>
      <Icon
        raised
        name="heartbeat"
        type="font-awesome"
        color="#f50"
        onPress={() => console.log('hello')}
      />
 
      <MaterialCommunityIcon name="heart" size={30} color="#000" />
 

    </View>
  );
};

export default App;
