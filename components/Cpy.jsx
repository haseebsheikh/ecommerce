const moment = require('moment')
const cpy = () => {
  return (
    <div className="cpy_">
       <p>©{moment().format('YYYY')} All Rights Reserved By My Store</p>
    </div>
  )
}

export default cpy