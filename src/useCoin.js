import { useState } from "react";
import { useEffect } from "react";

function UseCoin(props) {
    const [coin, setCoin] = useState(getInitialCount);

    function getInitialCount() {
        const storedCount = localStorage.getItem(props.name);
        return storedCount ? JSON.parse(storedCount) : 0;
      }
    
    const handleVersionChange = () => {
        setCoin(1);
        localStorage.setItem(props.name, 0);
    }

    useEffect(() => {
        localStorage.setItem(props.name, JSON.stringify(coin));
    }, [coin]);  //By adding props.name the warning dissapears but props.name actually references the key of the coin state. key:props.name, value:coin

    const handleIncrement = () => {
        setCoin((prevCoin) => prevCoin + 1);
      };

    return (
        <div>
            {coin > 0 && <h5>You have {coin} {props.name}</h5>}
            <button onClick={handleIncrement}>Get {props.name}</button>
            <button onClick={handleVersionChange}>Donate {props.name}</button>
        </div>
    );
}

export default UseCoin;