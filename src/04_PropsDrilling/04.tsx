// Review following code snippet and answer questions:
//     1) What’s wrong with this code snippet?
//     2) How can we improve it?
//     3) What benefits and drawbacks of each method?

//
// Answers:
//     1)  setExtraA' and setExtraB' is assigned a value on top level but never used
//
//     2,3)
//       - Used callback () => setCount(count + 1) in parent component.
//         Child component should be UI component only.
//         business logic layer should be in parent // Deep props drilling makes code harder to read and update
//
//       - The Context API solving prop-drilling from all levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.
//       - Redux(good for big apps)
//
//

import React, { FC, useState } from "react";
export const Parent: FC = () => {
    const [count, setCount] = useState(0);
    const [extraA, setExtraA] = useState(1);
    const [extraB, setExtraB] = useState(2);
    return (
        <LayerA
            count={count}
            setCount={setCount}
            extraA={extraA}
            extraB={extraB}
        /> );
};
/**
 * LAYER A -------------------------------------------------
 */
type LayerAProps = {
    count: number;
    setCount: (value: number) => void;
    extraA: number;
    extraB: number;
}
const LayerA: FC<LayerAProps> = ({ count, setCount, extraA, extraB
                                 }) => (
    <div>
        <LayerB count={count} setCount={setCount} extraB={extraB} />
        <div>{extraA}</div>
    </div> );
/**
 * LAYER B -------------------------------------------------
 */
type LayerBProps = {
    count: number;
    setCount: (value: number) => void;
    extraB: number;
}
const LayerB: FC<LayerBProps> = ({ count, setCount, extraB }) => (
    <div>
        <Child count={count} setCount={setCount} />
        <div>{extraB}</div>
    </div>
);
/**
 * LAST CHILD ----------------------------------------------

 */
type ChildProps = {
    count: number;
    setCount: (value: number) => void;
}
const Child: FC<ChildProps> = ({ count, setCount }) => (
    <>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Inc</button>
    </>
);