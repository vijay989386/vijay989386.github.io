   
        // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                document.querySelector('.navbar').classList.add('scrolled');
            } else {
                document.querySelector('.navbar').classList.remove('scrolled');
            }
            
            // Back to top button
            if (window.scrollY > 300) {
                document.querySelector('.back-to-top').classList.add('active');
            } else {
                document.querySelector('.back-to-top').classList.remove('active');
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Animate skill bars on scroll
        const animateSkillBars = () => {
            const skillBars = document.querySelectorAll('.skill-level');
            skillBars.forEach(bar => {
                const barPosition = bar.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if(barPosition < screenPosition) {
                    const width = bar.style.width;
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 500);
                }
            });
        };

        window.addEventListener('scroll', animateSkillBars);
        animateSkillBars(); // Run once on load

        // Particles.js configuration
        particlesJS("particles-js", {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                }
            },
            retina_detect: true
        });

        // Typewriter effect
        document.addEventListener('DOMContentLoaded', function() {
            const typewriterElement = document.querySelector('.typewriter');
            if (typewriterElement) {
                // Reset animation for subsequent views
                setTimeout(() => {
                    typewriterElement.style.animation = 'none';
                    setTimeout(() => {
                        typewriterElement.style.animation = 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite';
                    }, 10);
                }, 4000);
            }
        });

        // Contact form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
     

     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        											//Blog//
     //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Blog posts data
