import React from 'react';
import { javascript, github, react, mysql, node } from './imports';
import './brand.css'

const Brand = () => {
  return (
    <div className='acad__brand section__padding'>
        <div>
          <img src={javascript} alt="javascript" />
        </div>
        <div>
          <img src={github} alt="github" />
        </div>
        <div>
          <img src={mysql} alt="mysql" />
        </div>
        <div>
          <img src={node} alt="node" />
        </div>
        <div>
          <img src={react} alt="react" />
        </div>
    </div>
  )
}

export default Brand