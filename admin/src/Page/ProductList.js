import React from 'react'
import Menu from './Menu';
export default function ProductList() {


  return (
    <>
     <div classname="mt-3 mb-3" style={{backgroundColor: 'white', padding: '2%'}}>
  <div className="container-fluid">
    <h3>Product List</h3>
  </div>
  <div className="container-fluid">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
    </>
  )
}
