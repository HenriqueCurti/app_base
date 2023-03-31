import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../pages/Welcome";
import Sigin from "../pages/Sigin";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
              name = "Welcome"
              component={ Welcome}
              options={{ headerShown : false}}
            />

            <Stack.Screen
              name = "Login"
              component={ Sigin}              
              options={{ headerShown : false}}
            />
        </Stack.Navigator>
    )
}