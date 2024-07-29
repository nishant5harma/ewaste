
function cdn(){
    const cdnall=`  <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/daisyui@4.10.5/dist/full.min.css" rel="stylesheet" type="text/css" />
  
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <link href="style.css" rel="stylesheet">`;
    document.write(cdnall)
}


function generateNavbar() {
    const navbarHTML = `

    


    <nav x-data="{ isOpen: false }" class="relative bg-white shadow-md p-2">
    <div class="container px-6 py-4 mx-auto">
      <div class="lg:flex lg:items-center lg:justify-between">
        <div class="flex items-center justify-between">
          <a href="index.html">
            <img class="w-24 h-16" src="flogo.png" alt="">
          </a>

          <!-- Mobile menu button -->
          <div class="flex lg:hidden">
            <button x-cloak @click="isOpen = !isOpen" type="button" class=" bg-white" aria-label="toggle menu">
              <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
              </svg>

              <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div x-cloak :class="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']"
          class="bg-white shadow-lg md:shadow-none  mt-5 absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
          <div class="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
            <a href="index.html"
              class="px-3 py-2 mx-3 mt-2  transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-[#344822] hover:text-white text-black font-bold">HOME</a>
            




          
            
            
            
            
              <div class="dropdown">
                <div tabindex="0" role="button" class=" bg-white px-3 py-2 mx-3 mt-2  transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-[#344822] hover:text-white text-black font-bold">ABOUT	
                


                  
                </div>
                <ul tabindex="0" class="dropdown-content bg-white  z-[1] menu p-2 shadow   rounded-box w-52">
                  <li><a href="company.html" class="px-3 py-2 mx-3 mt-2  first-letter: transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-[#344822] hover:text-white text-black font-bold">Company</a></li>
                  <li><a href="Ewaste.html" class="px-3 py-2 mx-3 mt-2  first-letter: transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-[#344822] hover:text-white text-black font-bold">	E-Waste Recycling</a></li>
                </ul>
              </div>
            
         
            
            






   
            
              <div class="dropdown">
                <div tabindex="0" role="button" class=" bg-white px-3 py-2 mx-3 mt-2  transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-[#344822] hover:text-white text-black font-bold">SERVICES	
                


                  
                </div>
                <ul tabindex="0" class="dropdown-content bg-white  z-[1] menu p-2 shadow   rounded-box w-52">
                  
                  <li><a href="ewaste2.html" class="px-3 py-2 mx-3 mt-2  first-letter: transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-[#344822] hover:text-white text-black font-bold">	E-Waste Recycling</a></li>


                  <li><a href="rnr.html" class="px-3 py-2 mx-3 mt-2  first-letter: transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-[#344822] hover:text-white text-black font-bold">	Recycling and Recovery </a></li>

                

                  <li><a href="refurbished.html" class="px-3 py-2 mx-3 mt-2  first-letter: transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-[#344822] hover:text-white text-black font-bold">	Refurbishment </a></li>

                  <li>
                  <a href="epr.html"
                  class="px-3 py-2 mx-3 mt-2   transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-[#344822] hover:text-white text-black font-bold">EPR</a>
                  </li>

                  <li><a href="reverseL.html" class="px-3 py-2 mx-3 mt-2  first-letter: transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-[#344822] hover:text-white text-black font-bold">Reverse Logistics
                  </a></li>
                </ul>
              </div>



            <a href="career.html"
              class="px-3 py-2 mx-3 mt-2   transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-[#344822] hover:text-white text-black font-bold">CAREER</a>


             


            <a href="contact.html"
              class="px-3 py-2 mx-3 mt-2   transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-[#344822] hover:text-white text-black font-bold">CONTACT
              US</a>

          </div>


        </div>
      </div>
    </div>
  </nav>
    `;
    
    document.write(navbarHTML); // Write the navbar HTML to the document
  }
  

  function footer(){
    const footerHTML = `
    <footer class="footer p-10 bg-gray-200 text-black text-base-content">
    <aside>
       <img src="flogo.png" class="w-40">
      <!-- <p>ACME Industries Ltd.<br>Providing reliable tech since 1992</p> -->
    </aside> 
    <nav>
      <h6 class="footer-title">Services</h6> 
      <a href="ewaste2.html" class="link link-hover uppercase">E-Waste Recycling </a>
      <a href="rnr.html" class="link link-hover  uppercase">Recycling and Recovery</a>
      <a href="reverseL.html" class="link link-hover uppercase">Reverse logistics       </a>
      <a href="refurbished.html" class="link link-hover uppercase">Refurbishment</a>
      <a href="epr.html" class="link link-hover uppercase">EPR</a>
    </nav> 
    <nav>
      <h6 class="footer-title uppercase">Company</h6> 
      <a href="index.html" class="link link-hover uppercase">Home</a>
      <a href="company.html" class="link link-hover uppercase">About Us</a>
      <a href="career.html" class="link link-hover uppercase">Career</a>
      <a href="contact.html" class="link link-hover uppercase">Contact Us</a>
    </nav> 
    <nav>
      <h6 class="footer-title">Social Media</h6> 
      <a class="link link-hover uppercase">Instagram</a>
      <a class="link link-hover uppercase">Facebook</a>
      <a class="link link-hover uppercase">Linkedin</a>
    </nav>
  </footer>



    
    `
    ;
    document.write(footerHTML)
  }


