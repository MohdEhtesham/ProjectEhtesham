import React from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../redux/action';


export default function BooksListApp() {
    const [task, setTask] = React.useState('');
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();


    const handleAddTodo = () => {
        dispatch(addTodo(task))
        setTask('')
    }

    const deletetodo=()=>{
      
    }

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>React Native ToDo App with Redux Persist </Text>
            <Text style={styles.title}> Add ToDo Here</Text>
            <TextInput
                style={styles.input}
                mode="outlined"
                label="Task"
                value={task}
                onChangeText={task => setTask(task)}
            />
            <Button title='Add' color="#841584" onPress={handleAddTodo} />
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{justifyContent:'center',flexDirection:'row'}}>
                            <Text style={styles.list}>{item.task}</Text>
                            <TouchableOpacity onPress={deletetodo()}>

                            <Text style={styles.list}> X</Text>
                            </TouchableOpacity>
                        </View>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#ecf0f1',
        padding: 10,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    title: {
        margin: 10,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    list: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});