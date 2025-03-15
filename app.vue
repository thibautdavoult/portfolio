<template>
  <div class="min-h-screen bg-[#FAF9F6]">
    <div class="max-w-[700px] mx-auto px-6">
      <header class="py-12">
        <nav class="flex justify-between items-center">
          <NuxtLink to="/" class="text-[#1a5f7a] font-medium hover:underline transition-all duration-200">Thibaut Davoult</NuxtLink>
          <NuxtLink to="/about" class="text-[#1a5f7a] hover:underline transition-all duration-200">About</NuxtLink>
        </nav>
      </header>

      <main>
        <NuxtPage />
      </main>
    </div>
  </div>
</template> 