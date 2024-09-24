<template>
    <div class="about container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6" v-scroll-animation>About Me</h1>
      <div class="mb-6" v-scroll-animation>
        <p class="mb-4">
          As an experienced Applications Engineer and Freelance Programmer, I bring a wealth of knowledge in responsive web
          development, CMS, portals, mobile, and custom web applications.
        </p>
        <p class="mb-4">
          My journey in the tech industry has taken me through roles at industry giants like Amazon and Google Fiber,
          as well as innovative companies like Schneider Electric.
        </p>
        <p>
          I pride myself on my adaptability, problem-solving skills, and relentless curiosity. I'm always eager to learn
          and apply new technologies, currently exploring GPIO and RF Programming to broaden my skill set even further.
        </p>
      </div>
      <h2 class="text-2xl font-bold mb-4" v-scroll-animation>Key Strengths</h2>
      <ul class="list-disc list-inside mb-6" v-scroll-animation>
        <li>Full Stack Development</li>
        <li>AI and Machine Learning Solutions</li>
        <li>Data-Driven Decision Making</li>
        <li>Effective Communication and Teamwork</li>
        <li>Customer-Centric Approach</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutView'
  }
  </script>
  
  <style scoped>
  .before-enter {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.5s ease-out;
  }
  
  .enter {
    opacity: 1;
    transform: translateY(0);
  }
  </style>