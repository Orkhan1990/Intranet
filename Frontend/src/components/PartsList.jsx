import { Button, Table, TextInput } from 'flowbite-react'
import { Field } from 'formik'
import React from 'react'

const PartsList = ({index,values,name,push,remove}) => {
  return (
    
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      {index+1}
    </Table.Cell>
    <Table.Cell>
    <Field as={TextInput} type="text" />
    </Table.Cell>
    <Table.Cell>
    <Field as={TextInput} type="text" />
    </Table.Cell>
    <Table.Cell></Table.Cell>
    <Table.Cell>
    <Field as={TextInput} type="text" />
    </Table.Cell>
    <Table.Cell>
    <Button color={"blue"} onClick={()=>index>0&&remove(index)}>-</Button>
    </Table.Cell>
    <Table.Cell>
    <Button color={"blue"} onClick={()=>push({partNumber:"",count:0,partName:""})}>+</Button>
    </Table.Cell>
    <Table.Cell>
    <Button color={"blue"} size={"sm"}>Anbarda yoxlamaq</Button>
    </Table.Cell>
  </Table.Row>
  )
}

export default PartsList

{/* <div className="flex gap-2 h-[50px] ">
<Button color={"blue"} onClick={()=>push({partNumber,count,partName})}>-</Button>
<Button color={"blue"}>+</Button>
<Button color={"blue"}>Anbardan yoxla</Button>

</div> */}