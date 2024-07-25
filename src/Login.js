import { useContext, useEffect, useRef, useState } from "react";
import { usecontext1 } from "./Home";

function CollegeForm() {
    const collegeid = "22b01a4281";
    const password = "1234";
    const idref = useRef(null);
    const passref = useRef(null);
    const [textdisplay, display] = useState('');
    const [isLogin, setIsLogin] = useContext(usecontext1);

    useEffect(() => {
        idref.current.focus();
    }, []);

    const btnClick = (event) => {
        event.preventDefault();
        const iid = idref.current.value;
        const ps = passref.current.value;

        if (iid === collegeid && ps === password) {
            console.log("Successfully Logged In");
            display("Successfully logged in");
            setIsLogin(true);
        } else {
            console.log("Invalid Details");
            display("Invalid Details. Please Enter Correct Details");
        }

        idref.current.value = '';
        passref.current.value = '';
    };

    return (
        <div className="card mx-auto" style={{ width: "500px", height: "500px", marginTop: "40px" }}>
            <form className="card-body" onSubmit={btnClick} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h1 style={{ fontWeight: "bolder" }}>Login</h1>
                <p style={{ color: "gray" }}>Please Provide Your Details</p>
                <label style={{ fontWeight: "bold", fontSize: "20px" }}>College ID</label>
                <input type="text" placeholder="College Id" style={{ borderRadius: "4px", width: "100%", height: "50px" }} ref={idref} />
                <label style={{ fontWeight: "bold", fontSize: "20px" }}>Password</label>
                <input type="password" placeholder="Password" style={{ borderRadius: "4px", width: "100%", height: "50px" }} ref={passref} />
                <button className="btn btn-dark" style={{ width: "90px", height: "50px", marginTop: "20px", fontSize: "20px" }}>Login</button>
                <p style={{ fontWeight: "inherit", fontSize: "20px", marginTop: "20px" }}>{textdisplay}</p>
            </form>
        </div>
    );
}

export default CollegeForm;