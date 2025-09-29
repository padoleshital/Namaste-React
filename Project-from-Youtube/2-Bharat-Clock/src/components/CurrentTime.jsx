let CurrentTime = () =>{
    let currTime = new Date();
    return <p>This is the current time:{currTime.toLocaleTimeString()} {" - "} CurrentTime:{currTime.toDateString()}</p>
}

export default CurrentTime;