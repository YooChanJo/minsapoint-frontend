import React from "react";
import { View, Text } from "react-native";
import { useUiStyles } from "@/src/components/ui-styles-provider";
import { TeacherMenuItem } from "@/src/components/teacher-menu-item";
import Ionicons from "@react-native-vector-icons/ionicons";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import LinkWrapper from "@/src/components/link-wrapper";

export default function TeacherHomeScreen() {
  const { colors, commonStyles } = useUiStyles();

  return (
    <View style={commonStyles.container}>
      {/* Header */}
      <Text style={commonStyles.titleText}>MinsaPoint</Text>

      {/* Profile */}
      <View style={commonStyles.profileRow}>
        <LinkWrapper
          style={commonStyles.settingsIcon}
          screen="TeacherSettings"
          touchableOpacity={true}
        >
          <Ionicons name="settings" size={20} color={colors.text} />
        </LinkWrapper>

        <View style={{ marginLeft: 8 }}>
          <Text style={commonStyles.profileName}>왕두균 선생님</Text>
        </View>
      </View>

      {/* Stats */}
      <View style={commonStyles.summaryBox}>
        <Text style={commonStyles.smallGrayText}>피기소자수: 20명</Text>
        <Text style={commonStyles.boldBlackText}>
          최다 기소항목:{" "}
          <Text style={{ fontWeight: "normal" }}>
            Absent from Morning Exercise
          </Text>
        </Text>
      </View>

      {/* Menu Items */}
      <View style={commonStyles.menuWrapper}>
        <TeacherMenuItem
          icon={<MaterialIcons name="history" size={28} color="black" />}
          title="History"
          subtitle="기소항목 & 상점 추천 히스토리"
          screen="TeacherHistory"
        />
        <TeacherMenuItem
          icon={<Ionicons name="sunny" size={28} color="black" />}
          title="Reward Points"
          subtitle="상점 추천"
          screen="TeacherRewardPoints"
        />
        <TeacherMenuItem
          icon={<Ionicons name="rainy" size={28} color="black" />}
          title="Penalty Points"
          subtitle="기소"
          screen="TeacherPenaltyPoints"
        />
      </View>
    </View>
  );
}
