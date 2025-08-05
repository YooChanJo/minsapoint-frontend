import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { commonStyles } from "../../constants/ThemeStyles";

export default function CounterScreen() {
    const router = useRouter();
    return (
        <View style={commonStyles.container}>
            {/* 상단 바 */}
            <View style={commonStyles.topBar}>
                <Text style={commonStyles.appTitle}>MinsaPoint</Text>
                <View style={commonStyles.rightProfileSection}>
                   
                        
                    
                    <TouchableOpacity
                        style={commonStyles.settingsIcon}
                        onPress={() => router.push("/student/settings")}
                    >
                        <Ionicons
                            name="settings-outline"
                            size={30}
                            color="#333"
                        />
                    </TouchableOpacity>
                   
                </View>
            </View>

            {/* 알림 아이콘 */}
            <TouchableOpacity style={commonStyles.notification}>
                <Ionicons
                    name="notifications-outline"
                    size={28}
                    color="black"
                    onPress={() => router.push("/student/alerts")}
                />
                <View style={commonStyles.notificationBadge}>
                    <Text style={commonStyles.notificationText}>3</Text>
                </View>
            </TouchableOpacity>

            {/* 중앙 점수 정보 */}
            <View style={commonStyles.scoreSection}>
                <Text style={commonStyles.grayLabel}>누계</Text>
                <Text style={commonStyles.bigScore}>13</Text>

                <View style={commonStyles.subScores}>
                    <View style={commonStyles.scoreItem}>
                        <Text style={commonStyles.label}>벌점</Text>
                        <Text style={commonStyles.value}>25</Text>
                    </View>
                    <View style={commonStyles.scoreItem}>
                        <Text style={commonStyles.label}>상점</Text>
                        <Text style={commonStyles.value}>12</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={commonStyles.homeButton}
                    onPress={() => router.push("/student/history")}
                >
                    <Text style={commonStyles.buttonText}>History</Text>
                </TouchableOpacity>
            </View>
            <View style={commonStyles.button}>
                <Text>이번주 법정 대상자입니다</Text>
            </View>
        </View>
    );
}
