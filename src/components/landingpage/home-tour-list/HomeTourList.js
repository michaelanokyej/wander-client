import React from 'react'
import toursAndUserContext from '/Users/michael/Documents/Courses/Thinkful/projects/capstone_projects/Wander/wander-client/src/context/toursAndUserContext.js';
import './HomeTourList.css'


class HomeTourList extends React.Component {
  static contextType = toursAndUserContext;
  render() {
    console.log(this.context.tours)
    const tours = this.context.tours.map((tour, index) => {
      return (
        <div className='item' key={index}>
          <h3>{tour.name}</h3>
          <div>
          <img src={tour.img} alt='tour' className='tourImg'/>
          <p>{tour.description}</p>
          </div>
        </div>
      );
    });
    return (
      <section className='tourListSection'>
      <h4>Tours in Washington, DC</h4>
      <div className='wrapper'>
        {tours}
        {/* <div class='item'>
          <h3>{this.context.tours[0].name}</h3>
        </div>
        <div class='item'>
          <h3>{this.context.tours[1].name}</h3>
        </div>
        <div class='item'>
          <h3>{this.context.tours[2].name}</h3>
          <div>
            <img src={this.context.tours[2].img}/>
            <p></p>
          </div>
        </div> */}
      </div>
		</section>
    );
  }
}

export default HomeTourList;