import { StyleSheet } from "react-native";
export const Detailstyle = StyleSheet.create({
    container: {

        backgroundColor: "#fff",
        flex: 1,
        width: "100%",
        height: "100%"
    },
    backbtn: {
        width: 40,
        height: 40,
        alignItems: "center",
        shadowColor: "rgba(0,0,0,0.6)",
        backgroundColor: "#ffff",
        shadowOpacity: 0.4,
        borderRadius: 10,
        elevation: 6,
        justifyContent: "center"

    },
    btnimg: {
        width: 14,
        height: 14
    },
    detailtext: {
        fontSize: 18,
        color: '#323232',
        fontFamily: "popins-semibold",
        fontWeight: "500",
        // marginLeft: "25%",
        flex: 1,

        textAlign: "center"

    },
    backlayout: {
        flexDirection: "row",
        marginTop: 10,
        alignItems: "center",
        paddingHorizontal: 24,
    },

    imagebg: {
        backgroundColor: "#E7C0F7",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 230,
        marginVertical: 10
    },
    img: {
        width: 200,
        height: 200
    },
    detailslayout: {
        paddingHorizontal: 24,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    itemName: {
        fontSize: 20,
        color: "#323232",
        fontFamily: "popins-semibold",
        // fontWeigt: "600"
    },
    itemprice: {
        fontSize: 20,
        color: "#4FB8E9",
        fontFamily: "popins-semibold",
        // fontWeigt: "600"
    }
})