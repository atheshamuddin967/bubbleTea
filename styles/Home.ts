import { StyleSheet } from "react-native";
export const Homestyle = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        backgroundColor: "white",

        marginTop: 0,
        padding: 0,
        flex: 1

    },
    logo: {
        width: 32,
        height: 32,
        marginVertical: 20
    },
    userName: {
        fontSize: 16,
        fontFamily: "popins-light",
        fontWeight: "400",
        color: "#1C1E23"

    },
    Headings: {
        fontSize: 24,
        fontWeight: "600",
        fontFamily: "popins-semibold",
        color: "#4FB8E9"
    },
    shopNameContainer: {
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "flex-start",
        marginHorizontal: 5
    },
    shopName: {
        width: 160,
        shadowColor: "rgba(0,0,0,0.6)",
        backgroundColor: "#ffff",
        shadowOpacity: 0.4,
        borderRadius: 10,
        elevation: 6,
        padding: 10,
        height: 160,


    },
    shopNameHover: {
        width: 160,
        shadowColor: "rgba(0,0,0,0.2)",
        backgroundColor: "#4FB8E9",
        shadowOpacity: 0.2,
        borderRadius: 10,
        elevation: 4,
        padding: 10,
        height: 160,


    },
    shopImage: {
        width: 41,
        height: 41,
        marginVertical: 5
    },
    shopHeading: {
        fontSize: 16,
        fontWeight: "600",
        fontFamily: "popins-medium",
        marginVertical: 5
    },
    shopHeadingHover: {
        fontSize: 16,
        fontWeight: "600",
        fontFamily: "popins-medium",
        marginVertical: 5,
        color: "white",
    },
    shopdetails: {
        fontSize: 14,
        fontWeight: "400",
        color: "#646464",
        fontFamily: "popins-regular"
    },
    shopdetailsHover: {
        fontSize: 14,
        fontWeight: "400",
        color: "white",
        fontFamily: "popins-regular"
    },
})