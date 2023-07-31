import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import bille from '../../assets/bille.png'
import Spotify from '../../assets/Spotify.svg'

export default function GetStarted({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={bille} style={{ width:"100%", height:"100%",position:"absolute",}}/>
      <Spotify style={{margin: 50}}/>

      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Divirta-se ouvindo música</Text>
        <Text style={styles.footerText}>
            O cliente é muito importante, o cliente será seguido pelo cliente. Pois as flechas 
            são claras, mas sem fases. É hora de decorá-lo com um pouco de chocolate.
        </Text>
        <TouchableOpacity style={styles.bts} 
        title = "ChooseMode" 
        onPress={ () => navigation.navigate('ChooseMode')}>
            <Text style={styles.btsText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D0C0C',
        alignItems: 'center',
    },
    footer:{
        top: 420,
        alignItems:"center",
    },
    footerTitle:{
        color: "#D9D9D9",
        fontSize: 25,
        fontWeight: "700",
        lineHeight: 33,
        bottom: 21,
    },
    footerText:{
        color: "#797979",
        width: 310,
        fontSize: 17,
        textAlign: "center",
        fontWeight: "400",
        lineHeight: 22,
    },
    bts:{
        border: "none",
        height: 92,
        width: 329,
        backgroundColor: "#42c73b",
        borderRadius: 30,
        top: 37,
        alignItems: "center",
        justifyContent: "center",
    },
    btsText:{
        color: "#F6F6F6",
        fontSize: 26,
        fontWeight: "700",
        lineHeight: 35,
        textTransform: "capitalize",
        textAlign: "center",

    },
});