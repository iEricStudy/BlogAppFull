import React, { useState } from "react";

const AddComentForm = ({ articleName, setArticleInfo }) => {
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');

    const addComment = async () => {
        const result = await fetch(`/api/articles/${articleName}/add-coment`, {
            method: 'post',
            body: JSON.stringify({ username, text: comment }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const body = await result.json();
        setArticleInfo(body);
        setUsername('');
        setComment('');
    }

    return (
        <div id='add-comment-form'>
            <label>
                Name:
                <input type='text'
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </label>
            <label>
                Comment:
                <textarea row='4' cols='50'
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                />
            </label>
            <button onClick={() => addComment()}>Add Comment</button>
        </div>
    );
}

export default AddComentForm;