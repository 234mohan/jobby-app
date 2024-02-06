import {IoLocationOutline} from 'react-icons/io5'
import {FaBriefcase} from 'react-icons/fa'
import './index.css'

const JobItem = props => {
  const {jobDetails} = props
  const {
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
    companyLogoUrl,
    employmentType,
  } = jobDetails

  return (
    <li className="container-jobs">
      <div className="image">
        <img src={companyLogoUrl} alt={title} className="job-details" />
        <div className="con">
          <h1 className="hea"> {title}</h1>
          <p className="parase"> {rating}</p>
        </div>
      </div>
      <div className="monu">
        <div className="image">
          <IoLocationOutline className="location" />
          <p> {location}</p>
        </div>
        <div className="image6">
          <FaBriefcase className="brief" />
          <p> {employmentType} </p>
        </div>

        <p> {packagePerAnnum}</p>
      </div>
      <hr />
      <p className="weight"> Description </p>
      <p> {jobDescription}</p>
    </li>
  )
}

export default JobItem
