<template>
  <div class="home bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen">
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-5xl font-bold text-center my-8 text-gray-900 dark:text-white" v-scroll-animation>Jared Wienen</h1>
      <h2 class="text-3xl text-center mb-4 text-gray-700 dark:text-gray-300" v-scroll-animation>Software Engineer</h2>
      <p class="text-center mb-12 max-w-2xl mx-auto text-gray-600 dark:text-gray-400" v-scroll-animation>
        Experienced Applications Engineer and Freelance Programmer specializing in responsive web development,
        CMS, portals, mobile, and custom web applications.
      </p>
      
      <div class="flex justify-center space-x-4 mb-16" v-scroll-animation>
        <a href="mailto:jaredwienen@gmail.com" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105">
          Contact Me
        </a>
        <a href="/Jared_Wienen_Resume.pdf" target="_blank" class="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105">
          Download Resume
        </a>
      </div>

      <h3 class="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white" v-scroll-animation>Services I Offer</h3>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(service, index) in services" :key="index" 
             class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
             v-scroll-animation>
          <div class="p-6">
            <div class="text-4xl mb-4 text-blue-500">
              <component :is="service.icon" class="w-12 h-12" />
            </div>
            <h4 class="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{{ service.title }}</h4>
            <p class="text-gray-600 dark:text-gray-400">{{ service.description }}</p>
          </div>
          <div class="px-6 py-4 bg-gray-100 dark:bg-gray-700">
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li v-for="(feature, fIndex) in service.features" :key="fIndex">{{ feature }}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="text-center mt-16" v-scroll-animation>
        <h4 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Need Something Else?</h4>
        <p class="text-gray-600 dark:text-gray-400 mb-6">I'm always open to discussing new projects and opportunities.</p>
        <a href="#contact" class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105">
          Let's Talk About Your Project
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { CodeBracketIcon, GlobeAltIcon, CpuChipIcon, LightBulbIcon } from '@heroicons/vue/24/outline'

export default {
  name: 'HomeView',
  components: {
    CodeBracketIcon,
    GlobeAltIcon,
    CpuChipIcon,
    LightBulbIcon
  },
  setup() {
    const services = ref([
      {
        title: 'Custom App Development',
        description: 'Tailored mobile and web applications to meet your specific needs.',
        icon: CodeBracketIcon,
        features: [
          'Native and cross-platform apps',
          'Intuitive user interfaces',
          'Scalable backend solutions'
        ]
      },
      {
        title: 'Website Development',
        description: 'Responsive and engaging websites that represent your brand.',
        icon: GlobeAltIcon,
        features: [
          'Modern, responsive designs',
          'SEO optimization',
          'Content Management Systems'
        ]
      },
      {
        title: 'AI Model Training',
        description: 'Harness the power of AI with custom-trained models.',
        icon: CpuChipIcon,
        features: [
          'Natural Language Processing',
          'Computer Vision',
          'Predictive Analytics'
        ]
      },
      {
        title: 'Custom Solutions',
        description: 'Unique software solutions tailored to your business needs.',
        icon: LightBulbIcon,
        features: [
          'Business process automation',
          'Data analysis and visualization',
          'Integration with existing systems'
        ]
      }
    ])

    return {
      services
    }
  }
}
</script>

<style scoped>
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

.float-animation {
  animation: float 3s ease-in-out infinite;
}
</style>