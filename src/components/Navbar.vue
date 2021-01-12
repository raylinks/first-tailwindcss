<template>
<div class="bg-gray-200 antialized">
    <header class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
        <div class="flex-1 flex justify-between items-center">
            <a href="#">
                <svg width="120" height="120">
    <circle cx="60" cy="60" r="50" stroke="green" stroke-width="2" fill="blue" />
    <!-- fallback -->
    <image src="circle.jpg" width="120" height="120" />
                </svg>
            </a>
        </div>
    
        

        <label for="menu-toggle" class="cursor-pointer lg:hidden block">
            <svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M03h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
        </label>
        
        <input type="checkbox" class="hidden" id="menu-toggle" />  

        <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
            <nav>
                <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                    <li>
                        <a href="#" class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">Features</a>
                    </li>
                     <li>
                        <a href="#" class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">Pricing</a>
                    </li>
                     <li>
                        <a href="#" class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">Documentation</a>
                    </li>
                     <li>
                        <a href="#" class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">Support</a>
                    </li>
                    
                </ul>
            </nav>
            <a href="" class="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 cursor-pointer">
                <img src="https://pbs.twimg.com/profile_images/1128143121475342337/e8tkhRaz_normal.jpg" class="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400" alt="raymond">
            </a>
        </div>
    
        

    </header>

    <div class="px-4">
        <div class="max-w-3xl bg-white rounded-lg mx-auto my-16  p-16">
            <h1 class="text-2xl font-medium mb-2">Let's build: with tailwind </h1>
            <h2 class="font-medium text-sm text-indigo-400 mb-4 uppercase tracking-wide">Responsive navbar</h2>
            i am here with you guys
        </div>
    </div>
  
</div>

</template>