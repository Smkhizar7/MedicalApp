import React, { useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import PhoneInput from 'react-native-phone-input';

export default function PhoneNumber() {
  const [phoneNumber, setPhoneNumber] = useState(false)
  const phoneRef = useRef(undefined);

  return (
      <PhoneInput
        style={styles.phoneInput} 
        ref={phoneRef}
        value={phoneNumber}
        textProps={{placeholder:"Enter your phone number",clearButtonMode:'always'}}
        onChangePhoneNumber={setPhoneNumber} 
      />
  );
}

const styles = StyleSheet.create({
  phoneInput: {
    width:'90%',
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 20,
    padding: 16
  },
});