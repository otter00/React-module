import React, {useEffect, useState, useRef} from 'react';
import CommentStyle from './Comment.module.scss';

export default function Comment() {

    const [text, setText] = useState("");
    const [comments, setComments] = useState([]);
    const focusField = useRef(null);
  
    function onChangeText(event) {
      setText(event.target.value);
    }
  
    function checkComment() {
      let comment = { text };
  
      const filterWords = ["viagra", "xxx"];
      let filteredСomment = comment.text;
      
      for (let word of filterWords) {
        let reg = new RegExp(word, "ig");
        filteredСomment = filteredСomment.replace(reg, "***");
      }
  
      setComments([...comments, filteredСomment]);
  
      setText("");
    }
  
    function addComment(event) {
      event.preventDefault();
      checkComment();
      focusField.current.focus();
    }

    return(
        <div className="form">
        <form onSubmit={addComment} className="form__body">
          <h2 className="form__tilte">Добро пожаловать на сайт!</h2>
          <div className="form__item">
            <textarea
              onChange={onChangeText}
              value={text}
              name="message"
              className="form__input"
              placeholder="добавьте коммент"
              ref={focusField}
            />
          </div>
          <button className="form__button">Добавить</button>
  
          <div className="users-comments">
            <ul className="users-comment-list">
              {comments.map((comment, index) => {
                return (
                  <li className="users-comment" key={index}>
                    {comment}
                  </li>
                );
              })}
            </ul>
          </div>
        </form>
      </div>            
    )
}