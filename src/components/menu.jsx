import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const menu = () => {
  return (
    <div>
      <ListGroup>
        <ListGroupItem action><Link to="/department">Bölüm</Link></ListGroupItem>
        <ListGroupItem action><Link to="/inspection">Inspection</Link></ListGroupItem>
        <ListGroupItem action><Link to="/lecture">Ders Atama</Link></ListGroupItem>
        <ListGroupItem action><Link to="/student">Öğrenci</Link></ListGroupItem>
        <ListGroupItem action><Link to="/subject">Ders</Link></ListGroupItem>
        <ListGroupItem action><Link to="/classroom">Sınıf</Link></ListGroupItem>
        <ListGroupItem action><Link to="/teacher">Öğretmen</Link></ListGroupItem>
        <ListGroupItem action><Link to="/qr">Qr</Link></ListGroupItem>
      </ListGroup>
    </div>
  );
}

export default menu