const blogPosts = {
    1: {
        title: "Best Practices for High-Quality Data Annotation",
        category: "Data Annotation",
        date: "May 15, 2025",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        content: `
            <p>Data annotation is the backbone of any successful AI model. Without high-quality annotated data, even the most sophisticated algorithms will struggle to perform accurately. In this comprehensive guide, I'll share the best practices I've developed through my 2.5+ years of experience in data annotation and AI training.</p>
            
            <h2>Understanding Annotation Guidelines</h2>
            <p>Before starting any annotation project, thoroughly understand the guidelines. I've worked on projects where unclear guidelines led to inconsistent annotations that ultimately hurt model performance. Always:</p>
            <ul>
                <li>Review guidelines multiple times</li>
                <li>Ask clarifying questions early</li>
                <li>Create a cheat sheet for complex rules</li>
                <li>Document edge cases as you encounter them</li>
            </ul>
            
            <h2>Consistency is Key</h2>
            <p>In my work with computer vision projects, I've found that consistency across annotations is more important than perfection in individual cases. When working on the Nike labeling project, we maintained 99% consistency by:</p>
            <ul>
                <li>Using template annotations for common objects</li>
                <li>Regular team calibration sessions</li>
                <li>Implementing quality checks at multiple stages</li>
            </ul>
            
            <h2>Quality Assurance Processes</h2>
            <p>Implementing robust QA processes has been crucial in my work with RWS Group and OneForma. I recommend:</p>
            <ol>
                <li>Self-review before submission</li>
                <li>Peer review for complex annotations</li>
                <li>Random sampling by senior annotators</li>
                <li>Regular feedback sessions with the AI team</li>
            </ol>
            
            <p>By following these practices, I've helped teams reduce annotation errors by up to 40% and improve model accuracy significantly.</p>
        `
    },
    2: {
        title: "How Quality Data Impacts AI Model Accuracy",
        category: "AI Training",
        date: "April 28, 2025",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        content: `
            <p>The relationship between data quality and AI model performance is direct and undeniable. Through my experience training AI models for various applications, I've witnessed firsthand how data quality can make or break a project.</p>
            
            <h2>The Data Quality Pyramid</h2>
            <p>Think of data quality as a pyramid with these layers:</p>
            <ul>
                <li><strong>Foundation:</strong> Accurate and precise annotations</li>
                <li><strong>Structure:</strong> Consistent labeling across datasets</li>
                <li><strong>Completeness:</strong> Comprehensive coverage of edge cases</li>
                <li><strong>Relevance:</strong> Data that matches real-world scenarios</li>
            </ul>
            
            <h2>Real-World Impact</h2>
            <p>In my work on the Ruby & Diamond identification project at RWS, we improved model accuracy from 78% to 94% solely by enhancing data quality. The key improvements included:</p>
            <ul>
                <li>Eliminating ambiguous annotations</li>
                <li>Standardizing bounding box precision</li>
                <li>Adding more diverse training examples</li>
                <li>Implementing stricter quality controls</li>
            </ul>
            
            <h2>Measuring Data Quality</h2>
            <p>You can't improve what you don't measure. I use these metrics to assess data quality:</p>
            <ol>
                <li>Annotation consistency score</li>
                <li>Inter-annotator agreement rate</li>
                <li>Edge case coverage percentage</li>
                <li>Error rate per 1,000 annotations</li>
            </ol>
            
            <p>Remember: Garbage in, garbage out. Investing in high-quality data annotation pays dividends in model performance.</p>
        `
    },
    3: {
        title: "Bridging Software Development and AI Training",
        category: "Software Development",
        date: "April 12, 2025",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        content: `
            <p>My journey from software development to AI training has given me a unique perspective on how these two fields complement each other. The skills I developed as a software engineer at Nagarro have proven invaluable in my current role as a Data Annotation Specialist.</p>
            
            <h2>Technical Understanding Enhances Annotation</h2>
            <p>Understanding how AI models work at a technical level helps me create better training data. For example:</p>
            <ul>
                <li>Knowing how convolutional neural networks process images informs my bounding box strategies</li>
                <li>Understanding NLP model architectures guides my text annotation approaches</li>
                <li>Familiarity with model training pipelines helps me anticipate data needs</li>
            </ul>
            
            <h2>Software Engineering Principles in AI Training</h2>
            <p>I apply software engineering best practices to data annotation workflows:</p>
            <ul>
                <li><strong>Version Control:</strong> Tracking changes in annotation guidelines</li>
                <li><strong>Modular Design:</strong> Creating reusable annotation templates</li>
                <li><strong>Testing:</strong> Implementing comprehensive QA processes</li>
                <li><strong>Documentation:</strong> Maintaining detailed project documentation</li>
            </ul>
            
            <h2>Practical Applications</h2>
            <p>In my current projects, this combined approach has led to:</p>
            <ol>
                <li>30% faster annotation workflows through automated tools</li>
                <li>Higher quality datasets through systematic validation</li>
                <li>Better communication with engineering teams</li>
                <li>More efficient problem-solving when issues arise</li>
            </ol>
            
            <p>The bridge between software development and AI training is stronger than ever, and professionals who can navigate both worlds are in high demand.</p>
        `
    },
    4: {
        title: "Machines Understanding Human Language: Welcome to the World of NLP",
        category: "NLP",
        date: "Nov 11, 2025",
        image: "https://as2.ftcdn.net/jpg/04/11/50/99/1000_F_411509944_NHQwlYfg1td6fBQyyHLdlfltmlv8cmAp.jpg",
        content: `
            <p>Learn about NLP (Natural Language Processing) and how machines are now able to understand and interact with our language!</p>
            
            <h2>What is NLP?</h2>
            <p>Natural Language Processing, also known as NLP, is a field of computer science and artificial intelligence that enables machines to understand, analyze, and generate human language. This means that computers can not only understand code and data, but can also read our spoken language, written text, and even emotions.</p>
            <h2>Where is NLP used?</h2>
            <p>NLP is making our lives easier in many areas today:</p>
            <ul>
                <li>Chatbots and voice assistants: Technologies like Siri, Alexa, and Google Assistant understand our language and respond.</li>
                <li>Machine translation: Tools like Google Translate help bridge the language gap.</li>
                <li>Sentiment analysis: For emotional analysis of social media or review data.</li>
                <li>Text summarization and information retrieval: Makes it easier to extract essence from big data or documents.</li>
            </ul>
            
            <h2>How does NLP work?</h2>
            <p>NLP is based on several techniques and algorithms, such as:</p>
            <ul>
                <li><b>Tokenization:</b> Breaking text into smaller parts (words or sentences).</li>
                <li><b>Morphological analysis:</b> Analyzing word roots and their forms.</li>
                <li><b>Sentiment analysis:</b> Detecting emotions in text.</li>
                <li><b>Named entity recognition (NER):</b> Recognizing information such as names, places, and dates in text.</li>
            </ul>
            <p>With the help of these technologies, machines can “understand” our language and extract useful information.</p>

            <h2>Challenges of NLP</h2>
            <p>NLP isn't that simple. It faces several challenges:</p>
            <ol>
                <li><b>Linguistic diversity:</b> There are thousands of languages and their many dialects in the world.</li>
                <li><b>Context and meaning:</b> The meaning of a word always depends on the context.</li>
                <li><b>Syntax complexities:</b> Variations in grammar and style can be difficult to understand.</li>
            </ol>
            <h2>The Future of NLP</h2>
            <p>NLP is constantly evolving. In the future, it will lead to even smarter, more human-like machines. We expect NLP to make fields like education, healthcare, business, and entertainment even more efficient and user-friendly.
            </p>
            <h2>Conclusion:</h2>
            <p>Natural Language Processing has completely transformed the way we interact with machines. It's not only important for technologies and businesses, but it's also simplifying and improving the digital experience for every common person.</p>
        `
    }
};

// Function to open blog post
function openBlogPost(postId) {
    const post = blogPosts[postId];
    if (!post) return;
    
    const modal = document.getElementById('blogModal');
    const content = document.getElementById('blogPostContent');
    
    content.innerHTML = `
        <div class="blog-post-full">
            <img src="${post.image}" alt="${post.title}">
            <h1>${post.title}</h1>
            <div class="blog-post-meta">
                <span class="blog-post-date">${post.date}</span>
                <span class="blog-post-category">${post.category}</span>
            </div>
            <div class="blog-post-content">
                ${post.content}
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Function to close blog post
function closeBlogPost() {
    const modal = document.getElementById('blogModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside content
window.onclick = function(event) {
    const modal = document.getElementById('blogModal');
    if (event.target === modal) {
        closeBlogPost();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeBlogPost();
    }
});