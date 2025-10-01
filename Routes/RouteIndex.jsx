import React from 'react'   
import { Routes ,Route } from 'react-router'
import Pages from '../Components/Landingpage/Pages'
import Job from '../Components/Landingpage/Job'
import Internships from '../Components/Landingpage/Internships'
import Applications from '../Components/Landingpage/Applications'
import About from '../Components/Landingpage/About'

const RouteIndex = () => {
  return (
    <div>
       <Routes>
          <Route path="/" element={<Pages />} />
          <Route path="/jobs" element={<Job />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/about" element={<About />} />
          {/* Optionally catch all unmatched routes */}
          <Route path="*" element={<Pages />} />
        </Routes>
    </div>
  )
}

export default RouteIndex
