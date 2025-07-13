import Collection from "../Collection";
import "../../assets/stylesheets/components/_boosterEditor.scss"
import useFetchCards from "../../hooks/Api/useFetchCards";
import Card from "../Cards/Card";
import { useEffect, useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { Draggable } from "../Util/Draggable";
import { Droppable } from "../Util/Droppable";

export default function BoosterCardEditor({editContents, setFormData }) {
    const { data: cards, isPending, isError, error } = useFetchCards();
    const [contents, setContents] = useState(editContents);
    function handleDragEnd(e) {
        const { active, over } = e;
        if (over?.id == "contents") {
            if (!contents.find(c => `card-${c.id}` == active.id) && !contents.find(c => `content-${c.id}` == active.id)) {
                const card = cards.$values.find(c => `card-${c.id}` == active.id)
                setContents([...contents, card])
            }
        } else {
            setContents(contents.filter((c => `content-${c.id}` !== active.id)))
        }
    }

    useEffect(() => {
        setFormData((previousData) => ({
            ...previousData,
            ["cardIds"]: contents.map((c => c.id))
        }))
    }, [contents])

    return (
        <div className="booster-editor">
            <p>
                Drag & drop cards to and from the Booster below
            </p>
            <div className="booster-editor-group">
                <DndContext onDragEnd={handleDragEnd}>
                    <div className="booster-editor-group-collection">
                        <Droppable id={"contents"}>
                            <Collection title="Booster Contents">
                                {contents?.map(c =>
                                    <Draggable id={`content-${c.id}`} key={c.id}>
                                        <Card cardData={c} />
                                    </Draggable>
                                )}
                            </Collection>
                        </Droppable>
                    </div>
                    <div className="booster-editor-group-collection">
                        <Collection title="All Cards" isPending={isPending} isError={isError} error={error}>
                            {cards?.$values.map(c =>
                                <Draggable id={`card-${c.id}`} key={c.id}>
                                    <Card cardData={c} />
                                </Draggable>
                            )}
                        </Collection>
                    </div>
                </DndContext>
            </div>
        </div>
    )
}