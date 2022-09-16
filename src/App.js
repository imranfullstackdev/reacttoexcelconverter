import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as xlsx from "xlsx";
import Data from "./component/Data";

function App() {
  const [excelFile, SetExcelFile] = useState(null);
  const [ExcelFileerror, setExcelFileerror] = useState(null);

  const [exceldata, Setexceldata] = useState(null);
  const fileType = [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/pdf",
  ];
  const changeHandler = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // console.log(selectedFile.type);
    }
    if (selectedFile && fileType.includes(selectedFile.type)) {
      let reader = new FileReader();
      reader.readAsArrayBuffer(selectedFile);
      reader.onload = (e) => {
        setExcelFileerror(null);
        SetExcelFile(e.target.result);
      };
    } else {
      setExcelFileerror("please enter a valid type of file in excel or pdf");
      SetExcelFile(null);
    }
  };
  // console.log(excelFile);
  const submitHandler = (e) => {
    e.preventDefault();
    // if (excelFile !== null) {
    const workbook = xlsx.read(excelFile, { type: "buffer" });
    const worksheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[worksheetName];
    const data = xlsx.utils.sheet_to_json(worksheet);
    Setexceldata(data);
    // } else {
    //   Setexceldata(null);
    // }
  };
  // useEffect(()=>{
  //   submitHandler()
  // },[])
  // console.log(exceldata);

  return (
    <>
      <div>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>FILE</Form.Label>
            <Form.Control type="file" onChange={changeHandler} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div>
        {exceldata === null && <>No file selected</>}
        {exceldata !== null && (
          <div className="table-responsive">
            <table className="table">
              <Data exceldata={exceldata} />
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
