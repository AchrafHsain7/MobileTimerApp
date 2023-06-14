import { View, Text, SafeAreaView, FlatList, TouchableOpacity, ScrollView} from "react-native";
import { Clock } from "../components";

import { Stack } from "expo-router";
import { useState } from "react";
import { Stopwatch, Timer} from 'react-native-stopwatch-timer';

// we need a function to calculate how much time went from the strat of the app but also to continuisly display that time
//maybe a state bool that keep track of the clock on, if yes then keep calling a function repeatedly 
//to Add a giganctic stat button when the clock is not running 

let laps = [1, 2, 3]
 
const App = () => {

    const [clockOn, setClockOn] = useState(false);
    const [watchRunning, setwatchRunning] = useState(false);
    const [resetWatch, setResetWatch] = useState(false);

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
                <View style={{borderWidth: 1, height: "15%", alignItems:"center"}}>
                    <Stopwatch 
                        start={watchRunning}
                        msecs={true}
                        reset={resetWatch}
                    ></Stopwatch>
                </View>
                <View style={{borderWidth:1, height:"40%"}}>
                    <ScrollView>
                        <FlatList
                            data={laps}
                            renderItem={(items) => {
                                items.forEach(element => (
                                    <Text>{element}</Text>
                                ))
                            }}

                        />
                    </ScrollView>
                    <TouchableOpacity style={{alignContent: "center", alignItems:"center"}}>
                        <Text>Lap</Text>
                    </TouchableOpacity>
                </View>
                <View style={{borderWidth: 1, height:"15%", flexDirection:"row", alignItems:"center"}}>
                    <TouchableOpacity style={{left:"10%"}} onPress={()=>{
                        //clear the lists of laps
                    }}>
                        <Text>Clear</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{left: "120%", position:"relative"}} 
                    onPress={()=>{
                        setClockOn(true);
                        setResetWatch(false);
                        setwatchRunning(true);
                    }}> 
                        <Text>Start</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{left: "250%"}} onPress={()=> {
                        setClockOn(false);
                        setwatchRunning(false);
                        setResetWatch(true);
                    }}>
                        <Text>Stop</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}


export default App;