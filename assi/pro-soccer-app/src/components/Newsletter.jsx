const Newsletter = () => {
    return (
      <section className="newsletter-section py-5 bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h5 className="text-center mb-4">NEWSLETTER</h5>
              <div className="d-flex flex-column flex-md-row gap-2">
                <input type="text" placeholder="Name" className="form-control" />
                <input type="email" placeholder="Email" className="form-control" />
                <button className="btn btn-primary">SEND</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Newsletter