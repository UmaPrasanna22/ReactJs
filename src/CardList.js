import Card from "./Card.js";
function CardList(){
    const name="Virat Kohli"
    const country="India"
    //const year="3"
    //const branch="cs"
    const userObject={name:"Virat Kohli",branch:"Cricketer",No:"18"};
    const users = ["Name 1","Name 2","Name 3","Name 4","Name 5","Name 6","Name 7","Name 8","Name 9","Name 10"]
    return(
        <div style={{display:'flex',flexWrap:'wrap'}}>
        {
            users.map(
                (user,index) => (<Card key={index}
                    program={name}
                    con={country}
                    user={userObject}
                    userFromArray={user}/>)
                )
        }
        </div>

    );
}
export default CardList;