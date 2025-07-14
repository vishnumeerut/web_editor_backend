// seed.js

const { Template } = require("./models");

const seedTemplates = async () => {
//   await Template.deleteMany();

  const templates = [
    {
      name: 'Landing Page',
      html: '<div><h1>Welcome</h1><p>Edit this template!</p></div>',
      css: 'h1 { color: blue; }',
    },
    {
      name: 'Blog Post',
      html: '<article><h2>Blog Title</h2><p>Content goes here.</p></article>',
      css: 'article { padding: 20px; }',
    },
  ];

  await Template.insertMany(templates);
  console.log('Database seeded!');
};

seedTemplates();