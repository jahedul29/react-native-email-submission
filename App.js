/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Pressable,
  ToastAndroid,
  Modal
} from 'react-native';

const App = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    if (email.length >= 3 && name.length >= 3) {
      setIsSubmitted(true);
    } else if( email.length < 3 ) {
      setErrorMessage("Email is too short");
    } else if (name.length < 3){
      setErrorMessage("Name is too short");
    } else {
      setErrorMessage("Something went wrong");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />

      <View>
        <View style={styles.title}>
          <Text style={styles.titleText}>Subscribe to stay touched.</Text>
        </View>

        <View>
          <TextInput
            value={email}
            style={styles.input_box}
            placeholder="Enter your email."
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            value={name}
            style={styles.input_box}
            placeholder="Enter your name"
            onChangeText={(text) => setName(text)}
          />
        </View>

        <Pressable
          onPress={handleSubmit}
          android_ripple={{ color: 'red' }}
          style={({ pressed }) => [
            styles.submit_button,
            {
              backgroundColor: pressed ? '#fff' : 'green',
            }
          ]}
        >
          <Text style={styles.submit_button_text}>Submit</Text>
        </Pressable>
      </View>

      <Modal
        animationType={"slide"}
        transparent={true}
        visible={isSubmitted}
        onRequestClose={() => {
          ToastAndroid.showWithGravity('Modal has been closed.', ToastAndroid.LONG, ToastAndroid.CENTER);
          setIsSubmitted(false);
          setName("");
          setEmail("");
        }}
        // presentationStyle={"fullScreen"}

      >
        <View style={styles.modal_container}>
        <View style={styles.modal}>
          <View style={[
            styles.success_modal_title,
            {
              backgroundColor: 'green',
            }
          ]}>
            <Text style={styles.modal_title_text}>Success</Text>
          </View>
          <View style={styles.success_modal_body}>
            <Text style={styles.modal_body_text}>
              Date Submitted successfully.
            </Text>
            <Text style={styles.modal_body_text}>
              Email : {email}
            </Text>
            <Text style={styles.modal_body_text}>
              Name : {name}
            </Text>
          </View>
          <Pressable
            onPress={()=> {
              ToastAndroid.showWithGravity('Modal has been closed.', ToastAndroid.LONG, ToastAndroid.TOP);
              setIsSubmitted(false);
              setName("");
              setEmail("");
            }}
            android_ripple={{ color: 'red' }}
            style={({ pressed }) => [
              styles.modal_button,
              {
                backgroundColor: pressed ? '#fff' : 'green',
              }
            ]}
          >
            <Text style={styles.submit_button_text}>Ok</Text>
          </Pressable>
          </View>
        </View>
      </Modal>

      <Modal
        animationType={"slide"}
        visible={errorMessage.length > 0}
        onRequestClose={() => {
          ToastAndroid.showWithGravity('Modal has been closed.', ToastAndroid.LONG, ToastAndroid.TOP);
          setErrorMessage("");
        }}
        presentationStyle={"fullScreen"}
      >
        <View style={styles.modal_container}>
        <View style={styles.modal}>
          <View style={[
            styles.success_modal_title,
            {
              backgroundColor: 'red'
            }
          ]}>
            <Text style={styles.modal_title_text}>Error</Text>
          </View>
          <View style={styles.success_modal_body}>
            <Text style={styles.modal_body_text}>{errorMessage}</Text>
          </View>
          <Pressable
            onPress={()=> {
              ToastAndroid.showWithGravity('Modal has been closed.', ToastAndroid.LONG, ToastAndroid.TOP);
              setErrorMessage("");
            }}
            android_ripple={{ color: 'red' }}
            style={({ pressed }) => [
              styles.modal_button,
              {
                backgroundColor: pressed ? '#fff' : 'red',
              }
            ]}
          >
            <Text style={styles.submit_button_text}>Ok</Text>
          </Pressable>
          </View>
        </View>
      </Modal>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    color: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    borderBottomColor: 'red',
    marginBottom: 20,
  },
  titleText: {
    fontSize: 30,
    color: 'red',
  },
  input_box: {
    height: 50,
    borderRadius: 10,
    borderColor: 'red',
    borderWidth: 1,
    marginBottom: 10,
    textAlign: 'center',
  },
  submit_button: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 10,
    alignSelf: 'center',
  },
  submit_button_text: {
    fontSize: 20,
    color: 'white',
  },
  modal_container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  modal: {
    height: 200,
    width: 300,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  success_modal_title: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modal_title_text: {
    color: 'white',
    fontSize: 20,
  },
  modal_body_text: {
    fontSize: 18,
  },
  modal_button: {
    width: '100%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  }
});

export default App;
