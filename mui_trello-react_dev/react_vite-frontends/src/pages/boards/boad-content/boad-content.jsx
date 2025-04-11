/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { Box } from '@mui/material'
import { mapOrder } from '~/utils/sorts'
import BoardListColumn from './board-list-column/board-list-column';
import { DndContext, PointerSensor, MouseSensor, TouchSensor, useSensor, useSensors, DragOverlay, defaultDropAnimationSideEffects } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import BoardColumn from './board-list-column/columns/columns';
import BoardCard from './board-list-column/columns/list-card/card/card';

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD',
};
export default function BoardContent({board}) {
  // const orderCloumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')
  const [orderCloumnsState, setOrderCloumnsState] = useState([]);

  
  // only drag column or card
  const [activeDragItemId, setActiveDragItemId] = useState(null);
  const [activeDragItemType, setActiveDragItemType] = useState(null);
  const [activeDragItemData, setActiveDragItemData] = useState(null);






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

  const handleDragStart = (event) => {
    console.log('Drag and drop start: ', event);
    
    setActiveDragItemId(event?.active?.id);
    setActiveDragItemType(event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN);
    setActiveDragItemData(event?.active?.data?.current);
  }
  const handleDragEnd = (event) => {
    // console.log('Drag and drop successful: ', event);
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
    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setActiveDragItemData(null)
  }
  const handleDragCancel = () => {
    console.log('Drag and drop cancel');
    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setActiveDragItemData(null)
  }
  const handleDragOver = (event) => {
    // console.log('Drag and drop over: ', event);
  }
  const handleDragMove = (event) => {
    // console.log('Drag and drop move: ', event);
  }
  const handleDragEnter = (event) => {
    // console.log('Drag and drop enter: ', event);
  }
  const handleDragLeave = (event) => {
    // console.log('Drag and drop leave: ', event);
  }
  const handleDragDrop = (event) => {
    // console.log('Drag and drop drop: ', event);
  }
  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: { active: { transform: 'translateY(0)', }, },
    })
  }
  // console.log('activeDragItemId: ', activeDragItemId);
  // console.log('activeDragItemType: ', activeDragItemType);
  // console.log('activeDragItemData: ', activeDragItemData);

  return (
    <>
    <DndContext sensors={sensors} 
      onDragEnd={handleDragEnd} 
      onDragStart={handleDragStart}
    >
      <Box sx={{
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        p: '10px 0'
      }}>
        <BoardListColumn columns={orderCloumnsState}/>
        <DragOverlay dropAnimation={dropAnimation}>
          {(!activeDragItemType) && null }
          {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN ) && (<BoardColumn column={activeDragItemData} />)}
          {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD ) && (<BoardCard card={activeDragItemData} />)}
        </DragOverlay>
      </Box>
    </DndContext>
    </>
  )
}