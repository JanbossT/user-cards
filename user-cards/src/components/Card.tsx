// src/components/Card.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types/user';

interface CardProps {
  user: User;
}

const Card: React.FC<CardProps> = ({ user }) => (
  <div className="card">
    <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
    <h2>{user.first_name} {user.last_name}</h2>
    <Link to={`/users/${user.id}`}>View Details</Link>
  </div>
);

export default Card;
