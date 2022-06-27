import React from 'react'
import { Link } from 'react-router-dom'

export default function BlankBlogs() {
  return (
    <div>
        <h2>Threre Is No One Blogs </h2>
        <nav>
        <span> Go for  </span>
        <Link to="/admin/addblog"> Add New Blogs....!!</Link>
      </nav>
    </div>
  )
}
