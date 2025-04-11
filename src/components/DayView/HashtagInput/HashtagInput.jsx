import { useState } from "react";

import './HashtagInput.sass';

const HashtagInput = ({hashtags, setHashtags, setErrorMsg}) => {
    const [newHashtag, setNewHashtag] = useState("");
    const [showHashPopup, setShowHashPopup] = useState(false);

    const handleAddClickHash = () => {
        setShowHashPopup(!showHashPopup);
        setErrorMsg('');
    }

    const handleSubmitHashtag = () => {
        const trimmed = newHashtag.trim();

        if (!trimmed) {
            setErrorMsg("Хештег не может быть пустым.")
            return
        }

        if (hashtags.includes(trimmed)) {
            setErrorMsg("Такой хештег уже добавлен.")
            return
        }

        setHashtags([...hashtags, trimmed])
        setNewHashtag("")
        setShowHashPopup(false)
        setErrorMsg("")
    };

    return (
        <>
        <button className="plus" onClick={handleAddClickHash}>+</button>
        {showHashPopup && (
            <div className="popup__hash">
                <input
                    type="text"
                    placeholder="Название хештега"
                    value={newHashtag}
                    onChange={(e) => setNewHashtag(e.target.value)}
                />
                <button onClick={handleSubmitHashtag}>Добавить</button>
            </div>
        )}
        </>
    )
}

export default HashtagInput;