import './custom.css'
import './style.css'
import './bootstrap.min.css'

const Dashboard = () => {

    return(
        <div className="wrapper">


<div className="body-overlay"></div>
    <div id="content">
		<div className="main-content">
			<div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="card card-stats">
                        <div className="card-header">
                            <div className="icon icon-success">
                                <span className="material-icons">
                                    people_alt
                                </span>

                            </div>
                        </div>
                        <div className="card-content">
                            <p className="category"><strong>Active Customers</strong></p>
                            <h3 className="card-title">23100</h3>
                        </div>
                        
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-header">
                            <div className="icon icon-rose">
                                <span className="material-icons">people_alt</span>
                            </div>
                        </div>
                        <div className="card-content">
                            <p className="category"><strong>Inactive Customers</strong></p>
                            <h3 className="card-title">703</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-header">
                            <div className="icon icon-info">
                                <span className="material-icons">people_alt</span>

                            </div>
                        </div>
                        <div className="card-content">
                            <p className="category"><strong>Total Customer</strong></p>
                            <h3 className="card-title">102</h3>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-header">
                            <div className="icon icon-warning">
                                <span className="material-icons">people_alt</span>
                            </div>
                        </div>
                        <div className="card-content">
                            <p className="category"><strong>Pax8 Customers</strong></p>
                            <h3 className="card-title">703</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-header">
                            <div className="icon icon-info">
                            
                                <span className="material-icons">
                                    people_alt
                                </span>
                            </div>
                        </div>
                        <div className="card-content">
                            <p className="category"><strong>CyberCNS Customers</strong></p>
                            <h3 className="card-title">245</h3>
                        </div>
                        
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-header">
                            <div className="icon icon-success">
                                <span className="material-icons">
                                    people_alt
                                </span>

                            </div>
                        </div>
                        <div className="card-content">
                            <p className="category"><strong>Total Customer</strong></p>
                            <h3 className="card-title">1100</h3>
                        </div>
                        
                    </div>
                </div>
                        
            </div>		
					
            {/* <div className="row ">
                <div className="col-lg-7 col-md-12">
                    <div className="card" style={{minHeight: '485px'}}>
                        <div className="card-header card-header-text">
                            <h4 className="card-title">New Customers</h4>
                        </div>
                        <div className="card-content table-responsive">
                            
                        </div>
                    </div>
                </div>
                      
                <div className="col-lg-5 col-md-12">
                    <div className="card" style={{minHeight: '485px'}}>

                    </div>
                </div>
            </div> */}
					
		</div>
					
        </div>
    </div>
    )
}


export default Dashboard