//w komponencie można przekazać  jakieś propsy, ale na co to komu?
import React from 'react';

import DeleteButton from "./buttons/delete-button/DeleteButton";
import GetButton from "./buttons/get-button/GetButton";
import PostButton from "./buttons/post-button/PostButton";
import PutButton from "./buttons/put-button/PutButton";
// function Menu(){
//     return <h1>MENU COMPONENT</h1>;
// }

class Menu extends React.Component {
    // bardzo importante, render() moze zwracac szablony zamknięte tylko w jeden root node, np jak tutaj wszystko owrapowane w <div>
    render() {
        return <div>
            <h1>MENU BUTTONS</h1>
            <DeleteButton></DeleteButton>
            <GetButton></GetButton>
            <PutButton></PutButton>
            <PostButton></PostButton>
        </div>

    }
}

export default Menu;
