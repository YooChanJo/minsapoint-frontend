import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { commonStyles } from "../../constants/ThemeStyles";

export default function SettingsScreen() {
    const handleLogout = () => {
        console.log("로그아웃 버튼이 눌렸습니다.");
        // 여기서 실제 로그아웃 처리(ex: 토큰 삭제, 로그인 화면으로 이동 등)를 하면 돼
    };

    return (
        <View style={commonStyles.container}>
            {/* 개인정보 표시 */}
            <View style={commonStyles.infoBox}>
                <Text style={commonStyles.infoTitle}>이름</Text>
                <Text style={commonStyles.infoText}>왕두균 선생님</Text>

                <Text style={commonStyles.infoTitle}>학번</Text>
                <Text style={commonStyles.infoText}>231106</Text>
            </View>

            {/* 로그아웃 버튼 */}
            <TouchableOpacity
                style={commonStyles.logoutButton}
                onPress={handleLogout}
            >
                <Text style={commonStyles.logoutButtonText}>로그아웃</Text>
            </TouchableOpacity>
        </View>
    );
}
