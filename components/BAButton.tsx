import { StyleSheet, Text, TouchableOpacity } from "react-native";
import rncStyles from "rncstyles";

export default  function BAButton({label,onPress}:any){
    return<>
    <TouchableOpacity style={[styles.loginBtn, rncStyles.h15, rncStyles.p2, rncStyles.m2, rncStyles.rounded]} onPress={onPress}>
        <Text style={rncStyles.textWhite}>
            {label}
        </Text>
    </TouchableOpacity>
    </>
}

const styles= StyleSheet.create({
    loginBtn: {
        width: '80%',
        backgroundColor: '#B28CFF',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      },
      btntitle: {
        color: 'white',
      },
})
