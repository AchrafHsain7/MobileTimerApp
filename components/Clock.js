import { useEffect, useRef, useState } from "react";
import { View, Text, Animated, Easing } from "react-native";



const Clock = ({radius, clockOn, setClockOn})=>{

    const rotation = useRef(new Animated.Value(0)).current;  

    useEffect(()=>{

        const animation = Animated.loop(    
        Animated.timing(rotation, {
            toValue: 360,
            useNativeDriver: true,
            duration: 3000,
            easing: Easing.linear()
            
        }));
        if(clockOn){
            animation.start();
        
        } else {
            animation.stop();
            rotation.setValue(0);
       
        }
    }, [clockOn])

    return(
        <Animated.View style={{
            transform: [{rotate: rotation.interpolate({
                inputRange: [0, 360],
                outputRange: ["0deg", "360deg"]
            })}]
        }}>
            <View style={{
                height: radius*2,
                width: radius*2,
                borderWidth: 5,
                borderRadius: radius,
                alignItems: "center",
                
            }}>
                <Animated.View style={{
                    position:"relative",
                    borderWidth: 2,
                    height: "50%",
                }}>
                </Animated.View>
            </View>
            
        </Animated.View>
        
    )
}

export default Clock;