import React, {useState} from 'react';
import { SideBarButton, SideBarInput, SideBarSelector, SideBarForm } from './StyledComponents';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
  addItem
} from '../features/columns/columnsSlice';

const AddItemForm = () => {
    const dispatch = useDispatch();
    const [itemName, setItemName] = useState('');
    const [column, setColumn] = useState('');

    //when the 'ADD ITEM' button is clicked and if the itemName is filled and also the column is selected then dispatch with addItem action is called
    //the object item is passed as a parameter
    const handleAddButton = (e) => {
        e.preventDefault();

        if(itemName === '' || column === '') return;

        const item = {
            id: uuidv4(),
            name: itemName,
            column: column
        }

        dispatch(addItem(item));
        //reset the values to empty string
        setItemName('');
        setColumn('');
    }

    return (
        <SideBarForm onSubmit={handleAddButton}>
            <div style={{width:"100%"}}>
            <SideBarInput placeholder="enter item" value={itemName} onChange={(e)=>setItemName(e.target.value)}/>

            <SideBarSelector value={column} onChange={(e)=> setColumn(e.target.value)} >
                <option value="">Choose column</option>
                <option value="Column 1">Column 1</option>
                <option value="Column 2">Column 2</option>
            </SideBarSelector>
            </div>
            
            <SideBarButton type="submit"> Add item </SideBarButton>
        </SideBarForm>
    )
}

export default AddItemForm;