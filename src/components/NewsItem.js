import React from 'react'

const NewsItem = (props) => {


  let { title, description, imageUrl, newsUrl, author, date, source, } = props;
  return (
    <div className='my-3'>

      <div className="card">
        <img src={!imageUrl ? "https://cdn.vox-cdn.com/thumbor/wPO2usOSxctI84haZv11M8ErP_0=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23587767/acastro_220524_STK428_0003.jpg" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-primary">{title}<span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ zIndex: "1", left: "90%" }}>{source}<span className="visually-hidden">unread messages</span></span></h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-danger">By {!author ? "Uknown" : author} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>

    </div>
  )

}

export default NewsItem
