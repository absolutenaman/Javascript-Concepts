import React, { useRef, useState,act } from "react";
import "../styles.css";

function OTPInput({ onChangeOTP }) {
    const length = 4; // Total number of OTP input boxes
    const [otp, setOTP] = useState(Array(length).fill("")); // State to store each digit
    const inputsRef = useRef([]); // Array of input refs to control focus


    const focusInput = (index) => {
        if(index>=0 && index<4)
            inputsRef.current[index].focus();
    };


    const handleChange = (e, index) => {
        // TODO: Implement value validation, state update, auto-focus, and OTP completion check
        if (e.code !== "Backspace") {
            console.log("!!! handleChange called",)
            let otpArr = otp
            console.log(e.target.value)
            if (e.target.value >= 0 && e.target.value <= 9) {
                otpArr[index] =parseInt(e.target.value)
                setOTP((prev) => [...otpArr]);
                focusInput(index + 1)
            }
        }
    };
    const handleKeyDown = async(e, index) => {
        if (e.code === "Backspace") {
            console.log("!!! handleKeyDown called", e)
            if (e.target.value >=0 && e.target.value <=9) {
                let arr = Array(length).fill("")
                for (let i = 0; i < 4; i++){
                    if (i !== index)
                        arr[i] = otp[i]
                }
                setOTP((prev) => arr);
                console.log("!!! otpArr", arr)
                console.log("!!! otp", otp)
            }
        }
    };


    const handlePaste = (e) => {
        console.log(e)
        // let tempArr = e.split("")
        console.log("e",e)
        let arr = Array(length);
        for (let i = 0; i < 4; i++){
            arr[i]=parseInt(tempArr)
        }
        setOTP(arr)
    };

    // Render the OTP input fields
    return (
        <div onPaste={handlePaste}>
            {otp.map((digit, index) => (
                <input
                    key={index}
                    ref={(el) => (inputsRef.current[index] = el)} // Save input ref for focus management
                    type="text" // Use text input for better control over formatting
                    maxLength="1" // Limit to 1 character per input
                    inputMode="numeric" // Show numeric keyboard on mobile devices
                    value={digit} // Controlled input tied to state
                    onChange={(e) => handleChange(e, index)} // Handle typing
                    onKeyDown={(e) => handleKeyDown(e, index)} // Handle backspace
                    style={{
                        width: "40px",
                        height: "40px",
                        fontSize: "20px",
                        textAlign: "center",
                        marginRight: "10px"
                    }}
                />
            ))}
        </div>
    );
}

export default OTPInput;
