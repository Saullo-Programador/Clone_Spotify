import { View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

import image from '../../assets/image4.1.png'
import Spotify from '../../assets/Spotify.svg'
import Sun from '../../assets/Sun.svg'
import Moon from '../../assets/Moon.svg'

export default function ChooseMode() {
  return (
    <View style={styles.container}>
        <Image source={image} style={styles.bg}/>
        <Spotify style={{margin: 50}}/>

        <View style={styles.footer}>
            <Text style={styles.footerTitle}>Escolha o modo</Text>

            <View style={styles.card}>
                <View style={styles.cardMoon}>
                    <TouchableOpacity style={styles.Moon}>
                        <Moon/>
                    </TouchableOpacity>
                    <Text style={styles.cardMoonText}>Dark Mode</Text>
                </View>
                <View style={styles.cardSun}>
                    <TouchableOpacity style={styles.Sun}>
                        <Sun/>
                    </TouchableOpacity>
                    <Text style={styles.cardSunText}>Light Mode</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.bts}>
                <Text style={styles.btsText}>Continue</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#434141",
        alignItems: 'center',
    },
    bg:{
        position:"absolute",
        width: "100%",
        height: "100%",
        top: 0,
    },
    footer:{
        top: 340,
        alignItems: "center",
    },
    footerTitle:{
        color: "#D9D9D9",
        fontSize: 28,
        fontWeight: "700",
        lineHeight: 33,
        bottom: 21,
    },
    card:{
        width:"100%",
        flexDirection: "row",
        alignItems:"center",
        gap: 71,

    },
    cardMoon:{
        alignItems: "center",
        top: 35,
        
    },
    cardSun:{
        alignItems: "center",
        top: 35,
    },
    Moon:{
        width: 73,
        height: 73,
        backgroundColor:"rgba(60, 64, 65, 36)",
        alignItems:"center",
        justifyContent: "center",
        borderRadius: 36.5,
        bottom: 20,
    },
    Sun:{
        width: 73,
        height: 73,
        backgroundColor:"rgba(60, 64, 65, 36)",
        alignItems:"center",
        justifyContent: "center",
        borderRadius: 36.5,
        bottom: 20,
    },
    cardMoonText:{
        color: "#D9D9D9",
        fontSize: 17,
        fontWeight: "700",
        lineHeight: 22,
    },
    cardSunText:{
        color: "#D9D9D9",
        fontSize: 17,
        fontWeight: "700",
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
        top: 100,
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