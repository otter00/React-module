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
    <form onSubmit={addComment}>
    <input 
    type="text" 
    className={CommentStyle.comment__field} 
    placeholder="add your comment" 
    ref={focusField}
    onChange={onChangeText}
    value={text} />

    <button 
    className={CommentStyle.add__comment}>
      Add
    </button>

    <div 
      className="content">
          <ul className="content__list">
            {comments.map((comment, index) => {
              return (
                <li 
                className="content__item"
                style={{width: 50 + 'px'}}
                key={index}>
                  {comment}
                </li>
              );
            })}
          </ul>
    </div>
    </form>
  )
}