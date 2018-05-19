import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment'
import numeral from 'numeral'




const ExpenseListItem = ({description, amount, createdAt, id }) => (
    <div>
     <Link to={`/edit/${id}`} >
      <h2>{description}</h2>
      </Link>
      <p> 
    {numeral(amount /100).format('0,0.00') + 'zł '}
       - 
    {moment(createdAt).format('Do MMMM, YYYY')}
      
      </p>
      
    </div>
);

export default (ExpenseListItem);
