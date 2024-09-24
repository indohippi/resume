<template>
    <div class="contact container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">Contact Me</h1>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="contact-info">
          <h2 class="text-2xl font-bold mb-4">Get in Touch</h2>
          <ul class="space-y-2">
            <li>
              <strong>Email:</strong> 
              <a href="mailto:jaredwienen@gmail.com" class="text-blue-500 hover:underline">jaredwienen@gmail.com</a>
            </li>
            <li>
              <strong>Phone:</strong> (430) 502-2281
            </li>
            <li>
              <strong>Location:</strong> Austin, TX
            </li>
          </ul>
          <div class="mt-6">
            <h3 class="text-xl font-bold mb-2">Professional Profiles</h3>
            <ul class="space-y-2">
              <li>
                <a href="https://linkedin.com/in/jaredwienen" target="_blank" class="text-blue-500 hover:underline">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/indohippi" target="_blank" class="text-blue-500 hover:underline">GitHub</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="contact-form">
          <h2 class="text-2xl font-bold mb-4">Send a Message</h2>
          <form @submit.prevent="submitForm" class="space-y-4">
            <div>
              <label for="name" class="block mb-1">Name</label>
              <input type="text" id="name" v-model="form.name" required class="w-full p-2 border rounded">
            </div>
            <div>
              <label for="email" class="block mb-1">Email</label>
              <input type="email" id="email" v-model="form.email" required class="w-full p-2 border rounded">
            </div>
            <div>
              <label for="message" class="block mb-1">Message</label>
              <textarea id="message" v-model="form.message" required class="w-full p-2 border rounded" rows="4"></textarea>
            </div>
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactView',
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: ''
        }
      }
    },
    methods: {
      submitForm() {
        // Here you would typically send the form data to a server
        // For now, we'll just log it to the console
        console.log('Form submitted:', this.form);
        alert('Thank you for your message! I will get back to you soon.');
        // Reset form after submission
        this.form = { name: '', email: '', message: '' };
      }
    }
  }
  </script>