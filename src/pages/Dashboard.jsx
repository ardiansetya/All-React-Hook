import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Dashboard = () => {


 
  return (
    <div  className='h-screen flex justify-center items-center'>
      <div className="flex gap-5">
        <Button path="/use-state" title="Use State" />
        <Button path="/use-reducer" title="Use reducer" />
        <Button path="/use-effect" title="Use Effect" />
        <Button path="/use-ref" title="Use Ref" />
      </div>
    </div>
  );
}

export default Dashboard