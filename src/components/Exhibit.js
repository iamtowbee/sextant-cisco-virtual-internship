import { Component } from "react";

class Exhibit extends Component
{
  render()
  {
    return (
      <div className='d-flex flex-column gap-1 container mx-auto bg-light h-50 py-5 px-4 shadow-sm mb-5'>
        <h2>{this.props.exhibitName}</h2>
        <div className="d-flex gap-5">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Exhibit;