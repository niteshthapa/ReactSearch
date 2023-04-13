import React, { useState } from 'react';
const InputText = ({ label = "Enter Label", searchValFn }) => {
    const [val, setCurrentVal] = useState("");
    const onChange = (e) => {
        setCurrentVal(e.target.value);
        searchValFn(e.target.value)
    }
    return (
        <>
            <label htmlFor="user" className="form-label">{label}</label>
            <input type="text" value={val} onChange={onChange} className="form-control" id="user" placeholder="Search User" />
        </>
    )
}
export default InputText;
