import React from 'react'
import styles from './Programa.module.css'



export default function programa() {
  return (
    <div className={styles.acordeon}>
        <h1>Titulo dinamico</h1>


      <ul>
        <li>
          <label htmlFor='first'>acordeon 1 <span>&#x3e;</span></label> 
          <input id='first' name='accordion' type="radio" />
          <div className={styles.content}>
            <iframe src="https://player.vimeo.com/video/873778793?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="video_prueba2"></iframe><script src="https://player.vimeo.com/api/player.js"></script>
            <div className={styles.descripcion}>
            <h3>Titulo 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore nam cupiditate eius quia? Architecto placeat veniam natus, eum quia ducimus perferendis dolorum ipsum, officia aspernatur officiis illum necessitatibus perspiciatis!</p>
            </div>
          </div>
        </li>

        <li> 
          <label htmlFor='second'>acordeon 2 <span>&#x3e;</span></label> 
          <input id='second' name='accordion' type="radio" />
          <div className={styles.content}>
            <video src='/stars.mp4'></video>
            <div className={styles.descripcion}>
            <h3>Titulo 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore nam cupiditate eius quia? Architecto placeat veniam natus, eum quia ducimus perferendis dolorum ipsum, officia aspernatur officiis illum necessitatibus perspiciatis!</p>
            </div>
          </div>
        </li>

        <li>
          <label htmlFor='third'>acordeon 333 <span>&#x3e;</span></label> 
          <input id='third' name='accordion' type="radio" />
          <div className={styles.content}>
            <video src='/stars.mp4' controls></video>
            <div className={styles.descripcion}>
            <h3>Titulo 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore nam cupiditate eius quia? Architecto placeat veniam natus, eum quia ducimus perferendis dolorum ipsum, officia aspernatur officiis illum necessitatibus perspiciatis!</p>
            </div>
          </div>
        </li>
        
      </ul>

















        {/* <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classnamees that we use to style each element. These classnamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div> */}
</div>
  )
}
