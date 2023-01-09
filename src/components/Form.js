// Import the useState hook from react
import { useState } from "react";
// Always make sure to declare the props parameter so you can use props in your Component
const Form = (props) => {
    // State to hold the data of our form
    const [formState, setFormState] = useState({
        searchterm: "",
    });
    const handleChange = (e) => {
        // Use the event (e) object to update value
        setFormState({ searchterm: e.target.value });
    };

    const handleSubmit = (e) => {
        //Prevent page from refreshing on form submission
        e.preventDefault();
        //pass the search term to the getMovie prop
        props.getMovie(formState.searchterm);
    };

    // The Component must return some JSX
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name="searchterm"
            onChange={handleChange}
            value={formState.searchterm} 
            />
            <input type="submit" value="submit" />
        </form>
    </div>
  )
}

export default Form;