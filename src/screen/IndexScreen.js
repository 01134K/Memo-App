import {FlatList, StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import React , { useContext } from 'react';
import BlogContext from '../context/BlogContext';
import { Ionicons } from '@expo/vector-icons';

const IndexScreen = () => {
    const {data , addMemo , DMemo} = useContext(BlogContext)
  return (
    <View style={styles.container}>
        <Text style={styles.MainTitle}>IndexScreen</Text>
        <TouchableOpacity 
            style={styles.BTAddMemo}
            onPress={addMemo}
        >
            <Text style={styles.BTTitle}>Add Memo</Text>
        </TouchableOpacity>
        <FlatList
            data={data}
            renderItem={({item}) => (
                <View style={styles.FlstFarm}>
                    <Text 
                    style={styles.memoIitle}
                    >
                        {item.title}
                    </Text>
                    <TouchableOpacity
                        onPress={DMemo(item.title)}
                    >
                        <Ionicons name="trash-bin-outline" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            )}
            keyExtractor={item => item.title}
        />
        {/* <Text>{value}</Text> */}
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    MainTitle:{
        fontSize:30,
        fontWeight:"600",
        marginTop:20,
    },
    BTAddMemo:{
        borderWidth:2,
        borderRadius:5,
        borderColor:"#114CFF",
        padding:5,
        backgroundColor:"#188FFF",
        marginVertical:15,
    },
    BTTitle:{
        fontSize:25,
        marginHorizontal:10,
        fontWeight:"700",
        color:"#fff",
    },
    FlstFarm:{
        width:400,
        justifyContent:"space-between",
        borderWidth:2,
        borderRadius:5,
        borderColor:"#114CFF",
        padding:5,
        marginVertical:5,
        backgroundColor:"#188FFF",
        flexDirection:"row",
    },
    memoIitle:{
        fontSize:20,
        marginHorizontal:10,
        fontWeight:"700",
        color:"#fff",
        marginRight: 40,
    }
});

export default IndexScreen;