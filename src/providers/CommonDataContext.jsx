import React, { useEffect, useState } from "react";
import axios from "axios";

const CommonDataContext = React.createContext({});

const CommonDataProvider = (props) => {
    const [connections, setConn] = useState([]);
    useEffect(() => {
        const getCommonData = async () => {
            const res = await axios.get(
                "/client/9dR6Ug2BQQbmBMp6grHf1R962NBigRxg.js?t1634713429698"
            );
            const data = JSON.parse(res.data.slice(16, -2));
            console.log(data.strategies);
            setConn(data.strategies);
        };

        getCommonData();
    }, []);
    return (
        <CommonDataContext.Provider value={{ connections }}>
            {props.children}
        </CommonDataContext.Provider>
    );
};

export { CommonDataProvider, CommonDataContext };
