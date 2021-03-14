import React, { useState } from 'react';
import NoReact from '../../img/react/like-0.svg';
import Like from '../../img/react/like.svg';
import Comment from '../../img/comment.svg';
import Share from '../../img/share.svg';
import ReactBox from '../ReactBox/ReactBox';
import './Post.css';

const Post = (props) => {
    const { author, authorAvatar, authorProfile, postImg, imgAlt } = props.post;
    const [reaction, setReaction] = useState({ isReacted: false, icon: NoReact, iconName: 'NoReact' });
    const [disabled, setDisabled] = useState(false);
    const setReactionIcon = (icon, name, react) => setReaction({ isReacted: react === undefined ? true : false, icon: icon, iconName: name });
    const handleReactBtn = () => reaction.isReacted ? setReactionIcon(NoReact, 'NoReact', false) : setReactionIcon(Like, 'Like');

    const toggleDisable = () => {
        setDisabled(true)

        setTimeout(() => {
            setDisabled(false)
        }, 200)
    }

    return (
        <div className="card">
            <div className="card__head">
                <a href={authorProfile} className="card__avatar--box">
                    <img src={authorAvatar} alt={author} className="card__avatar img-cover" />
                </a>
                <a href={authorProfile} className="card__name">{author}</a>
            </div>
            <div className="card__body">
                <div className="card__img--box">
                    <img src={postImg} alt={imgAlt} className="card__img img-cover" />
                </div>
            </div>
            <div className="card__footer">
                <button className={`react__btn ${disabled ? 'disable' : ''} ${reaction.isReacted ? reaction.iconName.toLowerCase() : ''}`} onClick={() => { handleReactBtn(); toggleDisable() }}>
                    <img src={reaction.icon} alt="React" /> {(reaction.isReacted && reaction.iconName) || 'Like'}
                </button>
                <ReactBox reaction={reaction} setReactionIcon={setReactionIcon} disabled={disabled} toggleDisable={toggleDisable} />
                <button className="comment__btn"><img src={Comment} alt="Comment" /> Comment</button>
                <button className="share__btn"><img src={Share} alt="Share" /> Share</button>
            </div>
        </div>
    );
};

export default Post;