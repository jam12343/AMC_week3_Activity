import React from 'react';
import {StyleSheet, TextInput, Image, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, onChangeName] = React.useState('Name: ');
  const [age, onChangeAge] = React.useState('Age: ');
  const [address, onChangeAddress] = React.useState('Address: ');
  const [school, onChangeSchool] = React.useState('School: ');
  const [course, onChangeCourse] = React.useState('Course: ');
  const [email, onChangeEmail] = React.useState('Email: ');
  const [number, onChangeNumber] = React.useState('Contact Number: ');

  const [value, onChangeText] = React.useState('About Me: ');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'row',
        },
      ]}>

      <Image source={{uri: 'https://i.pinimg.com/736x/c9/a7/41/c9a741d1a2b9ccb0f45a9778f0ce9e34.jpg;'}}
       style={{width: 50, height: 45}} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
        />
        </View>

      <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'row',
        },
      ]}>
        <Image source={{uri: 'https://i.pinimg.com/originals/96/0f/71/960f71ca75224a892bb3984048884a55.jpg;'}}
       style={{width: 50, height: 45}} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAge}
          value={age}
          keyboardType="numeric"
        />
        </View>

      <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'row',
        },
      ]}>
      <Image source={{uri: 'https://i.pinimg.com/originals/b7/91/cd/b791cd292b64cca7894f684759fb5f7c.jpg;'}}
       style={{width: 50, height: 45}} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          value={address}
        />
        </View>
       
      <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'row',
        },
      ]}>
        <Image source={{uri: 'https://i.pinimg.com/736x/e1/01/ef/e101ef9f2a16142426f495f42e36eab3.jpg;'}}
       style={{width: 50, height: 45}} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeSchool}
          value={school}
        />
        </View>

      <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'row',
        },
      ]}>
        <Image source={{uri: 'https://th.bing.com/th/id/R.fd58ab24a09f55cce39f855c68b3a64a?rik=QqQ47ahNr7pxUw&riu=http%3a%2f%2fi1.kym-cdn.com%2fphotos%2fimages%2ffacebook%2f000%2f604%2f695%2f06e.png&ehk=7z7YgZqiXJkti5lOmKU8lCDvhUE%2bwxdsXZiSq6df9pQ%3d&risl=&pid=ImgRaw&r=0;'}}
        style={{width: 50, height: 45}} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeCourse}
          value={course}
        />
        </View>

      <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'row',
        },
      ]}>
      <Image source={{uri: 'https://i.pinimg.com/originals/df/1e/a1/df1ea1ac5276ed555c88866f01fb717d.jpg;'}}
        style={{width: 50, height: 45}} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
        />
        </View>

      <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'row',
        },
      ]}>
        <Image source={{uri: 'https://i.pinimg.com/236x/94/f6/48/94f64803d4efd2ade1b4a689c79084b4.jpg;'}}
        style={{width: 50, height: 45}} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
        />
        </View>

      <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'row',
        },
      ]}>
      <Image source={{uri: 'https://i1.sndcdn.com/artworks-a2kHPRF4vmMaLeut-DMj7Fw-t500x500.jpg;'}}
        style={{width: 50, height: 45}} />
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={text => onChangeText(text)}
          value={value}
          style={styles.textInput}
        />
        </View>

       
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 2,
    borderWidth: 1,
    padding: 20,
  },
    textInput: {
    height: 200,
    margin: 1,
    borderWidth: 1,
    padding: 30,
  },
    container: {
    flex: 1,
    padding: 10,
  },
});


export default TextInputExample;