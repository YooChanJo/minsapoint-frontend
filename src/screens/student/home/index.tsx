import React from "react";
import Ionicons from "@react-native-vector-icons/ionicons";
import { Text, View } from "react-native";

import { useUiStyles } from "@/src/components/ui-styles-provider";
import LinkWrapper from "@/src/components/link-wrapper";

export default function StudentHomeScreen() {
  const { commonStyles } = useUiStyles();

  return (
    <View style={commonStyles.container}>
      {/* 상단 바 */}
      <View style={commonStyles.topBar}>
        <Text style={commonStyles.appTitle}>MinsaPoint</Text>
        <View style={commonStyles.rightProfileSection}>
          <LinkWrapper
            screen="StudentSettings"
            style={commonStyles.settingsIcon}
            touchableOpacity={true}
          >
            <Ionicons
              name="settings-outline"
              size={30}
              style={commonStyles.icon}
            />
          </LinkWrapper>
        </View>
      </View>

      {/* 알림 아이콘 */}
      <LinkWrapper
        screen="StudentAlerts"
        style={commonStyles.notification}
        touchableOpacity={true}
      >
        <Ionicons
          name="notifications-outline"
          size={28}
          style={commonStyles.icon}
        />
        <View style={commonStyles.notificationBadge}>
          <Text style={commonStyles.notificationText}>3</Text>
        </View>
      </LinkWrapper>
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
        <LinkWrapper
          screen="StudentHistory"
          style={commonStyles.homeButton}
          touchableOpacity={true}
        >
          <Text style={commonStyles.buttonText}>History</Text>
        </LinkWrapper>
      </View>
      <View style={commonStyles.infoBoxUserHome}>
        <Text style={commonStyles.infoBoxUserHomeText}>
          이번주 법정 대상자입니다
        </Text>
      </View>
    </View>
  );
}
