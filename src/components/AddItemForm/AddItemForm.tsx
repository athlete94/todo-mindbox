import React, {ChangeEvent, KeyboardEvent, useCallback, useState} from 'react';
import s from './AddItemForm.module.css'


type AddItemFormTypeProps={
    callBack:(title:string)=>void,
    placeholder?: string
    disabled?: boolean
}

export const AddItemForm = React.memo((props:AddItemFormTypeProps) => {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addTask = () => {
        let newTitle = title.trim();
        if (newTitle !== "") {
            props.callBack(newTitle);
            setTitle('')
        } else {
            setError("Title is required");
        }
    }

    const onFocusHandler = () => {
        setError('')
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(error !== null) setError(null);
        if (e.charCode === 13) {
            addTask();
        }
    }

    return (
        <div>
            <div className={s.addItemForm}>
                    <input value={title}
                           onChange={onChangeHandler}
                           onKeyPress={onKeyPressHandler}
                           className={error ? "error" : ""}
                           placeholder={props.placeholder}
                           onFocus={onFocusHandler}
                           disabled={props.disabled}
                    />
                {/*<div>*/}
                {/*    <button onClick={addTask} disabled={props.disabled}>add</button>*/}
                {/*</div>*/}

            </div>
            {error && <div className="error-message">{error}</div>}

        </div>

    );
});

