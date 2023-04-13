import React from 'react';
import InputText from '../Input/Input';
const Search = ({ searchCurrentUser }) => {
    const searchValFn = (data) => {
        searchCurrentUser(data)
    }
    return (
        <InputText searchValFn={searchValFn} label="Search User" />
    )
}
export default Search;