function contact(){
  const contactF=`
  <section class="py-14 bg-[#344822]">
  <div
    class="max-w-screen-xl mx-auto px-4 text-white gap-12 md:px-8 lg:flex"
  >
    <div class="max-w-md">
      <h3 class="text-white text-3xl font-semibold sm:text-4xl">
        Join Us in Supporting EPR

      </h3>
      <p class="mt-3">
        By choosing GRPL, you are not only responsibly disposing of your electronic waste but also supporting the principles of Extended Producer Responsibility. Together, we can make a positive impact on the environment and build a more sustainable future.

      </p>
    </div>
    <div>
      <ul
        class="mt-12 gap-y-6 gap-x-12 items-center md:flex lg:gap-x-0 lg:mt-0"
      >
        <li
          class="space-y-3 border-t py-6 md:max-w-sm md:py-0 md:border-t-0 lg:border-l lg:px-12 lg:max-w-none"
        >
          <div
            class="w-12 h-12 rounded-full border flex items-center justify-center text-white"
          >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
          </svg>
          
          </div>
          <h4 class="text-white text-lg font-medium xl:text-xl" >
            Pick Up Form 

          </h4>
          <p>Fill this form to connect with our team. </p>
         
          <button class="bg-gray-100 w-full flex items-center gap-1 p-2 text-start text-blue-900 rounded-md     transition" onclick="openModal('modelConfirm')">
  Contact Us <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                clip-rule="evenodd"
              ></path>
            </svg>
</button>
        </li>
        <li
          class="space-y-3 border-t py-6 md:max-w-sm md:py-0 md:border-t-0 lg:border-l lg:px-12 lg:max-w-none"
        >
          <div
            class="w-12 h-12 rounded-full border flex items-center justify-center text-white"
          >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          </svg>
          
          </div>
          <h4 class="text-white text-lg font-medium xl:text-xl ">
            Contact Us

          </h4>
          <p>Connect directly with out team in just one click. </p>
          <a
            href="contact.html"
            class="flex items-center gap-1 text-sm bg-blue-50 p-2 rounded-lg  text-indigo-900 duration-150   font-medium"
            >Send us DMs<svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</section>

  `
document.write(contactF);
}



function modal(){

  const modelF=
  `


<div id="modelConfirm" class="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 ">
   <div class="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">

       <div class="flex justify-end p-2">
           <button onclick="closeModal('modelConfirm')" type="button"
               class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
               <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                   <path fill-rule="evenodd"
                       d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                       clip-rule="evenodd"></path>
               </svg>
           </button>
       </div>

      
       <form>
       <div class='text-center py-2 gap-y-2 p-5 bottom-5'>
       <h1 class='text-2xl text-black'>Enter Your Details </h1>

 
       <input type='text' name='Name' placeholder='Name' class='p-2 w-[90%] bg-gray-100 mt-2'>
       <input type='tel' name='Phone' placeholder='Phone Number' class='p-2 w-[90%] bg-gray-100 mt-2'>
       <input type='email' name='Email' placeholder='Email ID' class='p-2 w-[90%] bg-gray-100 mt-2'>

       <input type='text' name='mes' placeholder='Message' class='p-2 w-[90%] bg-gray-100 mt-2 h-20'>

       <button class='bg-[#344822] w-[200px] text-white p-1 mt-3'>Submit</button>
       </div>
       </form>
       <br>
      

   </div>
</div>

<script type="text/javascript">
   window.openModal = function(modalId) {
       document.getElementById(modalId).style.display = 'block'
       document.getElementsByTagName('body')[0].classList.add('overflow-y-hidden')
   }

   window.closeModal = function(modalId) {
       document.getElementById(modalId).style.display = 'none'
       document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
   }

   // Close all modals when press ESC
   document.onkeydown = function(event) {
       event = event || window.event;
       if (event.keyCode === 27) {
           document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
           let modals = document.getElementsByClassName('modal');
           Array.prototype.slice.call(modals).forEach(i => {
               i.style.display = 'none'
           })
       }
   };
</script>
  `

  document.write(modelF);

}







  function js(){
    const js=
    `
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js'></script>
    `;
    document.write(js)
  }