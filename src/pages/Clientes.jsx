import {React, useState, useEffect} from 'react'
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter
} from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";

const Clientes = () => {

  const [clientes, setClientes] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3050/api/clientes");
      const clientes = await response.json();
      setClientes(clientes.clientes);
    }

    fetchData();
    console.log(clientes);
  }, []);
  return (
    <div className="m-2 md:m-1 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Clientes" />
      <GridComponent
        dataSource={clientes}
        allowPaging
        allowSorting
        toolbar={["Delete"]}
        editSettings={{ allowEditing: true, allowDeleting: true }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Clientes;
