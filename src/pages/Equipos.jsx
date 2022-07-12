import {React, useState, useEffect} from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Inject, Toolbar } from '@syncfusion/ej2-react-grids'

import {  equiposGrid } from '../data/dummy'
import { Header } from '../components'

const Employees = () => {

  const [equipos, setEquipos] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3050/api/equipos");
      const equipos = await response.json();
      setEquipos(equipos.equipos);
    }

    fetchData();
  }, []);
  return (
    <div className="m-2 md:m-1 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Equipos"/>
      <GridComponent
    
      dataSource={equipos}
      allowPaging
      allowSorting
      toolbar={['Search']}
      width="auto">

        <ColumnsDirective>
        {equiposGrid.map((item, index)=>(<ColumnDirective key={index} {...item} />))}
        </ColumnsDirective>
        <Inject services={[ Page, Search, Toolbar]}/>
      </GridComponent>
    </div>
  )
}

export default Employees