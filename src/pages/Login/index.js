import React, {useState, useRef} from 'react';
import {View, Text, TextInput, TouchableHighlight, ScrollView} from 'react-native';
import colors from '../../styles/colors.styles';
import general from '../../styles/general.styles';

import {CircleIconButton, FlatButton} from '../../components';
import createUser from '../../utils/firebase';

export default function Login(props) {
  const [haveAccount, setHaveAccount] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registeringUser, setRegisteringUser] = useState(false);

  const passwordRef = useRef('passwordRef');

  async function saveNewUser(){
    setRegisteringUser(true);
    let userCreated = await createUser(email, password);
    if(userCreated.success == false){
      props.handleSnackbar({message: userCreated.message, type: 'warning'});
      setRegisteringUser(false);
    } else {
      setRegisteringUser(false);
      props.onAuthStateChanged(userCreated.user);
    }
  }

  return haveAccount ? (
    <View style={[general.columnContainer, {justifyContent: 'center'}]}>
      <Text style={general.title}>Login</Text>

      <View style={{marginVertical: 4, padding: 8}}>
        <Text style={general.primaryDarkText}>Email</Text>
        <View style={general.textFieldContainer}>
          <TextInput
            placeholder="emaildousuario@gmail.com"
            placeholderTextColor={colors.text.lightDark}
            style={general.textField}
            onChangeText={text => setEmail(text)}
          />
        </View>
      </View>

      <View style={{marginVertical: 4, padding: 8}}>
        <Text style={general.primaryDarkText}>Senha</Text>
        <View style={general.textFieldContainer}>
          <TextInput
            secureTextEntry={isPasswordVisible}
            placeholder="********"
            placeholderTextColor={colors.text.lightDark}
            style={general.textField}
            onChangeText={text => setPassword(text)}
          />
          <CircleIconButton
            size={32}
            backgroundColor="transparent"
            iconColor={colors.icon.dark}
            iconName={isPasswordVisible ? 'visibility' : 'visibility-off'}
            handleIconButtonPress={() =>
              setIsPasswordVisible(!isPasswordVisible)
            }
          />
        </View>
      </View>

      <FlatButton
        label="Entrar"
        backgroundColor={colors.primary}
        handleFlatButtonPress={() => {}}
      />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={general.secondaryDarkText}>Não possui conta?</Text>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => setHaveAccount(!haveAccount)}>
          <Text style={[general.primaryDarkText, {marginLeft: 8}]}>
            Registre-se.
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  ) : (
    <ScrollView contentContainerStyle={{flex: 1}}>
    <View style={[general.columnContainer, {justifyContent: 'center'}]}>
      <Text style={general.title}>Registre-se</Text>

      <View style={{marginVertical: 4, padding: 8}}>
        <Text style={general.primaryDarkText}>Email</Text>
        <View style={general.textFieldContainer}>
          <TextInput
            placeholder="emaildousuario@gmail.com"
            placeholderTextColor={colors.text.lightDark}
            style={general.textField}
            onChangeText={text => setEmail(text)}
            onSubmitEditing={() => { passwordRef.current.focus() }}
          />
        </View>
      </View>

      <View style={{marginVertical: 4, padding: 8}}>
        <Text style={general.primaryDarkText}>Senha</Text>
        <View style={general.textFieldContainer}>
          <TextInput
            ref={passwordRef}
            secureTextEntry={isPasswordVisible}
            placeholder="********"
            placeholderTextColor={colors.text.lightDark}
            style={general.textField}
            onChangeText={text => setPassword(text)}
            onSubmitEditing={() => saveNewUser()}
          />
          <CircleIconButton
            size={32}
            backgroundColor="transparent"
            iconColor={colors.icon.dark}
            iconName={isPasswordVisible ? 'visibility' : 'visibility-off'}
            handleIconButtonPress={() =>
              setIsPasswordVisible(!isPasswordVisible)
            }
          />
        </View>
      </View>

      <FlatButton
        label="Registrar"
        backgroundColor={colors.primary}
        handleFlatButtonPress={() => saveNewUser()}
        onLoading={registeringUser}
      />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={general.secondaryDarkText}>Já possui conta?</Text>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => setHaveAccount(!haveAccount)}>
          <Text style={[general.primaryDarkText, {marginLeft: 8}]}>
            Faça login.
          </Text>
        </TouchableHighlight>
      </View>
    </View>
    </ScrollView>
  );
}
