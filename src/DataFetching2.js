import { useEffect, useState } from "react";
import axios from "axios"
function DataFetching2(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        const fetchMyData = async()=>{
           const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
           
           console.log(res);
         //console.log(await res.json());
           const resData = await res.data;
           setData(resData);
           console.log(resData);
        }
        fetchMyData();
    })
    return(
        <div>
            <table>
                <thead>
                <th>ID</th>
                <th>UserId</th>
                <th>Title</th>
                <th>Body</th>
            </thead>
    <tbody> 
        {data.map((dataItem, index) =>
             <tr key = {index}>
                <td>{dataItem.id}</td>
                <td>{dataItem.userId}</td>
                <td>{dataItem.title}</td>
                <td>{dataItem.body}</td>
             </tr>
        
    )}
    </tbody> 
</table>
</div>
    )
}
export default DataFetching2;