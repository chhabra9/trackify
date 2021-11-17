import "./newsLetterReq.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState ,useEffect} from "react";
import { userRequest } from "../../requestMethods";

export default function UserList() {
  const [data1, setData1] = useState([]);
  useEffect(()=>{
    const getServiceReq=async ()=>{
      try{
        const res=await userRequest.get("/email");
        res.data.map((item)=>
          setData1(prev=>[
            ...prev,item
          ])
        );
        setData1(res.data);
      }catch(err){}
    };
    getServiceReq();
    },[]);
    console.log(data1);
  const columns = [
    { field: "_id", headerName: "ID", width:500 },
    {
      field: "email",
      headerName: "email",
      width: 500,
    },
   
  ];
  return (
    <div className="userList">
      <DataGrid
        rows={data1}
        getRowId={(row) => row._id}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        // checkboxSelection
      />
    </div>
  );
}
