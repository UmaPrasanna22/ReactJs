function Card(props){
    return(
        <div className="card" style={{width:'350px'}}>
            <img src="/download.png" width={250}
            style={{border:'10px solid #ADD8E6',borderRadius:'50px'}}></img>
            <div className="card-body">
                <h1>{props.users}</h1>
                <h1>{props.user.name}</h1>
                <h2>{props.user.branch}</h2>
                <h3>{props.user.No}</h3>
                <button type="button" class="btn btn-primary">Connect</button>
            </div>
        </div>
    );
}
export default Card;