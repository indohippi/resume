<template>
    <div class="experience container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">Professional Experience</h1>
      <div class="timeline relative">
        <div class="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-300 dark:bg-gray-700"></div>
        <div v-for="(job, index) in jobs" :key="index" class="timeline-item mb-8 flex" :class="{ 'flex-row-reverse': index % 2 !== 0 }">
          <div class="w-5/12"></div>
          <div class="w-2/12 flex justify-center">
            <div class="w-4 h-4 bg-blue-500 rounded-full mt-2"></div>
          </div>
          <div class="w-5/12 bg-white dark:bg-gray-800 p-4 rounded shadow-md transition-all duration-300 hover:shadow-lg" :class="{ 'slide-left': index % 2 === 0, 'slide-right': index % 2 !== 0 }">
            <h2 class="text-2xl font-bold">{{ job.title }}</h2>
            <p class="text-gray-600 dark:text-gray-400">{{ job.company }} | {{ job.location }} | {{ job.period }}</p>
            <ul class="list-disc list-inside mt-2">
              <li v-for="(responsibility, rIndex) in job.responsibilities" :key="rIndex">{{ responsibility }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    name: 'ExperienceView',
    setup() {
      const jobs = ref([
        {
          title: 'AI Software Developer',
          company: 'e2f/Outlier/Freelance',
          location: 'Austin, TX',
          period: 'May 2023 - Present',
          responsibilities: [
            'Developed AI solutions and provided technical support for various projects',
            'Programmed machine learning models using Python and TensorFlow',
            'Worked with major tech companies to train LLM models'
          ]
        },
        {
          title: 'Logistics Engineer',
          company: 'Amazon',
          location: 'Austin, TX',
          period: 'July 2022 - June 2023',
          responsibilities: [
            'Developed routing tools to increase delivery efficiency by 20%',
            'Programmed custom solutions using JavaScript and Python',
            'Utilized Tableau for data-driven operational insights'
          ]
        },
        {
          title: 'Fiber Specialist',
          company: 'Google Fiber',
          location: 'Austin, TX',
          period: 'October 2018 - July 2022',
          responsibilities: [
            'Resolved over 95% of customer issues on the first call',
            'Developed troubleshooting protocols reducing resolution time by 20%',
            'Created detailed documentation for common issues'
          ]
        },
        {
          title: 'Inventory Analyst',
          company: 'Schneider Electric',
          location: 'Athens, TX',
          period: 'October 2018 - July 2022',
          responsibilities: [
            'Managed inventory levels and optimized supply chain processes',
            'Improved data accuracy for enhanced operational efficiency'
          ]
        }
      ])
  
      return {
        jobs
      }
    }
  }
  </script>
  
  <style scoped>
  .slide-left {
    animation: slideInLeft 0.5s ease-out;
  }
  
  .slide-right {
    animation: slideInRight 0.5s ease-out;
  }
  
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  </style>