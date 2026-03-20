import React from 'react';
import dept from '@/app/collage/data.js';
function departmentPage() {
  return (
    <div>
      {dept.map((data) => (
        <li>{data.deptName}</li>
      ))}
    </div>
  )
}

export default departmentPage
