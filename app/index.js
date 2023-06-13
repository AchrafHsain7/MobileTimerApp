import { View, Text, SafeAreaView, FlatList, TouchableOpacity, ScrollView} from "react-native";
import { Clock } from "../components";

import { Stack } from "expo-router";
import { useState } from "react";

// we need a function to calculate how much time went from the strat of the app but also to continuisly display that time
//maybe a state bool that keep track of the clock on, if yes then keep calling a function repeatedly 
function timer (start){
    let time  = Date.now();
    return(time - start);
}

//to Add a giganctic stat button when the clock is not running 

const App = () => {

    let time = 0;
    const [clockOn, setClockOn] = useState(false);

    return(
        <SafeAreaView style={{flex: 1}}>
            <Stack.Screen  
                options={{
                    headerTitle: "Watcher"
                }}
            />
            <View style={{height: "100%", flexDirection:"column"}}>
                <View style={{alignItems: "center", borderWidth:2, height:"35%"}}>
                    <Clock 
                        radius={100}
                        clockOn={clockOn}
                        setClockOn={setClockOn}
                    />
                </View>
                <View style={{borderWidth: 1, height: "10%", alignItems:"center"}}>
                    <Text style={{textAlignVertical:"center", textAlign:"center"}}>{time}</Text>
                </View>
                <View style={{borderWidth:1, height:"40%"}}>
                    <ScrollView>
                        <Text>List of all laps will be here</Text>
                        <Text>List of all laps will be here</Text>
                        <Text>List of all laps will be here</Text>
                    </ScrollView>
                </View>
                <View style={{borderWidth: 1, height:"15%", flexDirection:"row", alignItems:"center"}}>
                    <TouchableOpacity style={{left:"10%"}}>
                        <Text>Clear</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{left: "120%", position:"relative"}} 
                    onPress={()=>{
                        setClockOn(true)
                        setInterval(()=>{
                            time+=1;
                            console.log(time)
                        }, 1000);
                    }}> 
                        <Text>Lap</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{left: "250%"}} onPress={()=> {
                        setClockOn(false);
                    }}>
                        <Text>Stop</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}


export default App;