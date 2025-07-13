import { useDraggable } from "@dnd-kit/core";


export function Draggable(props){
    const {attributes, listeners, setNodeRef, transform} = useDraggable({id: props.id});

    const style = transform ? 
        {transform: `translate(${transform.x}px, ${transform.y}px)`} : undefined;
        
    return(
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {props.children}
        </div>
    )

}