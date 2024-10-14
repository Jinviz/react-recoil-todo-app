import React from 'react';
import {useRecoilState, useRecoilValue} from "recoil";
import {todoListFilterState} from "../todoAtoms";

const TodoListFilters = () => {
    const [filter, setFilter] = useRecoilState(todoListFilterState);

    const updateFilter = ({ target: {value} }) => {
        setFilter(value);
    };

    return(
       <>
           Filters:
           <select value={filter} onChange={updateFilter}>
               <option value="Show ALl">ALL</option>
               <option value="Show Completed">Completed</option>
               <option value="Show Uncompleted">Uncompleted</option>
           </select>
       </>

    )
}

export default TodoListFilters;