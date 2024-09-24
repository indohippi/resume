<template>
    <div class="skills container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">Technical Skills</h1>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="skill-category">
          <h2 class="text-2xl font-bold mb-2">Programming Languages</h2>
          <ul class="list-disc list-inside">
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Python</li>
            <li>SQL</li>
          </ul>
        </div>
        <div class="skill-category">
          <h2 class="text-2xl font-bold mb-2">Frameworks & Libraries</h2>
          <ul class="list-disc list-inside">
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Django</li>
          </ul>
        </div>
        <div class="skill-category">
          <h2 class="text-2xl font-bold mb-2">Tools & Technologies</h2>
          <ul class="list-disc list-inside">
            <li>Git</li>
            <li>AWS Cloud</li>
            <li>REST APIs</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
        <div class="skill-category">
          <h2 class="text-2xl font-bold mb-2">Additional Competencies</h2>
          <ul class="list-disc list-inside">
            <li>Full Stack Development</li>
            <li>Object Oriented Programming (OOP)</li>
            <li>Document Object Model (DOM)</li>
            <li>Real-Time Operating Systems</li>
            <li>Automation Hardware Configuration</li>
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
  export default {
    name: 'SkillsView'
  }
  </script>