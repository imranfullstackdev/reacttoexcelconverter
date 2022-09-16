import React from "react";

export const Data = ({ exceldata }) => {
  console.log(exceldata);
  console.log(exceldata);

  return (
    <>
      <table>
        <thead>
          {/* <tr>
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Country</th>
            <th scope="col">Age</th>
            <th scope="col">Date</th>
          </tr> */}
        </thead>
        <tbody>
          {exceldata.map((individualuser) => {
            return (
              <>
                <tr>
                  <th>{individualuser.id}</th>
                  <th>{individualuser.FirstName}</th>
                  <th>{individualuser.LastName}</th>
                  <th>{individualuser.Gender}</th>
                  <th>{individualuser.Country}</th>
                  <th>{individualuser.Age}</th>
                  <th>{individualuser.Date}</th>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Data;
