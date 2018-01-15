import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'


ReactDOM.render(
    <Family lastName='Mandoju'>
        <Member name='Jorge'/>
        <Member name='Júlio'/>
        <Member name='Ivana'/>
    </Family>
    ,document.getElementById('app'))
