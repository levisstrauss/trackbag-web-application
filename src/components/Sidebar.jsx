import {ButtonGroup} from "./ButtonGroup.jsx";
import {AddItemForm} from "./AddItemForm.jsx";
import {useItemsStore} from "../stores/itemsStore.js";


export const Sidebar = () => {
    const addItem = useItemsStore(state => state.addItem);
    return (
        <div className="sidebar">
            <AddItemForm onAddItem={addItem} />
            <ButtonGroup />
        </div>
    )
}
