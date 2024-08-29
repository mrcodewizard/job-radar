import React from 'react'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'

const SignIn = () => {
  return (
    <div>
      <Breadcrumb title="SignIn" />

      <div class="w-64 sm:w-[450px] mx-auto py-4 mb-5">
         <div class="wow fadeInUp" data-wow-delay="0.5s">
               <form>
                  <div class="row g-3">
                     <div className="col-12">
                        <h3 className='text-[28px] font-bold text-center py-2'>Sign Up</h3>
                     </div>

                     <div class="col-12">
                           <div class="form-floating">
                              <input type="email" class="form-control" id="email" placeholder="Your FirstName" />
                              <label for="email">First Name</label>
                           </div>
                     </div>

                     <div class="col-12">
                           <div class="form-floating">
                              <input type="email" class="form-control" id="email" placeholder="Your Last Name" />
                              <label for="email">Last Name</label>
                           </div>
                     </div>
                     <div class="col-12">
                           <div class="form-floating">
                              <input type="email" class="form-control" id="email" placeholder="Your Email" />
                              <label for="email">Your Email</label>
                           </div>
                     </div>
                     <div class="col-12">
                           <div class="form-floating">
                              <input type="password" class="form-control" id="password" placeholder="Your password" />
                              <label for="password">Password</label>
                           </div>
                     </div>
                     <div class="col-12">
                           <button class="btn btn-primary w-100 py-3" type="submit">SignIn</button>
                     </div>
                  </div>
               </form>
         </div>
      </div>
    </div>
  )
}

export default SignIn