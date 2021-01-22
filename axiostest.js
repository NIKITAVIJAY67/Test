import axios from 'axios';
import react, {useState, useEffect} from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

const Contents = (props) => {
    const url = "https://abc/login";
    const token = useState('');

    const [a, setVara] = useState('');
    const [b, setVarb] = useState('');
    const [loginclick, setVarl] = useState(0);


    const changeVar1 = (e)=> {
      setVara(e.target.value);
    }
    const changeVar2 = (e)=> {
      setVarb(e.target.value);
    }
    const loginbtn = (e)=> {
        if(a!== '' && b!==''){
            setVarl(1);
        }else{
            setVarl(0);
        }
      console.log(loginclick);
      if(loginclick == 1){
        getTokendata();
      }
    }
    
    const getTokendata = async () => {
        try {
            // const response = await axios.post(url);
            // setPosts(response.data);

            axios.post(url, {
                firstName: a,
                lastName: b
            })
            .then((response) => {
                console.log(response);
                token=response;
            }, (error) => {
                console.log(error);
            });
        
        } catch ( err ) {
            console.log(err);
        }
    }
    // useEffect(() => {
    //     (async () => {
    //     await getTokendata(); 
    //     })(); 
    // }, []);
    return (
        <div style={{margin:'200px'}}>
            <input type='text' onChange={(e) => {changeVar1(e)}}/>
            <br/>
            <input type='text' onChange={(e) => {changeVar2(e)}}/>
            <br/>
            <input type="button" value= "Login" onClick={(e) => {loginbtn(e)}} />
        </div>
    )
}

export default Contents;