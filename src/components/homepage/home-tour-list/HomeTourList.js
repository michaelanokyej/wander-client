import React from 'react'
import tourContext from '/Users/michael/Documents/Courses/Thinkful/projects/Capstone Projects/Wander/wander-client/src/context/tourContext';
import './HomeTourList.css'


class HomeTourList extends React.Component {
  static contextType = tourContext;
  render() {
    const tours = this.context.tours.map((tour, index) => {
      return (
        <div class='item' key={tour.id}>
          <h3>{tour.name}</h3>
          <div>
          <img src={tour.img} alt='tour' className='tourImg'/>
          <p>{tour.description}</p>
          </div>
        </div>
      );
    });
    console.log(this.context.tours[0].img)
    return (
      <section className='tourListSection'>
      <h4>Tours in Washington, DC</h4>
      <div class='wrapper'>
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