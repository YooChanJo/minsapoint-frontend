import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
    return (
        <View>
            <Link href="/teacher" style={styles.link} asChild>
                <Text style={styles.linkText}>Go to teacher</Text>
            </Link>
            <Link href="/student" style={styles.link} asChild>
                <Text style={styles.linkText}>Go to student</Text>
            </Link>
            <Link href="/dept-of-j" style={styles.link} asChild>
                <Text style={styles.linkText}>Go to dept of j</Text>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    link: {
        marginHorizontal: "auto",
        borderBottomWidth: 1,
        borderBottomColor: "blue",
    },
    linkText: {
        fontSize: 42,
        color: "blue",
        marginBottom: 20,
    },
});
