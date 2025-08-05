import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { commonStyles } from "../../constants/ThemeStyles";
import { Colors } from "../../constants/Colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function CounterScreen() {
    const router = useRouter();

    return (
        <View style={commonStyles.container}>
            {/* Header */}
            <Text style={commonStyles.titleText}>MinsaPoint</Text>

            {/* Profile */}
            <View style={commonStyles.profileRow}>
                <View style={commonStyles.settingsIcon}>
                    <Ionicons
                        name="settings"
                        size={20}
                        color={Colors.light.text}
                    />
                </View>
                <View style={{ marginLeft: 8 }}>
                    <Text
                        style={commonStyles.profileName}
                        onPress={() => router.push("/student/settings")}
                    >
                        왕두균 선생님
                    </Text>
                </View>
            </View>

            {/* Stats */}
            <View style={commonStyles.summaryBox}>
                <Text style={commonStyles.smallGrayText}>피기소자수: 20명</Text>
                <Text style={commonStyles.boldBlackText}>
                    최다 기소항목:{" "}
                    <Text style={{ fontWeight: "normal" }}>
                        Absecent form Morning Exercise
                    </Text>
                </Text>
            </View>

            {/* Menu Items */}
            <View style={commonStyles.menuWrapper}>
                <MenuItem
                    icon={
                        <MaterialIcons name="history" size={28} color="black" />
                    }
                    title="History"
                    subtitle="기소항목 & 상점 추천 히스토리"
                    onPress={() => router.push("/teacher/history")}
                />
                <MenuItem
                    icon={<Ionicons name="sunny" size={28} color="black" />}
                    title="Reward Points"
                    subtitle="상점 추천"
                    onPress={() => router.push("/teacher/reward-points")}
                />
                <MenuItem
                    icon={<Ionicons name="rainy" size={28} color="black" />}
                    title="Penalty Points"
                    subtitle="기소"
                    onPress={() => router.push("/teacher/penalty-points")}
                />
            </View>
        </View>
    );
}

function MenuItem({
    icon,
    title,
    subtitle,
    onPress,
}: {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    onPress?: () => void;
}) {
    return (
        <TouchableOpacity style={commonStyles.menuItem} onPress={onPress}>
            <View style={commonStyles.iconWithText}>
                {icon}
                <View style={{ marginLeft: 12 }}>
                    <Text style={commonStyles.menuTitle}>{title}</Text>
                    <Text style={commonStyles.menuSubtitle}>{subtitle}</Text>
                </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="black" />
        </TouchableOpacity>
    );
}
