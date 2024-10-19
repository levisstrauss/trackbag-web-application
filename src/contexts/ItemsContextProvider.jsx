import React, {createContext, useEffect, useState} from 'react'
import {initialItems} from "../lib/constants.js";

// Create the context
export const ItemsContext = createContext();

export const ItemsContextProvider = ({ children }) => {
    const [items, setItems] = useState(
        () => JSON.parse(localStorage.getItem("items")) || initialItems
    );
    // Get the text typed by user
    const handleAddItem = (newItemText) => {
        // Construct the new item
        const newItem = {
            id: new Date().getTime(),
            name: newItemText,
            packed: false,
        };
        // Add the new item
        const newItems = [...items, newItem];
        setItems(newItems);
    };

    // Remove all items
    const handleRemoveAllItems = () => {
        setItems([]);
    }
    // Reset to initial
    const handleResetToInitial = () => {
        setItems(initialItems);
    }
    // All complete
    const handleMarkAllAsComplete = () => {
        const newItems = items.map((item) => {
            return {...item, packed: true};
        });
        setItems(newItems)
    }
    // All incomplete
    const handleMarkAllAsIncomplete = () => {
        const newItems = items.map((item) => {
            return {...item, packed: false};
        })
        setItems(newItems)
    }

    // Delete an item
    const handleDeleteItem = (id) => {
        const newItems = items.filter((item) => item.id !== id);
        setItems(newItems)
    }
    // toggle function
    const handleToggleItem = (id) => {
        const newItems = items.map((item) => {
            if (item.id === id) {
                return {...item, packed: !item.packed };
            }
            return item;
        });
        setItems(newItems)
    }
    // Local storage using useEffect
    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
    }, [items])

    return (
        <ItemsContext.Provider
            value={{
                items,
                handleAddItem,
                handleDeleteItem,
                handleToggleItem,
                handleRemoveAllItems,
                handleResetToInitial,
                handleMarkAllAsComplete,
                handleMarkAllAsIncomplete,
           }}
        >
            {children}
        </ItemsContext.Provider>
    )
}
