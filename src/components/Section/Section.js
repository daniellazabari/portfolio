/* A component that holds a secrion of content with all its components */
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Section({ children, className }) {

  return (
    <div>
        <span className={className}>
            {children}
        </span>
    </div>
  )
}

export default Section

// Section.PropTypes = {
//     children: PropTypes.oneOfType([
//         PropTypes.arrayOf(PropTypes.element), 
//         PropTypes.element.isRequired
//     ]),
//     className: PropTypes.string.isRequired
// }