
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
              class="px-3 py-2 mx-3 mt-2  transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-[#588811] hover:text-white text-[#588811] font-bold">HOME</a>
            




          
            
            
            
            
              <div class="dropdown">
                <div tabindex="0" role="button" class=" bg-white px-3 py-2 mx-3 mt-2  transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-[#588811] hover:text-white text-[#588811] font-bold">ABOUT 	&#8942;
                


                  
                </div>
                <ul tabindex="0" class="dropdown-content bg-white  z-[1] menu p-2 shadow   rounded-box w-52">
                  <li><a href="company.html" class="px-3 py-2 mx-3 mt-2  first-letter: transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-[#588811] hover:text-white text-[#588811] font-bold">Company</a></li>
                  <li><a href="Ewaste.html" class="px-3 py-2 mx-3 mt-2  first-letter: transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-[#588811] hover:text-white text-[#588811] font-bold">	E-Waste Recycling</a></li>
                </ul>
              </div>
            
         
            
            







              
            <a href="#"
              class="px-3 py-2 mx-3 mt-2  first-letter: transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-[#588811] hover:text-white text-[#588811] font-bold">SERVICES </a>
            <a href="#"
              class="px-3 py-2 mx-3 mt-2   transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-[#588811] hover:text-white text-[#588811] font-bold">CAREER</a>
            <a href="contact.html"
              class="px-3 py-2 mx-3 mt-2   transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-[#588811] hover:text-white text-[#588811] font-bold">CONTACT
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
      <a class="link link-hover">Branding</a>
      <a class="link link-hover">Design</a>
      <a class="link link-hover">Marketing</a>
      <a class="link link-hover">Advertisement</a>
    </nav> 
    <nav>
      <h6 class="footer-title">Company</h6> 
      <a class="link link-hover">About us</a>
      <a class="link link-hover">Contact</a>
      <a class="link link-hover">Jobs</a>
      <a class="link link-hover">Press kit</a>
    </nav> 
    <nav>
      <h6 class="footer-title">Social Media</h6> 
      <a class="link link-hover">Instagram</a>
      <a class="link link-hover">Facebook</a>
      <a class="link link-hover">Linkedin</a>
    </nav>
  </footer>



    
    `
    ;
    document.write(footerHTML)
  }

  function js(){
    const js=
    `
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js'></script>
    `;
    document.write(js)
  }