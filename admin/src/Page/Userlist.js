import React from 'react';
import axios from 'axios';
import { useState,useEffect  } from 'react';

const Userlist = () => {

      
    // const [userlist, setuserlist] = useState();
    // useEffect(() => {
    //     axios.get('https://reqres.in/api/users')
    //     .then(function (response) {
    //         setuserlist(response.data.data);
    //         // alert(setuserlist);
    //       console.log(response.data.data);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     })
    //   });

    // const dispatch = useDispatch();
    // const data = useSelector((state) => state.Product);
    // useEffect(() => {
    //     dispatch(fetchProducts());
    //   }, []);

    
    return (
        <>
      <div classname="mt-3 mb-3" style={{backgroundColor: 'white', padding: '2%'}}>
  <div className="container-fluid">
    <h3>User List</h3>
  </div>
  <div className="container-fluid">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Sr</th>
          <th scope="col">Name</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
      <tbody>
        {
            // console.log(userlist)
            // userlist.map((data) => {
            //     <tr>
            //         <th scope="row">1</th>
            //         <td>{data.firstname}</td>
            //         <td>{data.lastname}</td>
            //         <td>{data.email}</td>
            //     </tr>     
            // } 
            // )   
        }
      </tbody>
    </table>
  </div>
</div>
        </>
    );
}

export default Userlist;
