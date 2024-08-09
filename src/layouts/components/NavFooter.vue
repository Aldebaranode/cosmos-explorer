<template>
  <!-- footer -->
  <footer
    class="flex items-center mt-6 text-sm light:bg-gray-100 dark:bg-dark py-8 z-10 px-8 w-full"
  >
    <div class="flex flex-1">
      &copy;&nbsp;
      {{ new Date().getFullYear() }}&nbsp;
      Made 
      By&nbsp;
      <a
        class="link link-primary no-underline"
        href="https://ping.pub"
        target="_blank"
        rel="noopener noreferrer"
        >Ping.pub</a
      >
    </div>
    <div class="flex flex-1">
      Modified&nbsp;
      By&nbsp;
      <a
        class="link link-primary no-underline"
        href="https://aldebaranode.xyz"
        target="_blank"
        rel="noopener noreferrer"
        >Aldebaranode</a
      >
    </div>
    <div
      class="hidden md:!block"
    >
      <a
        class="link link-primary no-underline mr-4"
        href="https://github.com/ping-pub/explorer/blob/master/LICENSE"
        target="noopener noreferrer"
        >License</a
      >
      <a
        class="link link-primary no-underline"
        href="https://github.com/aldebaranode/cosmos-explorer"
        target="noopener noreferrer"
        >Github</a
      >
    </div>
  </footer>
</template>