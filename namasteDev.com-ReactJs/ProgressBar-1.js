import React, { useEffect, useState } from 'react';

function ProgressBar() {
    const [percentageCompleted,setPercentageCompleted]=useState(40)
    const [backgroundColor,setBackgroundColor]=useState("yellow")
    useEffect(() => {
        if (percentageCompleted < 40) {
            setBackgroundColor("yellow")
        } else if (percentageCompleted >= 40 && percentageCompleted < 80) {
            setBackgroundColor("orange")
        } else {
            setBackgroundColor("green")
        }
    },[percentageCompleted])
    return (
        <div id="testBgColor" style={{ backgroundColor: `${backgroundColor}` ,}}>

            <div style={{   border: '1px solid', display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10, height: 20,  }}>
                {percentageCompleted}%
            </div>
        </div>
    );
}

export default ProgressBar;

