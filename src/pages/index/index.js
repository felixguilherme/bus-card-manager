import { StatusBar } from 'expo-status-bar';
import styles from './styles';

export default () => {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
		</View>
	);
};
