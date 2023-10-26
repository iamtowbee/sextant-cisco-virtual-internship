import React from "react";

class Card extends React.Component
{
  render()
  {
    return (
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h4 className="card-title">{this.props.title}</h4>

        </div>
      </div >
    )
  }
}

export default Card;