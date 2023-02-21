import {useEffect, useState} from "react";
import {SERVER_URL} from "@/config";
import {TableBody, TableCell, TableHead, TableRow, Table, TableContainer, Paper} from "@mui/material";


const TableData = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch(SERVER_URL)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setDatas(data);
      })
      .catch(err => {
        console.log(err)
      })
  }, []);
  return (
    <div className={'container bg-white'} style={{width: '100vw', height: '100vh'}}>
      <div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>PrescriptionID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>DoctorName</TableCell>
                <TableCell>ExerciseName</TableCell>
                <TableCell>NumberOfCompletedSets</TableCell>
                <TableCell>FinishStatus</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {datas.map(data => {
                return (
                  <TableRow key={data.prescriptionid}>
                    <TableCell>
                      {data.prescriptionid}
                    </TableCell>
                    <TableCell>
                      {data.name}
                    </TableCell>
                    <TableCell>
                      {data.doctorname}
                    </TableCell>
                    <TableCell>
                      {data.exercisename}
                    </TableCell>
                    <TableCell>
                      {data.numberofcompletedsets}
                    </TableCell>
                    <TableCell>
                      {data.finishstatus}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default TableData;