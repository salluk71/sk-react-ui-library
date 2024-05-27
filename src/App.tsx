
import {DragDropList} from 'bwit-react-ui-lib'
// import { DragDropList } from "./components/DragDropList";


function App() {

  const d =  [
    {id: 1, draggable:false, text: 'Default Layout' , isArchived:false, isFavourite:false, isDefault:true},
    {id: 2, draggable:true, text: 'Prepare 2019 Marketing Plan' , isArchived:false, isFavourite:true, isDefault:false},
    {id: 3, draggable:true, text: 'Update Personnel Files' , isArchived:false, isFavourite:true, isDefault:false},
    {id: 4, draggable:true, text: 'Review Health Insurance Options Under the Affordable Care Act' , isArchived:false, isFavourite:false, isDefault:false},
    {id: 5, draggable:true, text: 'New Brochures' , isArchived:false, isFavourite:false, isDefault:false},
    {id: 6, draggable:true, text: '2019 Brochure Designs' , isArchived:false, isFavourite:true, isDefault:false},
    {id: 7, draggable:true, text: 'Brochure Design Review' , isArchived:false, isFavourite:false, isDefault:false},
    {id: 8, draggable:true, text: 'Website Re-Design Plan' , isArchived:true, isFavourite:false, isDefault:false},
    {id: 9, draggable:true, text: 'Rollout of New Website and Marketing Brochures' , isArchived:false, isFavourite:false, isDefault:false},
    {id: 10, draggable:true, text: 'Create 2018 Sales Report' , isArchived:false, isFavourite:false, isDefault:false},
    {id: 11, draggable:true, text: 'Direct vs Online Sales Comparison Report', isArchived:false, isFavourite:false, isDefault:false},
  ];
  return (<><DragDropList dataId='id' TitleComponent="salman" dataSource={d} displayName='text' dragDirection='vertical'  /></>)
}

export default App
