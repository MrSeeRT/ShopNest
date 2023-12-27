import React from 'react'
import { Link , useNavigate } from 'react-router-dom'
// import "../../Pages/About/About.css"

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className='container mt-4 '>
      <div className='mx-4 mx-sm-0'>
        <Link >
        <button className='seertbackbtn ' onClick={()=> navigate(-1)}>Back</button></Link>
      </div>
{/* <!--Section: Contact v.2--> */}
<section class="mb-4">

    {/* <!--Section heading--> */}
    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    {/* <!--Section description--> */}
    <p class="text-center w-responsive mx-auto mb-4">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div class="row">

        {/* <!--Grid column--> */}
        <div class="col-md-9 mb-md-0 mb-5 mt-3">
            <form id="contact-form" name="contact-form"  method="POST">

                {/* <!--Grid row--> */}
                <div class="row">

                    {/* <!--Grid column--> */}
                    <div class="col-md-6 mb-4">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control" placeholder='Your Name' />
                            {/* <label for="name" class="" >Your name</label> */}
                        </div>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div class="col-md-6 mb-4">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control" placeholder='Your Email' />
                            {/* <label for="email" class="">Your email</label> */}
                        </div>
                    </div>
                    {/* <!--Grid column--> */}

                </div>
                {/* <!--Grid row--> */}

                {/* <!--Grid row--> */}
                <div class="row mb-4">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control" placeholder='Subject' />
                            {/* <label for="subject" class="">Subject</label> */}
                        </div>
                    </div>
                </div>
                {/* <!--Grid row--> */}

                {/* <!--Grid row--> */}
                <div class="row">

                    {/* <!--Grid column--> */}
                    <div class="col-md-12 mb-4">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" placeholder='Enter your message...'></textarea>
                            {/* <label for="message">Your message</label> */}
                        </div>

                    </div>
                </div>
                {/* <!--Grid row--> */}

            </form>

            <div class="text-center text-md-left">
                <a class="btn seertbackbtn" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div class="status"></div>
        </div>
        
        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>Earth, MilkyWay</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 01 234 567 89</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>SeeRT@gmail.com</p>
                </li>
            </ul>
        </div>
        {/* <!--Grid column--> */}

    </div>

</section>
{/* <!--Section: Contact v.2--> */}
    </div>
  )
}

export default Contact