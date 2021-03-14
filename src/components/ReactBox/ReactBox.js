import React from 'react';
import './ReactBox.css';
import NoReact from '../../img/react/like-0.svg';
import Like from '../../img/react/like.svg';
import Love from '../../img/react/love.svg';
import Care from '../../img/react/care.svg';
import Haha from '../../img/react/haha.svg';
import Wow from '../../img/react/wow.svg';
import Sad from '../../img/react/sad.svg';
import Angry from '../../img/react/angry.svg';

const ReactBox = (props) => {
    const { reaction, setReactionIcon, disabled, toggleDisable } = props;

    const handleReactIcon = (e) => {
        const clickedIcon = e.target.alt;
        if (reaction.iconName === clickedIcon) {
            setReactionIcon(NoReact, 'NoReact', false)
        } else {
            let reactIcon;
            switch (clickedIcon) {
                case 'Like':
                    reactIcon = Like;
                    break;
                case 'Love':
                    reactIcon = Love;
                    break;
                case 'Care':
                    reactIcon = Care;
                    break;
                case 'Haha':
                    reactIcon = Haha;
                    break;
                case 'Wow':
                    reactIcon = Wow;
                    break;
                case 'Sad':
                    reactIcon = Sad;
                    break;
                case 'Angry':
                    reactIcon = Angry;
                    break;
                default:
                    reactIcon = ''
            }
            setReactionIcon(reactIcon, clickedIcon)
        }

        toggleDisable();
    }

    return (
        <div className={`reactBox ${disabled ? 'disable' : ''}`}>
            <div className="reactBox__icons">
                <button className="reactBox__icon" onClick={handleReactIcon}><img src={Like} alt="Like" /><span>Like</span></button>
                <button className="reactBox__icon" onClick={handleReactIcon}><img src={Love} alt="Love" /><span>Love</span></button>
                <button className="reactBox__icon" onClick={handleReactIcon}><img src={Care} alt="Care" /><span>Care</span></button>
                <button className="reactBox__icon" onClick={handleReactIcon}><img src={Haha} alt="Haha" /><span>Haha</span></button>
                <button className="reactBox__icon" onClick={handleReactIcon}><img src={Wow} alt="Wow" /><span>Wow</span></button>
                <button className="reactBox__icon" onClick={handleReactIcon}><img src={Sad} alt="Sad" /><span>Sad</span></button>
                <button className="reactBox__icon" onClick={handleReactIcon}><img src={Angry} alt="Angry" /><span>Angry</span></button>
            </div>
        </div>
    );
};

export default ReactBox;