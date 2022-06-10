import React, {useState, useEffect} from 'react'
import styles from './CursorCopy.module.css';

function CursorCopy() {
    const [position, setPosition] = useState({x: 0, y: 0});
    const [clicked, setClicked] = useState(false);
    const [imageHovered, setImageHovered] = useState(false);
    const [hidden, setHidden] = useState(false);
    
    const isMobile = () => {
        return navigator.userAgent.match("/Android/i") || navigator.userAgent.match("/webOS/i") || navigator.userAgent.match("/iPhone/i") || navigator.userAgent.match("/iPad/i") || navigator.userAgent.match("/iPod/i") || navigator.userAgent.match("/BlackBerry/i") || navigator.userAgent.match("/Windows Phone/i");
    }

    const classNames = () => {
        let classes = [styles.cursor];
        if (clicked) {
            classes.push(styles.clicked);
        }
        if (imageHovered) {
            classes.push(styles.image_hovered);
        }
        if (hidden) {
            classes.push(styles.hidden);
        }
        return classes.join(' ');        
    }

    useEffect(() => {
        addEventListener();
        handleImageHoverEvent();
        return() => {
            removeEventListener();
        }
    }, []);

    const addEventListener = () => {
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseenter', onMouseEnter);
        document.addEventListener('mouseleave', onMouseLeave);
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);
    }

    const removeEventListener = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseenter', onMouseEnter);
        document.removeEventListener('mouseleave', onMouseLeave);
        document.removeEventListener('mousedown', onMouseDown);
        document.removeEventListener('mouseup', onMouseUp);
    }

    const onMouseMove = (e) => {
        setPosition({x: e.clientX, y: e.clientY});
    }

    const onMouseDown = () => {
        setClicked(true);
    }

    const onMouseUp = () => {
        setClicked(false);
    }

    const onMouseEnter = () => {
        setHidden(false);
    }

    const onMouseLeave = () => {
        setHidden(true);
    }

    const handleImageHoverEvent = () => {
        document.querySelectorAll("h1").forEach((el) => {
            el.addEventListener("mouseover", () => setImageHovered(true));
            el.addEventListener("mouseout", () => setImageHovered(false));
        });
    }

    // const cursorClasses = [styles.cursor] + [] + (hidden ? [styles.hidden] : []);
    const cursorClasses = classNames();
  return (
    <div className={cursorClasses} style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
  )
}

export default CursorCopy