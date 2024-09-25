<template>
    <div class="container py-5">
      <!-- Header -->
      <header class="text-center">
        <img src="public/img/pass.png" alt="Profile Image" width="150" height="150">
        <h1 class="mt-3">{{ name }}</h1>
        <p>{{ bio }}</p>
      </header>
  
      <!-- About Section -->
      <section id="about" class="my-5">
        <h2>About Me</h2>
        <p>{{ aboutMe }}</p>
      </section>
  
      <!-- Projects Section -->
      <section id="projects" class="my-5">
        <h2>Projects</h2>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="project in projects" :key="project.id">
            <div class="card h-100">
              <img src="public/img/ub.jpg" class="card-img-top" :alt="project.title">
              <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ project.description }}</p>
                <a :href="project.link" target="_blank" class="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Contact Section -->
      <section id="contact" class="my-5">
        <h2>Contact Me</h2>
        <form>
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" placeholder="name@example.com">
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" id="message" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </section>
    </div>
  </template>
  
  <script setup>
  const name = 'Firdaus Ramdhan Nurcahya'
  const bio = 'A passionate data analyst and web developer'
  const profileImage = '/path-to-your-profile-image.jpg'
  
  const aboutMe = `I am a student of Information Technology at Universitas Brawijaya.
  I enjoy learning about data analysis, web development, and technology in general.`
  
  const projects = [
    {
      id: 1,
      title: 'Vue.js Project',
      description: 'A simple project using Vue.js',
      image: '/path-to-image1.jpg',
      link: 'https://example.com/project1'
    },
    {
      id: 2,
      title: 'Nuxt.js Blog',
      description: 'A blog built with Nuxt.js and Bootstrap',
      image: '/path-to-image2.jpg',
      link: 'https://example.com/project2'
    },
    {
      id: 3,
      title: 'Data Visualization',
      description: 'A data visualization dashboard using D3.js',
      image: '/img/pass.png',
      link: 'https://example.com/project3'
    }
  ]
  </script>
  
  <style>
 /* Global Styles */
body {
  font-family: 'Poppins', sans-serif;
  background-color: #f8f9fa;
  color: #333;
}

h1, h2, h3, h4, h5, h6 {
  color: #2c3e50;
  font-weight: 700;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  color: #0056b3;
  text-decoration: underline;
}

/* Header Section */
header {
  padding: 2rem 0;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

header img {
  border: 5px solid #007bff;
  transition: transform 0.3s ease-in-out;
}

header img:hover {
  transform: scale(1.1);
}

header h1 {
  font-size: 2.5rem;
  margin-top: 1rem;
}

header p {
  font-size: 1.1rem;
  color: #6c757d;
}

/* About Section */
#about {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

#about h2 {
  font-size: 2rem;
  border-bottom: 3px solid #007bff;
  display: inline-block;
  margin-bottom: 1rem;
}

/* Projects Section */
#projects h2 {
  font-size: 2rem;
  border-bottom: 3px solid #007bff;
  display: inline-block;
  margin-bottom: 1.5rem;
}

.card {
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
  border-bottom: 2px solid #007bff;
}

/* Contact Section */
#contact {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

#contact h2 {
  font-size: 2rem;
  border-bottom: 3px solid #007bff;
  display: inline-block;
  margin-bottom: 1rem;
}

#contact form {
  max-width: 600px;
  margin: 0 auto;
}

#contact .form-control {
  border-radius: 0.5rem;
  box-shadow: none;
  border: 1px solid #ced4da;
}

#contact .form-control:focus {
  border-color: #007bff;
  box-shadow: none;
}

#contact button {
  background-color: #007bff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease;
}

#contact button:hover {
  background-color: #0056b3;
  cursor: pointer;
}

/* Footer (optional if needed) */
footer {
  padding: 1rem 0;
  background-color: #007bff;
  color: #fff;
  text-align: center;
  margin-top: 2rem;
}

footer p {
  margin: 0;
  font-size: 1rem;
}

  </style>