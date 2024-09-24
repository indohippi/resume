<template>
    <div class="skills container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">Technical Skills</h1>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="skill-category">
          <h2 class="text-2xl font-bold mb-4">Skill Proficiency</h2>
          <canvas ref="chartCanvas"></canvas>
        </div>
        <div class="skill-category">
          <h2 class="text-2xl font-bold mb-2">Technologies & Tools</h2>
          <ul class="list-disc list-inside">
            <li>Git</li>
            <li>AWS Cloud</li>
            <li>REST APIs</li>
            <li>PostgreSQL</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Django</li>
          </ul>
        </div>
      </div>
      <div class="mt-8">
        <h2 class="text-2xl font-bold mb-2">Currently Learning</h2>
        <ul class="list-disc list-inside">
          <li>GPIO Programming</li>
          <li>RF Programming</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  import Chart from 'chart.js/auto'
  
  export default {
    name: 'SkillsView',
    setup() {
      const chartCanvas = ref(null)
  
      onMounted(() => {
        const ctx = chartCanvas.value.getContext('2d')
        new Chart(ctx, {
          type: 'radar',
          data: {
            labels: ['JavaScript', 'HTML/CSS', 'Python', 'SQL', 'React', 'Node.js'],
            datasets: [{
              label: 'Skill Level',
              data: [90, 85, 80, 75, 85, 80],
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgb(54, 162, 235)',
              pointBackgroundColor: 'rgb(54, 162, 235)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(54, 162, 235)'
            }]
          },
          options: {
            responsive: true,
            scales: {
              r: {
                angleLines: {
                  display: false
                },
                suggestedMin: 0,
                suggestedMax: 100
              }
            }
          }
        })
      })
  
      return {
        chartCanvas
      }
    }
  }
  </script>