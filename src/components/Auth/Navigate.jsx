import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Navigate = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  },[])
}

export default Navigate