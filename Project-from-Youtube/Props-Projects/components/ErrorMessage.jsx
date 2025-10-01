const ErrorMessage = ({items}) =>{
    return(
        <p>{items.length === 0 ? "No food item available" : ""}</p>
    );
}

export default ErrorMessage;