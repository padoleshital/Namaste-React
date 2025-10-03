function Hello(){
    let name ="Shital";

    let fullName =() =>{
        return 'Shital Padole';
    }

    return <h3>Hello this is Hello Component. and I am your {name} and my full name is {fullName()}</h3>
}
export default Hello;