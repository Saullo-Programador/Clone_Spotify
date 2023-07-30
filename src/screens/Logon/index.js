import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import LeftIcon from '../../assets/LeftIcon.svg'
import Spotify from '../../assets/Spotify.svg'
import image from '../../assets/image2.png'
import union from '../../assets/Union.png'
import union1 from '../../assets/Union-1.png'


export default function Logon() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity style={styles.headerBackButton}>
                <LeftIcon width="24" height="24"/>
            </TouchableOpacity>
        </View>
        <View style={styles.content}>
            <Spotify width="235" height="71"/>
            <Text style={styles.contentTitle}>Divirta-se ouvindo música</Text>
            <Text style={styles.contentText}>
                O Spotify é um provedor de serviços de mídia e streaming de áudio sueco proprietário.
            </Text>

            <View style={styles.containerButtons}>
                <TouchableOpacity style={styles.buttonsRegister}>
                    <Text style={styles.textRegister}>Registrar-se</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonsLogin}>
                    <Text style={styles.textLogin}>Logar</Text>
                </TouchableOpacity>
            </View>
        </View>
        <Image style={{position:"absolute", top: 460}} source={image}/>
        <Image style={{position:"absolute", left: 253, }} source={union}/>
        <Image style={{position:"absolute", left: 280, bottom: -2}} source={union1}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#1C1B1B",
        
    },
    header:{
        marginTop: 45,
        paddingHorizontal: 30,
    },
    headerBackButton:{
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "rgba(255, 255, 255, 0.03)",
        justifyContent: "center",
        alignItems:"center",
    },
    content:{
        width: "100%",
        marginTop: 111,
        alignItems: "center",
        paddingHorizontal: 50,
    },
    contentTitle:{
        color: "#F2F2F2",
        fontSize: 26,
        fontWeight: "700",
        lineHeight: 35,
        textTransform:"capitalize",
        marginTop: 65,
    },
    contentText:{
        color: "#A0A0A0",
        lineHeight: 25,
        fontSize: 17,
        fontWeight: "400",
        textAlign: "center",
        textTransform:"capitalize",
        marginTop: 19,
    },
    containerButtons:{
        width:"100%",
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "space-between",
        marginTop: 40,
    },
    buttonsRegister:{
        backgroundColor:"#42C73B",
        height: 65,
        width: 140,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
    },
    buttonsLogin:{
        height: 65,
        width: 140,
        justifyContent: "center",
        alignItems: "center",
        
    },
    textRegister:{
        color: "#FFFFFF",
        fontSize: 19,
        fontWeight: "700",
    },
    textLogin:{
        color: "#FFFFFF",
        fontSize: 19,
        fontWeight: "700",
    },
});