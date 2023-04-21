import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // tabBarStyle: { backgroundColor: "#B0233A" },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          headerTintColor: colorScheme === "light" ? "#B0233A" : "#E37285",
          tabBarActiveTintColor: colorScheme === "light" ? "#B0233A" : "#E37285",
          title: 'Accueil',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Link href="modals/infos" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="question-circle"
                    size={28}
                    color={colorScheme === "light" ? "#B0233A" : "#E37285"}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="rechercher"
        options={{
          headerTintColor: colorScheme === "light" ? "#B0233A" : "#E37285",
          tabBarActiveTintColor: colorScheme === "light" ? "#B0233A" : "#E37285",
          title: 'Rechercher',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          headerTintColor: colorScheme === "light" ? "#B0233A" : "#E37285",
          tabBarActiveTintColor: colorScheme === "light" ? "#B0233A" : "#E37285",
          title: 'Mon Compte',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
