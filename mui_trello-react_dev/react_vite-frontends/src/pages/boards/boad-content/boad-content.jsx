/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { Box } from '@mui/material'
import { mapOrder } from '~/utils/sorts'
import BoardListColumn from './board-list-column/board-list-column';
import { DndContext, PointerSensor, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
export default function BoardContent({board}) {
  // const orderCloumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')
  const [orderCloumnsState, setOrderCloumnsState] = useState([]);

  // Bug on Mobile
  const pointerSensor = useSensor(PointerSensor,{activationConstraint: { distance: 0 }});
  
  // Recommend
  const mouseSensor = useSensor(MouseSensor,{activationConstraint: { distance: 0 }});
  const touchSensor = useSensor(TouchSensor,{activationConstraint: { delay: 0, tolerance: 500 }});

  // const sensors = useSensors(pointerSensor);
  const sensors = useSensors(mouseSensor, touchSensor);
  useEffect(() => {
    setOrderCloumnsState(
      mapOrder(board?.columns, board?.columnOrderIds, '_id')
    );
  }, [board]);
  const handleDragEnd = (event) => {
    console.log('Drag and drop successful: ', event);
    const { active, over } = event;
    // area not drop
    if (!over) return;

    if (active.id !== over.id) {
      const oldIndex = orderCloumnsState.findIndex((column) => column._id === active.id);
      const newIndex = orderCloumnsState.findIndex((column) => column._id === over.id);
      
      //  Syntax: update new array
      // arrayMove(items, oldIndex, newIndex);
      const dndOrderedColumns = arrayMove(orderCloumnsState, oldIndex, newIndex);
      // console.log('dndOrderedColumns: ', dndOrderedColumns);

      const dndOrderedColumnsIds = dndOrderedColumns.map(column => column._id);
      // console.log('dndOrderedColumnsIds: ', dndOrderedColumnsIds);

      setOrderCloumnsState(dndOrderedColumns);
    }
  }

  return (
    <>
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box sx={{
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        p: '10px 0'
      }}>
        <BoardListColumn columns={orderCloumnsState}/>
      </Box>
    </DndContext>
    </>
  )
}