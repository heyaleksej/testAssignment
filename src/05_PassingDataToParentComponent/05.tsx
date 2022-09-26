// Review following code snippet and answer questions:
//     1) What options do we have to get `open` value in Parent component?
//     2) What benefits and drawbacks of each method?


// Answers
//         - Pass a function down to change the prop
//         Create a callback function in the parent component. This callback function will get the data from the child component.
//         Pass the callback function in the parent as a prop to the child component.
//         The child component calls the parent callback function using props.
//         - React Context, React Hook:useContext
//         When integrating the context into your application, consider that it adds a good amount of complexity.
//         Sometimes drilling the props through 2–3 levels in the hierarchy is even better.
//

import React, {FC, ReactNode, useReducer, useState} from "react";
export const Parent: FC = () => {

    const [open, toggleOpen] = useReducer(value => !value, false);

    //*Conditional Rendering

    return (
        <div>
            <Child
                toggleOpen={toggleOpen}>
                {open && <SomeOtherComponent />}
            </Child>
        </div>
    ) };
const Child: FC<{children:ReactNode, toggleOpen: () => void }> = ({children, toggleOpen}) => {
    return (
        <div>
            <button onClick={toggleOpen}>
                Toggle
            </button>
        </div>
    ) };

const SomeOtherComponent = () => <div>SomeOtherComponent</div>



