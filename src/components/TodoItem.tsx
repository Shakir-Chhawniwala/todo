import React from "react";

const TodoItem: React.FC<{
    id: string;
    type: string;
    onChecked: (id: string) => void;
}> = (props) => {
    console.log(props)
    return (
        <div
        onClick={() => {
            props.onChecked(props.id);
        }}
        >
            <li>{props.type}</li>
        </div>
    );
};
export default TodoItem;
