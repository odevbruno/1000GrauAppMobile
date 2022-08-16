import React from 'react';
import { View , StyleSheet} from 'react-native';
import { Subheading } from 'react-native-paper';

const styles = StyleSheet.create({
   
  subTxtGreen: { color: 'green', fontSize: 14, fontWeight: 'bold', textAlign: 'left' },
  subTxtRed: { color: 'red', fontSize: 14, fontWeight: 'bold', textAlign: 'left' },

  contMsg: { width: '100%', paddingLeft: 3, marginTop: -10 },
})

export default function MsgText({msgPadrao}) {
    return (
        <View style={styles.contMsg}>
            <Subheading style={styles.subTxtRed}>{msgPadrao}</Subheading>
        </View>

    );
}