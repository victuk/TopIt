import { Addtask } from '@/components/Addtask';
import { CustomButton } from '@/components/CustomButton';
import { NewButton } from '@/components/NewButton';
import { Todos } from '@/components/Todos';
import { useTodo } from '@/lib/zustand/UseTodo';
import BottomSheet, {
  BottomSheetModal,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';

import moment from "moment";
import dayjs from "dayjs";

import { router, useRouter } from 'expo-router';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { SideMenu } from '@/components/SideMenu';
import { TextInput } from 'react-native-gesture-handler';
import { Colors } from '@/constants/Colors';

export default function Login() {
  const bottomSheetref = useRef<BottomSheet>(null);
  const todos = useTodo((state) => state.todo);

  const [showMenu, setShowMenu] = useState(false);

  const [category, setCategory] = useState('Personal');
  const snapShots = useMemo(() => ['25%', '50%', '90%'], []);
  const filteredTodos = useMemo(() => {
    return todos.filter(
      (todo) => todo.category.toLowerCase() === category.toLowerCase()
    );
  }, [todos, category]);

  const openBottomSheet = () => {
    bottomSheetref.current?.expand()
  };

  const aboutScreen = () => {
    router.push('/');
  };
  const closeBottomSheet = () => {
    bottomSheetref.current?.close()
  };
  const isActivePersonal = category === 'Personal' ? 'skyblue' : '#eee';
  const isActiveWork = category === 'Work' ? 'skyblue' : '#eee';

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  return (
    <View>
      <View>Welcome Back</View>

      <View>
        <View>
          <Text>Email</Text>
          <TextInput style={styles.input} placeholder='John Doe' />
        </View>
        <View>
          <Text>Password</Text>
          <View style={[styles.input, styles.passwordInput]}>
          <TextInput placeholder='********' secureTextEntry={!showPassword}  />
          <AntDesign name={showPassword ? "eyeo" : "eye"} />
          </View>
        </View>
      </View>

      <View>
        <Pressable onPress={() => {router.push("/")}}>Login</Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  input: {
    borderWidth: 1,
    borderColor: "#eeeeee"
  },

  passwordInput: {
    flexDirection: "row"
  },

  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 15,
  },
  today: {
    color: '#ccc',
    fontSize: 20,
  },
  date: {
    color: 'black',
    fontSize: 30,
    fontWeight: '700',
  },
  card: {
    marginTop: 20,
    height: 150,
    width: '100%',
    backgroundColor: 'skyblue',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  cardText: { fontSize: 25, color: 'white', fontWeight: '600' },
  btnContainer: { flexDirection: 'row', gap: 20, marginTop: 20 },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 24
  },
  titleAndMenuContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  }
});
