
import React from 'react';
 
// Importing toastify module
import {toast} from 'react-toastify';
 
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';
 
 // toast-configuration method,
 // it is compulsory method.
toast.configure()
 
// This is main function
const GeeksforGeeksToast = () => {
    // function which is called when
    // button is clicked
    const notify = ()=>{
 
        // Calling toast method by passing string
        toast('Hello Geeks')
    }
    return (
        <div className="GeeksforGeeks">
            <button onClick={notify}>Click Me!</button>
            </div>
    );
}
  
export default GeeksforGeeksToast;