import {StyleSheet,Text,View} from 'react-native';

function GoalItem(){
    return (
        <View style={styles.goalItem}>
          <Text style={styles.goalText}>{itemData.item.text}</Text>
        </View>
    )
};

const styles = StyleSheet

export default GoalItem;