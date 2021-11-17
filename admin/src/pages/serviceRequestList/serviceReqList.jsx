import "./serviceReqList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState ,useEffect} from "react";
import { userRequest } from "../../requestMethods";

export default function UserList() {
  const [data, setData] = useState(userRows);
  const [data1, setData1] = useState([]);
  useEffect(()=>{
    const getServiceReq=async ()=>{
      try{
        const res=await userRequest.get("/serviceRequest");
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
    { field: "serviceType", headerName: "service type", width: 130 },
    {
      field: "ownerName",
      headerName: "User",
      width: 170,
    },
    { field: "mobileNo", headerName: "Mobile Number", width: 200 },
    {
      field: "model",
      headerName: "Model ",
      width: 120,
    },
    {
      field: "vechileComp",
      headerName: "vechicle Company",
      width: 160,
    },
    {
      field: "location",
      headerName: "Location",
      width: 190,
    },
    {
      field: "problems",
      headerName: "problems",
      width: 160,
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
