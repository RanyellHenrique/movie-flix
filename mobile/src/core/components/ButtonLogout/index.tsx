import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { doLogout, isAuthenticated } from "../../utils/auth";
import styles from "./styles";

const ButtonLogout: React.FC = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const navigation = useNavigation();
    const route = useRoute();
    

    const logged = async () => {
        const result = await isAuthenticated();
        result ? setAuthenticated(true) : setAuthenticated(false);
    }

    const logout = () => {
        doLogout();
        navigation.navigate("Home");
    }
    
    useEffect(() => {
        logged();
    }, [authenticated, route, isAuthenticated]);

    return(
        <>
        {authenticated &&
            <TouchableOpacity
                onPress={logout}
                style={styles.btn}
            >
                <Text style={styles.btnText}>SAIR</Text>
            </TouchableOpacity>
        }
        </>
    );
}

export default ButtonLogout;