import React, { useRef, useEffect } from 'react'
import styles from './Cursor.module.css'

function Cursor() {
    const delay = 18;

    const dot = useRef(null);
    const dotOutline = useRef(null);

    const cursorVisibile = useRef(true);
    const cursorEnlarged = useRef(false);

    const endX = useRef(window.innerWidth / 2);
    const endY = useRef(window.innerHeight / 2);
    const _x = useRef(0);
    const _y = useRef(0);

    const requestRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', mouseOverEvent);
        document.addEventListener('mouseup', mouseOutEvent);
        document.addEventListener('mousemove', mouseMoveEvent);
        document.addEventListener('mouseenter', mouseEnterEvent);
        document.addEventListener('mouseleave', mouseLeaveEvent);

        animateDotOutline();

        return () => {
            document.removeEventListener('mousedown', mouseOverEvent);
            document.removeEventListener('mouseup', mouseOutEvent);
            document.removeEventListener('mousemove', mouseMoveEvent);
            document.removeEventListener('mouseenter', mouseEnterEvent);
            document.removeEventListener('mouseleave', mouseLeaveEvent);

            cancelAnimationFrame(requestRef.current);
        }
    }, []);

    const toggleCursorVisibility = () => {
        if (cursorVisibile.current) {
            dot.current.style.opacity = 1;
            dotOutline.current.style.opacity = 1;
        }
        else {
            dot.current.style.opacity = 0;
            dotOutline.current.style.opacity = 0;
        }
    }

    const toggleCursorSize = () => {
        if (cursorEnlarged.current) {
            dot.current.style.transform = 'translate(-50%, -50%) scale(0.75)';
            dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
        }

        else {
            dot.current.style.transform = 'translate(-50%, -50%) scale(1)';
            dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    }

    // We will pass mouseOver and mouseOut events to every image in the page

    // fired when the cursor comes on top of the element or its children.
    const mouseOverEvent = () => {
        cursorEnlarged.current = true;
        toggleCursorSize();
    }

    // fired when the cursor is not on top of the element or its children.
    const mouseOutEvent = () => {
        cursorEnlarged.current = false;
        toggleCursorSize();
    }

    // fired when we enter the page viewport.
    const mouseEnterEvent = () => {
        cursorVisibile.current = true;
        toggleCursorVisibility();
    }

    // fired when we leave the page viewport.
    const mouseLeaveEvent = () => {
        cursorVisibile.current = false;
        toggleCursorVisibility();
    }

    const mouseMoveEvent = (e) => {
        cursorVisibile.current = true;
        toggleCursorVisibility();

        endX.current = e.pageX;
        endY.current = e.pageY;

        dot.current.style.top = endY.current + 'px';
        dot.current.style.left = endX.current + 'px';
    }

    const animateDotOutline = () => {
        _x.current += (endX.current - _x.current) / delay;
        _y.current += (endY.current - _y.current) / delay;

        dotOutline.current.style.top = _y.current + 'px';
        dotOutline.current.style.left = _x.current + 'px';

        requestRef.current = requestAnimationFrame(animateDotOutline);
    }


  return (
    <div>
        <div ref={dotOutline} className={styles.dot_outline}></div>
        <div ref={dot} className={styles.dot}></div>
        {console.log(dot.current)}
        <div className={styles.text_container}>
            

        </div>
    </div>
  )
}

export default Cursor