import React, {useState, useRef} from 'react';
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
        <div className={CommentStyle.form}>
        <form onSubmit={addComment} className={CommentStyle.form__body}>
          <h2 className={CommentStyle.form__tilte}>Comments Chart</h2>
          <div className={CommentStyle.form__item}>
            <textarea
              onChange={onChangeText}
              value={text}
              name="message"
              className={CommentStyle.form__input}
              placeholder="write a comment"
              ref={focusField}
            />
          </div>
          <button className={CommentStyle.form__button}>Add</button>
  
          <div className={CommentStyle.written__comments}>
            <ul className={CommentStyle.comments__list}>
              {comments.map((comment, index) => {
                return (
                  <li className={CommentStyle.comment__item} key={index}>
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