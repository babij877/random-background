import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { useThemeColor } from "@/hooks/useThemeColor";

export default function HomeScreen() {
    const [color, updateColor] = useThemeColor()

    return (
        <TouchableWithoutFeedback onPress={updateColor}>
            <View style={[styles.container, { backgroundColor: color.background }]}>
            <View style={styles.titleContainer}>
                <ThemedText type="title">Hello there!</ThemedText>
                <HelloWave />
            </View>
            <View>
                <ThemedText type="subtitle" style={styles.subtitleText}>
                    {color.background}
                </ThemedText>
            </View>
      </View>
        </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    subtitleText: {
        textTransform: 'uppercase',
    }
});
