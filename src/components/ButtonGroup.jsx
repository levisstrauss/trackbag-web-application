import {Button} from "./Button.jsx";
import {useItemsStore} from "../stores/itemsStore.js";

export const ButtonGroup = () => {

    const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
    const markAllAsIncomplete = useItemsStore((state) => state.markAllAsIncomplete);
    const resetToInitial  = useItemsStore((state) => state.resetToInitial);
    const removeAllItems = useItemsStore((state) => state.removeAllItems);

    return (
        <section className="button-group">
           <Button onClick={markAllAsComplete} buttonType="button">
               Mark all as complete
           </Button>
            <Button onClick={markAllAsIncomplete} buttonType="button">
                Mark all as incomplete
           </Button>
            <Button onClick={resetToInitial} buttonType="button">
                Reset to initial
           </Button>
            <Button onClick={removeAllItems} buttonType="button">
                Remove all items
            </Button>
        </section>
    )
}
