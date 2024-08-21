<template>
  <!-- footer -->
  <div class="h-[1px] w-full bg-gray-100 mt-6 dark:bg-[#384059]"></div>
  <footer
    class="flex items-center flex-col md:!flex-row gap-2 text-sm light:bg-gray-100 dark:bg-dark py-6 z-10 px-8 w-full rounded-lg">
    <div class="block md:!hidden flex flex-1">
      &copy;
      {{ new Date().getFullYear() }}&nbsp;
    </div>
    <div class="flex flex-1 gap-1">
      License &copy;
      <a class="link link-primary no-underline" href="https://github.com/ping-pub/explorer/blob/master/LICENSE"
        target="_blank" rel="noopener noreferrer">Ping.pub</a> {{ new Date().getFullYear() }}&nbsp;
    </div>
    <div class="flex flex-1">
      Maintained By&nbsp;
      <a class="link link-primary no-underline" href="https://aldebaranode.xyz" target="_blank"
        rel="noopener noreferrer">Aldebaranode</a>
    </div>
    <div class="hidden md:!block">
      <a class="link link-primary no-underline" href="https://github.com/aldebaranode/cosmos-explorer"
        target="noopener noreferrer">Github</a>
    </div>
  </footer>
</template>