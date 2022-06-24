import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const menu = () => {
  return (
    <div>
      <ListGroup>
        <ListGroupItem action><Link to="/lecture">Derslerim</Link></ListGroupItem>
        <ListGroupItem action><Link to="/qr">Qr</Link></ListGroupItem>
      </ListGroup>
    </div>
  );
}

export default menu