import React from 'react'

const Breadcrumb = ({title}) => {
  return (
    <div>
      {/** !-- Breadcrumb Start -- **/}
        <div className="container-xxl py-5 bg-dark page-header mb-5">
            <div className="container my-5 pt-5 pb-4">
                <h1 className="display-3 text-white mb-3 animated slideInDown font-bold">{ title }</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb text-uppercase">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item text-white active" aria-current="page">{title}</li>
                    </ol>
                </nav>
            </div>
        </div>
        {/** !-- End -- **/}
    </div>
  )
}

export default Breadcrumb