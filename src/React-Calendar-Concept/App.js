import React,{useState} from 'react';

import DatePicker from "react-datepicker";

import 'react-datepicker/dist/react-datepicker.css';

const App = () => {
    // State variable & function
    const[selectedDate,setSelectedDate] = useState(null);
    console.log(selectedDate);

    // Event Handler as callback function
    const handleSelectedDate = (date) => {
        // Invoke State function
        setSelectedDate(date);
    }

    return <>
        <DatePicker
            selected={selectedDate}
            onChange={handleSelectedDate}
            dateFormat='dd/MM/yyyy'
            // minDate={new Date()}
            maxDate={new Date()}
            isClearable
            // showYearDropdown
            // scrollableMonthYearDropdown
            placeholderText='DD/MM/YYYY'
        />
    </>
}

export default App;