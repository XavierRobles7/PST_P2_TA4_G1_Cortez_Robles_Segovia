import 'bootstrap/dist/js/bootstrap.js';
import tabla1 from "./img/Tabla1.png"
import tabla2 from "./img/Tabla2.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation'
import React from 'react'
import { Link } from 'react-router-dom'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
export const backend = {
  host: "http://localhost",
  port: 8080
}


function App() {
  return (
    <Router>
     <Navigation/>
     <Routes>
       <Route path="/" element={
        <div>
          <h1>  </h1>
          <h2>Bienvenido a la base de datos del grupo 1 de Stores.csv</h2>
        </div>
      } />
       <Route path="/stores" element={
        <div>
          <h1>Lista de Tiendas</h1>
          <h2> </h2>
          <h3>Puede consultar el registro entero de las tiendas en este link:</h3>
          <Link to="https://aulavirtual.espol.edu.ec/courses/12138/files/2354156/download?wrap=1">Store.csv</Link>
        </div>
      } />
       <Route path="/topAreas" element={
        <div>
          <h1>Top 5 tiendas con mayor área</h1>
          <h2> </h2>
          <img src={tabla2} alt={""} width={1080}></img>
          
        </div>
      } />
       <Route path="/topClients" element={
        <div>
          <h1>Top 10 tiendas más visitadas</h1>
          <h2> </h2>
          <table border={1} cellPadding={10} >
            <tr>
              <td>StoreID</td><td>Store Area</td><td>Items Available</td><td>Daily Costumers</td><td>Store Sales</td>
            </tr>
            <tr>
              <td>52</td> <td>1565</td> <td>1880</td> <td>1300</td> <td>57830</td>
            </tr>
            <tr>
              <td>409</td> <td>1303</td> <td>1587</td> <td>1310</td> <td>102310</td>
            </tr>
            <tr>
              <td>542</td> <td>1633</td> <td>1936</td> <td>1320</td> <td>46050</td>
            </tr>
            <tr>
              <td>835</td> <td>1327</td> <td>1609</td> <td>1320</td> <td>41500</td>
            </tr>
            <tr>
              <td>113</td> <td>1897</td> <td>2248</td> <td>1330</td> <td>56010</td>
            </tr>
            <tr>
              <td>591</td> <td>1206</td> <td>1437</td> <td>1330</td> <td>54060</td>
            </tr>
            <tr>
              <td>354</td> <td>1445</td> <td>1709</td> <td>1340</td> <td>62180</td>
            </tr>
            <tr>
              <td>373</td> <td>1876</td> <td>2254</td> <td>1340</td> <td>21650</td>
            </tr>
            <tr>
              <td>660</td> <td>1132</td> <td>1366</td> <td>1340</td> <td>52450</td>
            </tr>
            <tr>
              <td>180</td> <td>1626</td> <td>1941</td> <td>1350</td> <td>58090</td>
            </tr>
          </table>
        </div>
      } />
       <Route path="/topSales" element={
        <div>
          <h1>Top 20 tiendas con mayor ganancia</h1>
          <h2> </h2>
          <img src={tabla1} alt={""} width={1080}></img>
        </div>
      } />
      </Routes>
    </Router>
  );
}

export default App;