<template>
  <div class="min-h-screen bg-[#FAF9F6]">
    <!-- Full-width line at the top -->
    <div class="w-full h-[4.5px] bg-[#e65100]"></div>
    
    <div class="max-w-[900px] mx-auto px-6">
      <header class="py-10">
        <nav class="flex items-center gap-4">
          <NuxtLink 
            to="/" 
            class="relative text-[#1a5f7a] font-medium group"
          >
            Thibaut Davoult
            <span class="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#1a5f7a] transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>
          
          <div class="h-4 w-[1px] bg-[#1a5f7a]/20"></div>
          
          <NuxtLink 
            to="/about" 
            class="relative text-[#1a5f7a] group"
          >
            About
            <span class="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#1a5f7a] transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>
        </nav>
      </header>

      <main>
        <NuxtPage />
      </main>
    </div>
  </div>
</template> 