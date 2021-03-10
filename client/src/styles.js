import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    action: {
        color: "#05666C",
        fontWeight: "500",
        textDecorationLine: "underline",
    },
    button: {
        marginTop: 20,
        borderRadius: 25,
        // width: 200,
    },
    buttonLabel: {
        color: "#fff",
        textAlign: "center",
        backgroundColor: "#05666C",
        borderRadius: 5,
        padding: 10,
        fontSize: 15,
        fontWeight: "500",
    },
    //general container - adds spacing
    container: {
        // borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 20,
        padding: 10,
    },
    //for descriptive text
    description: {
        fontSize: 18,
        marginVertical: 20,
        fontWeight: "500",
        textAlign: "center",
        color: "gray",
    },
    //makes text greem
    green:{
        color: "#05666C",
    fontWeight: "600",
    padding: 20,
    },
    //label elements
    label: {
        color: "#05666C",
        fontSize: 14,
        paddingTop: 12,
        fontWeight: "600",
    },
    //Input elements
    input: {
        padding: 8,
        width: 80,
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#aaa",
    },
    //long input element for login and signup
    inputBig: {
        padding: 8,
        width: 300,
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#aaa",
    },
    //input for search bar
    inputSearch: {
        width: "100%",
        marginLeft: 6,
        fontSize: 17,
    },
    //label for food input 
    foodInput: {
        width: 280,
    },
    //main title at top of every screen/component
    title: {
        fontSize: 25,
        color: "#05666C",
        fontWeight: "600",
        marginBottom: 15,
    },
    serverMsg: {
        color: "red",
        marginTop: 10,
        textAlign: "center",
    },
    searchBar: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 20,
        paddingLeft: 10,
        marginVertical: 12,
        width: "90%",
        height: 38,
    },
    switchForm: {
        paddingVertical: 10,
        fontSize: 14,
    },
    startScreenWrapper: {
        borderWidth: 1,
        borderColor: "#dedede",
        elevation: 5,
        padding: 14,
    },
    wrapper: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
});

export default styles;