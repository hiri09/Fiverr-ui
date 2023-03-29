import React from 'react'
import "./Gig.scss";
import Slider from "infinite-react-carousel";
const Gig = () => {
  return (
    <div className='gig'>
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">FIVERR GRAPHICS & DESIGN</span>
          <h1>I will create ai generated art for you</h1>
          <div className="user">
            <img className='pp' src="https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <span>John</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img src="https://images.pexels.com/photos/6039245/pexels-photo-6039245.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <img src="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <img src="https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          </Slider>
          <h2>About This Gig</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quis expedita ut possimus aliquam atque, tenetur delectus? Reiciendis animi ducimus praesentium, assumenda inventore molestias harum dignissimos dolores asperiores blanditiis error.
          Dolorem accusamus dolores, esse distinctio optio corrupti eligendi perspiciatis? Ea ratione rem ullam id nesciunt nobis deserunt ad aspernatur voluptatibus delectus. Quasi quod magnam, quis labore ipsam commodi temporibus autem?
          Sunt molestiae ut sed sequi vel in, nam incidunt harum quae! Tempora nobis possimus autem assumenda nulla ad dolores amet distinctio. Iusto, ad eos ducimus voluptates iste culpa delectus suscipit.
          Soluta, porro vero. Laborum, quidem non eaque enim dolorum quod! Explicabo doloremque totam unde tempora cupiditate hic cumque sequi consequuntur alias eveniet! Quibusdam explicabo odit, error voluptatum veritatis totam neque!
          Quam distinctio, quibusdam libero impedit saepe pariatur labore. Vitae officiis obcaecati libero, nemo totam necessitatibus ab distinctio temporibus rem dolorum optio, laudantium, consequatur neque blanditiis. Distinctio in quam laboriosam incidunt?
          </p>
          <div className="seller">
            <h2>About The seller</h2>
            <div className="user">
              <img src="https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <div className="info">
                <span>John Doe</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Dolor perspiciatis commodi corrupti, porro alias est voluptates consequuntur soluta esse at
                 suscipit, nesciunt laborum debitis blanditiis neque facilis tenetur? Eveniet, pariatur?
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img className='pp' src="https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <div className="info">
                  <span>john doe</span>
                  <div className="country">
                    <img  src="https://images.pexels.com/photos/6039245/pexels-photo-6039245.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id non odio quod quidem, modi fuga consequuntur illo nesciunt ea itaque, excepturi exercitationem, aut quasi aliquid nisi perspiciatis eveniet vel repellat?</p>
                <div className="helpful">
                  <span>Helpful</span>
                  <img src="/img/like.png" alt="" />
                  <span>Yes</span>
                  <img src="/img/dislike.png" alt="" />
                  <span>No</span>
                </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img className='pp' src="https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <div className="info">
                  <span>john doe</span>
                  <div className="country">
                    <img src="https://images.pexels.com/photos/6039245/pexels-photo-6039245.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id non odio quod quidem, modi fuga consequuntur illo nesciunt ea itaque, excepturi exercitationem, aut quasi aliquid nisi perspiciatis eveniet vel repellat?</p>
                <div className="helpful">
                  <span>Helpful</span>
                  <img src="/img/like.png" alt="" />
                  <span>Yes</span>
                  <img src="/img/dislike.png" alt="" />
                  <span>No</span>
                </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img className='pp' src="https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <div className="info">
                  <span>john doe</span>
                  <div className="country">
                    <img src="https://images.pexels.com/photos/6039245/pexels-photo-6039245.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id non odio quod quidem, modi fuga consequuntur illo nesciunt ea itaque, excepturi exercitationem, aut quasi aliquid nisi perspiciatis eveniet vel repellat?</p>
                <div className="helpful">
                  <span>Helpful</span>
                  <img src="/img/like.png" alt="" />
                  <span>Yes</span>
                  <img src="/img/dislike.png" alt="" />
                  <span>No</span>
                </div>
            </div>
            
          </div>
        </div>
        <div className="right">
          <div className="price">
             <h3>1 AI genrated image</h3>
             <h2>$59.99</h2>
          </div>
          <p>I will create a unique high quality AI genrated image based on a description that you give me</p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>2 days Delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
            
          </div>
          <div className="features">
              <div className="item">
                <img src="/img/greencheck.png" alt="" />
                <span>Prompt writting</span>
              </div>
              <div className="item">
                <img src="/img/greencheck.png" alt="" />
                <span>Prompt writting</span>
              </div>
              <div className="item">
                <img src="/img/greencheck.png" alt="" />
                <span>Prompt writting</span>
              </div>
              <div className="item">
                <img src="/img/greencheck.png" alt="" />
                <span>Prompt writting</span>
              </div>
          </div>
          <button>Continue Me</button>
        </div>
      </div>
    </div>
  )
}

export default Gig
