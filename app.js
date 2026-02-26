/**
 * Job Notification Tracker - Intelligence Layer
 * Implements preference logic and deterministic match scoring.
 */

const App = {
    // REALISTIC DATASET (60 JOBS)
    jobs: [
        { id: 1, title: 'SDE Intern', company: 'Razorpay', location: 'Bangalore', mode: 'Remote', experience: 'Fresher', skills: ['React', 'Node.js', 'Typescript'], source: 'LinkedIn', postedDaysAgo: 1, salaryRange: '₹30k–₹45k/month', applyUrl: 'https://razorpay.com/jobs/1', description: 'Join our checkout team to build seamless payment experiences for millions of users. Excellent learning opportunity for freshers.' },
        { id: 2, title: 'Graduate Engineer Trainee', company: 'TCS', location: 'Mumbai', mode: 'Onsite', experience: 'Fresher', skills: ['Java', 'SQL', 'Python'], source: 'Naukri', postedDaysAgo: 3, salaryRange: '3.6–4.5 LPA', applyUrl: 'https://tcs.com/careers/2', description: 'Begin your professional journey with the global leader in IT services. We offer a world-class training program and exposure to global clients.' },
        { id: 3, title: 'Junior Backend Developer', company: 'Swiggy', location: 'Bangalore', mode: 'Hybrid', experience: '0-1', skills: ['Go', 'PostgreSQL', 'Redis'], source: 'LinkedIn', postedDaysAgo: 0, salaryRange: '10–14 LPA', applyUrl: 'https://swiggy.com/jobs/3', description: 'Help us optimize the logistics engine that powers India\'s favorite food delivery app. Focus on high-throughput microservices.' },
        { id: 4, title: 'Frontend Intern', company: 'Flipkart', location: 'Bangalore', mode: 'Onsite', experience: 'Fresher', skills: ['HTML', 'CSS', 'Javascript'], source: 'Indeed', postedDaysAgo: 2, salaryRange: '₹25k–₹40k/month', applyUrl: 'https://flipkart.com/jobs/4', description: 'Work alongside world-class engineers to build scalable web interfaces for India\'s largest e-commerce platform.' },
        { id: 5, title: 'React Developer', company: 'Zomato', location: 'Gurgaon', mode: 'Hybrid', experience: '1-3', skills: ['React', 'Redux', 'Jest'], source: 'LinkedIn', postedDaysAgo: 5, salaryRange: '12–18 LPA', applyUrl: 'https://zomato.com/jobs/5', description: 'Build and maintain the frontend of our primary consumer-facing application. Strong CSS and UI/UX sense mandatory.' },
        { id: 6, title: 'Python Developer', company: 'Infosys', location: 'Pune', mode: 'Onsite', experience: '0-1', skills: ['Python', 'Django', 'AWS'], source: 'Naukri', postedDaysAgo: 4, salaryRange: '4–6 LPA', applyUrl: 'https://infosys.com/jobs/6', description: 'Develop robust backend services for our enterprise cloud transformation projects worldwide.' },
        { id: 7, title: 'QA Intern', company: 'CRED', location: 'Bangalore', mode: 'Remote', experience: 'Fresher', skills: ['Selenium', 'Appium', 'Manual Testing'], source: 'LinkedIn', postedDaysAgo: 1, salaryRange: '₹35k/month', applyUrl: 'https://cred.club/jobs/7', description: 'Ensure the highest quality standards for our elite member-only ecosystem through automated and manual testing.' },
        { id: 8, title: 'Data Analyst Intern', company: 'PhonePe', location: 'Mumbai', mode: 'Hybrid', experience: 'Fresher', skills: ['SQL', 'Python', 'PowerBI'], source: 'LinkedIn', postedDaysAgo: 2, salaryRange: '₹20k–₹30k/month', applyUrl: 'https://phonepe.com/jobs/8', description: 'Dive into massive datasets to extract actionable insights for our digital payment and financial services teams.' },
        { id: 9, title: 'Java Developer', company: 'Accenture', location: 'Hyderabad', mode: 'Onsite', experience: '0-1', skills: ['Java', 'Spring Boot', 'Microservices'], source: 'Naukri', postedDaysAgo: 6, salaryRange: '5–8 LPA', applyUrl: 'https://accenture.com/jobs/9', description: 'Design and deploy scalable Java applications for leading Fortune 500 clients in the healthcare and finance sectors.' },
        { id: 10, title: 'Node.js Developer', company: 'Freshworks', location: 'Chennai', mode: 'Hybrid', experience: '1-3', skills: ['Node.js', 'Express', 'MongoDB'], source: 'LinkedIn', postedDaysAgo: 3, salaryRange: '9–15 LPA', applyUrl: 'https://freshworks.com/jobs/10', description: 'Contribute to our award-winning SaaS suite by building scalable API services used by thousands of businesses globally.' },
        { id: 11, title: 'Fullstack Intern', company: 'Juspay', location: 'Bangalore', mode: 'Remote', experience: 'Fresher', skills: ['React', 'Node.js', 'Haskell'], source: 'LinkedIn', postedDaysAgo: 1, salaryRange: '₹40k/month', applyUrl: 'https://juspay.in/jobs/11', description: 'Build the futuristic payment infrastructure of India. Join a team obsessed with performance and functional programming.' },
        { id: 12, title: 'Angular Developer', company: 'Cognizant', location: 'Kolkata', mode: 'Onsite', experience: '1-3', skills: ['Angular', 'Typescript', 'SASS'], source: 'Indeed', postedDaysAgo: 7, salaryRange: '6–10 LPA', applyUrl: 'https://cognizant.com/jobs/12', description: 'Architect complex frontend systems for large-scale digital transformation initiatives across diversos industries.' },
        { id: 13, title: 'Intern - Software Engineering', company: 'Adobe', location: 'Noida', mode: 'Hybrid', experience: 'Fresher', skills: ['C++', 'Data Structures', 'Algorithms'], source: 'LinkedIn', postedDaysAgo: 2, salaryRange: '₹60k/month', applyUrl: 'https://adobe.com/jobs/13', description: 'Join the creative giant. Help us build tools that empower the world\'s creators. Mentorship from senior engineers provided.' },
        { id: 14, title: 'SDE-1', company: 'Paytm', location: 'Noida', mode: 'Onsite', experience: '0-1', skills: ['Java', 'Distributed Systems', 'Kafka'], source: 'Naukri', postedDaysAgo: 4, salaryRange: '12–16 LPA', applyUrl: 'https://paytm.com/jobs/14', description: 'Core engineers needed for the high-frequency trading and wallet systems handling millions of transactions per second.' },
        { id: 15, title: 'React Developer', company: 'Zoho', location: 'Chennai', mode: 'Onsite', experience: '1-3', skills: ['React', 'Vanilla JS', 'SVG'], source: 'Indeed', postedDaysAgo: 5, salaryRange: '8–12 LPA', applyUrl: 'https://zoho.com/jobs/15', description: 'Create lightning-fast dashboards and visualization tools for our comprehensive business operating system.' },
        { id: 16, title: 'Backend Intern', company: 'Urban Company', location: 'Gurgaon', mode: 'Hybrid', experience: 'Fresher', skills: ['Python', 'AWS', 'Elasticsearch'], source: 'LinkedIn', postedDaysAgo: 1, salaryRange: '₹25k–₹35k/month', applyUrl: 'https://urbancompany.com/jobs/16', description: 'Help build the platform that powers at-home services for millions of households across India and abroad.' },
        { id: 17, title: 'SDE Intern', company: 'Dunzo', location: 'Bangalore', mode: 'Remote', experience: 'Fresher', skills: ['Android', 'Kotlin', 'RxJava'], source: 'Indeed', postedDaysAgo: 3, salaryRange: '₹30k/month', applyUrl: 'https://dunzo.in/jobs/17', description: 'Join the growth engine of local commerce. Work on mobile apps that sync real-time delivery tracking.' },
        { id: 18, title: 'ML Engineer Intern', company: 'Jio', location: 'Navi Mumbai', mode: 'Onsite', experience: 'Fresher', skills: ['Python', 'TensorFlow', 'NLP'], source: 'LinkedIn', postedDaysAgo: 2, salaryRange: '₹25k–₹40k/month', applyUrl: 'https://jio.com/jobs/18', description: 'Apply machine learning at the massive scale of India\'s largest telco ecosystem. Focus on personalization and recommendation.' },
        { id: 19, title: 'DevOps Intern', company: 'Groww', location: 'Bangalore', mode: 'Hybrid', experience: 'Fresher', skills: ['Docker', 'Kubernetes', 'CI/CD'], source: 'Naukri', postedDaysAgo: 5, salaryRange: '₹30k/month', applyUrl: 'https://groww.in/jobs/19', description: 'Automate everything. Join the team that keeps India\'s fastest growing investment platform stable and secure.' },
        { id: 20, title: 'Software Engineer (Java)', company: 'Wipro', location: 'Coimbatore', mode: 'Onsite', experience: '0-1', skills: ['Java', 'Spring', 'Hibernate'], source: 'Naukri', postedDaysAgo: 8, salaryRange: '3.5–5 LPA', applyUrl: 'https://wipro.com/jobs/20', description: 'Deliver high-quality software solutions for our global clients in the retail and healthcare verticals.' },
        { id: 21, title: 'Graduate Trainee', company: 'HCL Tech', location: 'Noida', mode: 'Onsite', experience: 'Fresher', skills: ['.NET', 'C#', 'SQL'], source: 'LinkedIn', postedDaysAgo: 6, salaryRange: '4–5 LPA', applyUrl: 'https://hcl.com/jobs/21', description: 'Join our digital acceleration program. Work on enterprise modernization projects for global banking giants.' },
        { id: 22, title: 'Frontend Developer', company: 'PocketFM', location: 'Bangalore', mode: 'Remote', experience: '1-3', skills: ['React', 'Next.js', 'Tailwind'], source: 'LinkedIn', postedDaysAgo: 1, salaryRange: '14–22 LPA', applyUrl: 'https://pocketfm.in/jobs/22', description: 'Build the next generation of audio storytelling. We need someone who loves crafting beautiful, performant user interfaces.' },
        { id: 23, title: 'Backend Intern', company: 'Zepto', location: 'Mumbai', mode: 'Onsite', experience: 'Fresher', skills: ['Node.js', 'PostgreSQL', 'Redis'], source: 'Indeed', postedDaysAgo: 0, salaryRange: '₹35k–₹45k/month', applyUrl: 'https://zepto.com/jobs/23', description: '10-minute delivery requires high-precision backend engineering. Help us optimize our warehouse management systems.' },
        { id: 24, title: 'Associate SDE', company: 'Oracle', location: 'Hyderabad', mode: 'Hybrid', experience: '0-1', skills: ['Java', 'SQL', 'Cloud Infrastructure'], source: 'LinkedIn', postedDaysAgo: 4, salaryRange: '10–15 LPA', applyUrl: 'https://oracle.com/jobs/24', description: 'Contribute to the development of our industry-leading cloud infrastructure applications and database services.' },
        { id: 25, title: 'UI/UX Intern', company: 'Ola Cabs', location: 'Bangalore', mode: 'Onsite', experience: 'Fresher', skills: ['Figma', 'Prototyping', 'User Research'], source: 'LinkedIn', postedDaysAgo: 3, salaryRange: '₹20k–₹30k/month', applyUrl: 'https://ola.in/jobs/25', description: 'Reimagine urban mobility. Help us design the simplest interfaces for complex transportation systems.' },
        { id: 26, title: 'Fullstack Developer', company: 'Unacademy', location: 'Bangalore', mode: 'Hybrid', experience: '1-3', skills: ['Python', 'React', 'AWS'], source: 'LinkedIn', postedDaysAgo: 2, salaryRange: '16–24 LPA', applyUrl: 'https://unacademy.com/jobs/26', description: 'Build tools that impact millions of students. Scale our live streaming and content delivery infrastructure.' },
        { id: 27, title: 'Software Engineer', company: 'Amazon', location: 'Chennai', mode: 'Onsite', experience: '1-3', skills: ['Java', 'C++', 'Scalable Systems'], source: 'Indeed', postedDaysAgo: 1, salaryRange: '25–45 LPA', applyUrl: 'https://amazon.jobs/27', description: 'Work on some of the largest-scale distributed systems in history. Own your services from design to deployment.' },
        { id: 28, title: 'React Native Intern', company: 'Blinkit', location: 'Gurgaon', mode: 'Hybrid', experience: 'Fresher', skills: ['React Native', 'Typescript', 'Firebase'], source: 'Indeed', postedDaysAgo: 4, salaryRange: '₹25k–₹35k/month', applyUrl: 'https://blinkit.com/jobs/28', description: 'Help us improve the delivery partner experience through performant and reliable mobile applications.' },
        { id: 29, title: 'Systems Engineer', company: 'Capgemini', location: 'Pune', mode: 'Onsite', experience: '1-3', skills: ['Linux', 'Shell Scripting', 'Azure'], source: 'Naukri', postedDaysAgo: 7, salaryRange: '5–8 LPA', applyUrl: 'https://capgemini.com/jobs/29', description: 'Support critical infrastructure for our global enterprise clients. Focus on reliability and security automation.' },
        { id: 30, title: 'Data Engineer Intern', company: 'Myntra', location: 'Bangalore', mode: 'Hybrid', experience: 'Fresher', skills: ['Spark', 'Hadoop', 'SQL'], source: 'LinkedIn', postedDaysAgo: 2, salaryRange: '₹30k–₹40k/month', applyUrl: 'https://myntra.com/jobs/30', description: 'Architect data pipelines that drive fashion trends for millions of users. Learn to handle petabytes of data.' },
        { id: 31, title: 'Junior Data Scientist', company: 'Airtel', location: 'Gurgaon', mode: 'Onsite', experience: '0-1', skills: ['Python', 'R', 'Machine Learning'], source: 'LinkedIn', postedDaysAgo: 5, salaryRange: '7–11 LPA', applyUrl: 'https://airtel.in/jobs/31', description: 'Use telecommunications data to predict customer behavior and optimize network performance across India.' },
        { id: 32, title: 'QA Engineer', company: 'Dell', location: 'Bangalore', mode: 'Hybrid', experience: '1-3', skills: ['TestNG', 'Postman', 'Java'], source: 'Naukri', postedDaysAgo: 6, salaryRange: '8–13 LPA', applyUrl: 'https://dell.com/jobs/32', description: 'Validate the next generation of server and storage management software. High emphasis on automated testing.' },
        { id: 33, title: 'Cybersecurity Intern', company: 'IBM', location: 'Bangalore', mode: 'Onsite', experience: 'Fresher', skills: ['Network Security', 'Linux', 'Ethical Hacking'], source: 'LinkedIn', postedDaysAgo: 4, salaryRange: '₹30k/month', applyUrl: 'https://ibm.com/jobs/33', description: 'Work with the industry leaders in global security. Learn to detect and mitigate threats at scale.' },
        { id: 34, title: 'Golang Developer', company: 'Salesforce', location: 'Hyderabad', mode: 'Hybrid', experience: '1-3', skills: ['Go', 'Kubernetes', 'gRPC'], source: 'LinkedIn', postedDaysAgo: 2, salaryRange: '20–35 LPA', applyUrl: 'https://salesforce.com/jobs/34', description: 'Build cloud-native infrastructure for the world\'s leading CRM platform. Work on core platform services.' },
        { id: 35, title: 'Laravel Developer', company: 'CarDekho', location: 'Jaipur', mode: 'Onsite', experience: '1-3', skills: ['PHP', 'Laravel', 'MySQL'], source: 'Indeed', postedDaysAgo: 8, salaryRange: '6–10 LPA', applyUrl: 'https://cardekho.com/jobs/35', description: 'Help us modernize the car buying experience in India. Maintain high-traffic web platforms and services.' },
        { id: 36, title: 'Frontend Developer (Fresher)', company: 'Postman', location: 'Bangalore', mode: 'Remote', experience: 'Fresher', skills: ['Javascript', 'SVELTE', 'Canvas'], source: 'LinkedIn', postedDaysAgo: 1, salaryRange: '15–25 LPA', applyUrl: 'https://postman.com/jobs/36', description: 'Join the team building the world\'s most popular API playground. High bar for code quality and UI performance.' },
        { id: 37, title: 'SDE Intern', company: 'Atlassian', location: 'Bangalore', mode: 'Remote', experience: 'Fresher', skills: ['Java', 'React', 'Distributed Systems'], source: 'LinkedIn', postedDaysAgo: 3, salaryRange: '₹1.0L/month', applyUrl: 'https://atlassian.com/jobs/37', description: 'Join the Jira or Confluence engine room. Work on tools that power collaboration for millions of teams globally.' },
        { id: 38, title: 'Python Intern', company: 'InMobi', location: 'Bangalore', mode: 'Hybrid', experience: 'Fresher', skills: ['Python', 'Pandas', 'Flask'], source: 'LinkedIn', postedDaysAgo: 5, salaryRange: '₹25k–₹35k/month', applyUrl: 'https://inmobi.com/jobs/38', description: 'Apply data engineering principles to real-time ad-tech bidding systems. Exposure to massive throughput.' },
        { id: 39, title: 'Junior App Developer', company: 'Byjus', location: 'Bangalore', mode: 'Onsite', experience: '0-1', skills: ['Flutter', 'Dart', 'Firebase'], source: 'Indeed', postedDaysAgo: 9, salaryRange: '6–9 LPA', applyUrl: 'https://byjus.com/jobs/39', description: 'Maintain mobile apps that make learning engaging for millions of Indian children. Focus on interactive UI.' },
        { id: 40, title: 'Security Engineer (0-1)', company: 'CoinSwitch', location: 'Bangalore', mode: 'Hybrid', experience: '0-1', skills: ['AppSec', 'Cryptography', 'Cloud Security'], source: 'LinkedIn', postedDaysAgo: 3, salaryRange: '15–22 LPA', applyUrl: 'https://coinswitch.co/jobs/40', description: 'Secure the future of finance. Protect our crypto trading platform from evolving digital threats.' },
        { id: 41, title: 'Cloud Trainee', company: 'Mindtree', location: 'Bhubaneswar', mode: 'Onsite', experience: 'Fresher', skills: ['AWS', 'Linux', 'Terraform'], source: 'Naukri', postedDaysAgo: 6, salaryRange: '3.5–4.5 LPA', applyUrl: 'https://mindtree.com/jobs/41', description: 'Begin your cloud journey. Help manage enterprise transitions to leading cloud platforms.' },
        { id: 42, title: 'React Developer', company: 'Meesho', location: 'Bangalore', mode: 'Remote', experience: '1-3', skills: ['React', 'SSR', 'Web Performance'], source: 'LinkedIn', postedDaysAgo: 1, salaryRange: '18–28 LPA', applyUrl: 'https://meesho.com/jobs/42', description: 'Optimizing e-commerce for the next billion users. Build ultra-fast mobile web experiences for Bharat.' },
        { id: 43, title: 'Backend Intern', company: 'Oyo Rooms', location: 'Gurgaon', mode: 'Hybrid', experience: 'Fresher', skills: ['Node.js', 'Redis', 'Kafka'], source: 'LinkedIn', postedDaysAgo: 4, salaryRange: '₹25k–₹35k/month', applyUrl: 'https://oyo.com/jobs/43', description: 'Help build global-scale booking and inventory systems for the hospitality industry leader.' },
        { id: 44, title: 'Graduate Trainee - IT', company: 'LTI Mindtree', location: 'Pune', mode: 'Onsite', experience: 'Fresher', skills: ['C#', 'SQL', 'Javascript'], source: 'Naukri', postedDaysAgo: 10, salaryRange: '4–6 LPA', applyUrl: 'https://ltimindtree.com/jobs/44', description: 'Be part of our large-scale application management and modernization squads for top-tier global banks.' },
        { id: 45, title: 'Junior React Dev', company: 'Smallcase', location: 'Bangalore', mode: 'Hybrid', experience: '0-1', skills: ['React', 'D3.js', 'Typescript'], source: 'LinkedIn', postedDaysAgo: 2, salaryRange: '10–15 LPA', applyUrl: 'https://smallcase.com/jobs/45', description: 'Join our investment product team. Build highly visual and data-driven interfaces for stock market investors.' },
        { id: 46, title: 'Intern - Data Analyst', company: 'Upgrad', location: 'Mumbai', mode: 'Onsite', experience: 'Fresher', skills: ['Tableau', 'Excel', 'Python'], source: 'Indeed', postedDaysAgo: 5, salaryRange: '₹15k–₹25k/month', applyUrl: 'https://upgrad.com/jobs/46', description: 'Analyze student journey data to help us improve learning outcomes and course completion rates.' },
        { id: 47, title: 'Angular Developer', company: 'L&T Infotech', location: 'Mumbai', mode: 'Onsite', experience: '1-3', skills: ['Angular', 'Bootstrap', 'RXJS'], source: 'Naukri', postedDaysAgo: 7, salaryRange: '5–9 LPA', applyUrl: 'https://lntinfotech.com/jobs/47', description: 'Build enterprise-grade dashboards for leading manufacturing and oil & gas giants worldwide.' },
        { id: 48, title: 'SDE-1', company: 'Dream11', location: 'Mumbai', mode: 'Hybrid', experience: '1-3', skills: ['Java', 'Microservices', 'Cassandra'], source: 'LinkedIn', postedDaysAgo: 2, salaryRange: '25–38 LPA', applyUrl: 'https://dream11.com/jobs/48', description: 'Help us handle 100M+ concurrent users during peak cricket seasons. Focus on reliability and security automation.' },
        { id: 49, title: 'DevOps Intern', company: 'PolicyBazaar', location: 'Gurgaon', mode: 'Onsite', experience: 'Fresher', skills: ['Jenkins', 'AWS', 'Shell'], source: 'Naukri', postedDaysAgo: 9, salaryRange: '₹20k–₹30k/month', applyUrl: 'https://policybazaar.com/jobs/49', description: 'Contribute to the automation of deployment pipelines for India\'s leading insurance marketplace.' },
        { id: 50, title: 'Junior Backend Dev', company: 'Shiprocket', location: 'Delhi', mode: 'Hybrid', experience: '0-1', skills: ['PHP', 'Symfony', 'PostgreSQL'], source: 'LinkedIn', postedDaysAgo: 3, salaryRange: '6–9 LPA', applyUrl: 'https://shiprocket.in/jobs/50', description: 'Help build the e-commerce fulfillment infrastructure of India. Focus on efficient shipping algorithms.' },
        { id: 51, title: 'SDE Intern', company: 'Google', location: 'Bangalore', mode: 'Onsite', experience: 'Fresher', skills: ['Go', 'C++', 'Java'], source: 'LinkedIn', postedDaysAgo: 1, salaryRange: '₹1.2L/month', applyUrl: 'https://google.com/jobs/51', description: 'Work on products used by billions. Develop new features and optimize performance for core search or ads.' },
        { id: 52, title: 'Frontend Developer', company: 'Nykaa', location: 'Mumbai', mode: 'Hybrid', experience: '1-3', skills: ['React', 'Next.js', 'SCSS'], source: 'Indeed', postedDaysAgo: 4, salaryRange: '10–16 LPA', applyUrl: 'https://nykaa.com/jobs/52', description: 'Join the beauty and fashion leader in India. Build elegant and performant web shopping experiences.' },
        { id: 53, title: 'Intern - Software Dev', company: 'SAP', location: 'Bangalore', mode: 'Hybrid', experience: 'Fresher', skills: ['Java', 'Hana', 'Cloud Native'], source: 'LinkedIn', postedDaysAgo: 3, salaryRange: '₹35k/month', applyUrl: 'https://sap.com/jobs/53', description: 'Participate in the development of next-gen cloud ERP solutions with the global leader in enterprise software.' },
        { id: 54, title: 'Junior Data Analyst', company: 'Dailyhunt', location: 'Bangalore', mode: 'Onsite', experience: '0-1', skills: ['SQL', 'Hive', 'Python'], source: 'Naukri', postedDaysAgo: 6, salaryRange: '5–8 LPA', applyUrl: 'https://dailyhunt.in/jobs/54', description: 'Analyze content consumption patterns for India\'s most used news and local language app.' },
        { id: 55, title: 'Fullstack Dev (0-1)', company: 'PayU', location: 'Gurgaon', mode: 'Hybrid', experience: '0-1', skills: ['Typescript', 'Node.js', 'React'], source: 'LinkedIn', postedDaysAgo: 2, salaryRange: '12–18 LPA', applyUrl: 'https://payu.in/jobs/55', description: 'Develop secure and fast payment checkout experiences for the global leader in fintech technologies.' },
        { id: 56, title: 'React Intern', company: 'ShareChat', location: 'Bangalore', mode: 'Remote', experience: 'Fresher', skills: ['React', 'Javascript', 'Three.js'], source: 'Indeed', postedDaysAgo: 1, salaryRange: '₹40k/month', applyUrl: 'https://sharechat.com/jobs/56', description: 'Work on hyper-growth local language social networking products. High exposure to frontend complexity.' },
        { id: 57, title: 'Graduate Trainee Systems', company: 'Accenture', location: 'Chennai', mode: 'Onsite', experience: 'Fresher', skills: ['Java', 'DevOps', 'Cloud'], source: 'LinkedIn', postedDaysAgo: 5, salaryRange: '4.5–6 LPA', applyUrl: 'https://accenture.com/jobs/57', description: 'Join our technology consulting wing and work on large-scale infrastructure and application management.' },
        { id: 58, title: 'Associate Backend Dev', company: 'ElasticRun', location: 'Pune', mode: 'Hybrid', experience: '1-3', skills: ['Python', 'Azure', 'Microservices'], source: 'Indeed', postedDaysAgo: 8, salaryRange: '12–18 LPA', applyUrl: 'https://elasticrun.com/jobs/58', description: 'Scale the logistics of rural India. Work on optimized routing and supply chain fulfillment software.' },
        { id: 59, title: 'UI Intern', company: 'Clear (Tax)', location: 'Bangalore', mode: 'Hybrid', experience: 'Fresher', skills: ['React', 'CSS', 'Accessibility'], source: 'LinkedIn', postedDaysAgo: 3, salaryRange: '₹25k–₹35k/month', applyUrl: 'https://clear.in/jobs/59', description: 'Help simplify financial and tax compliance for millions. Focus on building accessible and error-proof forms.' },
        { id: 60, title: 'Junior DevOps Engineer', company: 'Darwinbox', location: 'Hyderabad', mode: 'Onsite', experience: '0-1', skills: ['Ansible', 'Terraform', 'AWS'], source: 'LinkedIn', postedDaysAgo: 4, salaryRange: '7–10 LPA', applyUrl: 'https://darwinbox.com/jobs/60', description: 'Help us automate the global HCM platform used by millions. Focus on infrastructure as code and site reliability.' }
    ],

    init() {
        this.cacheDOM();
        this.bindEvents();
        this.loadPreferences();
        this.handleInitialRoute();
    },

    cacheDOM() {
        this.root = document.getElementById('app-root');
        this.mobileToggle = document.getElementById('mobile-toggle');
        this.navMenu = document.getElementById('nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.modal = document.getElementById('job-modal');
        this.modalContent = document.getElementById('modal-content');
    },

    loadPreferences() {
        this.prefs = JSON.parse(localStorage.getItem('jobTrackerPreferences')) || {
            roleKeywords: '',
            preferredLocations: [],
            preferredMode: [],
            experienceLevel: '',
            skills: '',
            minMatchScore: 40
        };
    },

    bindEvents() {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (link && link.getAttribute('href') && link.getAttribute('href').startsWith('/')) {
                e.preventDefault();
                const path = link.getAttribute('href');
                this.navigate(path);
            }

            if (e.target.matches('.btn-view')) {
                this.viewJobDetails(e.target.dataset.id);
            }
            if (e.target.matches('.btn-save')) {
                this.toggleSaveJob(e.target.dataset.id, e.target);
            }
            if (e.target.matches('.modal-close')) {
                this.closeModal();
            }
        });

        window.addEventListener('popstate', () => {
            this.renderRoute(window.location.pathname);
        });

        if (this.mobileToggle) {
            this.mobileToggle.addEventListener('click', () => {
                this.navMenu.classList.toggle('show');
            });
        }
    },

    handleInitialRoute() {
        this.renderRoute(window.location.pathname);
    },

    navigate(path) {
        if (window.location.pathname === path) return;
        window.history.pushState({}, '', path);
        this.renderRoute(path);
        if (this.navMenu) this.navMenu.classList.remove('show');
    },

    renderRoute(path) {
        this.updateActiveNav(path);
        window.scrollTo(0, 0);

        switch (path) {
            case '/': this.renderLanding(); break;
            case '/dashboard': this.renderDashboard(); break;
            case '/settings': this.renderSettings(); break;
            case '/saved': this.renderSaved(); break;
            case '/digest': this.renderDigest(); break;
            case '/proof': this.renderProof(); break;
            default: this.render404(); break;
        }
    },

    // --- MATCH ENGINE ---

    calculateMatchScore(job) {
        if (!this.prefs.roleKeywords && !this.prefs.experienceLevel) return 0;

        let score = 0;
        const keywords = this.prefs.roleKeywords.split(',').map(k => k.trim().toLowerCase()).filter(k => k);
        const userSkills = this.prefs.skills.split(',').map(s => s.trim().toLowerCase()).filter(s => s);

        // 1. Role Keywords in Title (+25) or Description (+15)
        const inTitle = keywords.some(k => job.title.toLowerCase().includes(k));
        const inDesc = keywords.some(k => job.description.toLowerCase().includes(k));
        if (inTitle) score += 25;
        else if (inDesc) score += 15;

        // 2. Preferred Locations (+15)
        if (this.prefs.preferredLocations.includes(job.location)) score += 15;

        // 3. Preferred Mode (+10)
        if (this.prefs.preferredMode.includes(job.mode)) score += 10;

        // 4. Experience Level (+10)
        if (job.experience === this.prefs.experienceLevel) score += 10;

        // 5. Skills overlap (+15)
        const hasSkillMatch = job.skills.some(s => userSkills.includes(s.toLowerCase()));
        if (hasSkillMatch) score += 15;

        // 6. Recency (+5)
        if (job.postedDaysAgo <= 2) score += 5;

        // 7. Source LinkedIn (+5)
        if (job.source === 'LinkedIn') score += 5;

        return Math.min(score, 100);
    },

    getScoreClass(score) {
        if (score >= 80) return 'score-high';
        if (score >= 60) return 'score-mid';
        if (score >= 40) return 'score-neutral';
        return 'score-low';
    },

    // --- PAGE RENDERERS ---

    renderDashboard() {
        const hasPrefs = this.prefs.roleKeywords || this.prefs.skills;

        this.root.innerHTML = `
            <header class="context-header">
                <h1>Intelligence Feed</h1>
                <p class="subtext">Personalized job discovery engine.</p>
            </header>
            <div class="main-grid" style="grid-template-columns: 1fr;">
                ${!hasPrefs ? `<div class="banner">Set your preferences to activate intelligent matching.</div>` : ''}
                
                <div class="filter-bar">
                    <div class="filter-group" style="flex: 2;">
                        <label class="filter-label">Search</label>
                        <input type="text" id="search-input" class="filter-input" placeholder="Title/Company...">
                    </div>
                    <div class="filter-group">
                        <label class="filter-label">Location</label>
                        <select id="location-select" class="filter-input">
                            <option value="">All Locations</option>
                            ${[...new Set(this.jobs.map(j => j.location))].sort().map(l => `<option value="${l}">${l}</option>`).join('')}
                        </select>
                    </div>
                    <div class="filter-group">
                        <label class="filter-label">Sort By</label>
                        <select id="sort-select" class="filter-input">
                            <option value="latest">Latest</option>
                            <option value="score">Match Score</option>
                            <option value="salary">Salary (High)</option>
                        </select>
                    </div>
                    <div class="filter-group" style="justify-content: flex-end; flex: 0 0 auto;">
                        <div class="toggle-container">
                            <span>Only High Matches</span>
                            <label class="switch">
                                <input type="checkbox" id="match-toggle">
                                <span class="slider"></span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="primary-workspace">
                    <div id="job-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 24px;"></div>
                </div>
            </div>
        `;

        // Filter listeners
        ['search-input', 'location-select', 'sort-select', 'match-toggle'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('input', () => this.applyFilters());
        });

        this.applyFilters();
    },

    applyFilters() {
        const query = document.getElementById('search-input')?.value.toLowerCase() || '';
        const loc = document.getElementById('location-select')?.value || '';
        const sort = document.getElementById('sort-select')?.value || 'latest';
        const onlyMatches = document.getElementById('match-toggle')?.checked || false;

        let filtered = this.jobs.map(job => ({ ...job, matchScore: this.calculateMatchScore(job) }));

        // 1. Mandatory Filter AND Logic
        filtered = filtered.filter(job => {
            const matchesQuery = job.title.toLowerCase().includes(query) || job.company.toLowerCase().includes(query);
            const matchesLoc = !loc || job.location === loc;
            const matchesThreshold = !onlyMatches || job.matchScore >= this.prefs.minMatchScore;
            return matchesQuery && matchesLoc && matchesThreshold;
        });

        // 2. Sorting
        if (sort === 'score') {
            filtered.sort((a, b) => b.matchScore - a.matchScore);
        } else if (sort === 'salary') {
            const parseSalary = (s) => parseInt(s.replace(/[^0-9]/g, '')) || 0;
            filtered.sort((a, b) => parseSalary(b.salaryRange) - parseSalary(a.salaryRange));
        } else {
            filtered.sort((a, b) => a.postedDaysAgo - b.postedDaysAgo);
        }

        const listEl = document.getElementById('job-list');
        if (!listEl) return;

        if (filtered.length === 0) {
            listEl.innerHTML = `
                <div class="empty-state" style="grid-column: 1/-1;">
                    <h3>No roles match your criteria.</h3>
                    <p>Adjust filters or lower your matching threshold.</p>
                </div>
            `;
            return;
        }

        listEl.innerHTML = filtered.map(job => this.renderJobCard(job)).join('');
    },

    renderJobCard(job) {
        const scoreClass = this.getScoreClass(job.matchScore);
        const savedIds = JSON.parse(localStorage.getItem('savedJobs') || '[]');
        const isSaved = savedIds.includes(job.id.toString());

        return `
            <div class="job-card">
                <div class="job-header">
                    <div>
                        <div class="job-title">${job.title}</div>
                        <div class="job-company">${job.company}</div>
                    </div>
                    <div class="score-badge ${scoreClass}">${job.matchScore}% Match</div>
                </div>
                <div class="job-meta">
                    <div class="meta-item">📍 ${job.location}</div>
                    <div class="meta-item">🕒 ${job.mode}</div>
                    <div class="meta-item">💼 ${job.experience}</div>
                </div>
                <div style="font-size: 15px; font-weight: 600; color: #4A5D4E;">${job.salaryRange}</div>
                <div class="job-actions">
                    <button class="btn btn-secondary btn-view" data-id="${job.id}">View</button>
                    <button class="btn btn-secondary btn-save" data-id="${job.id}">${isSaved ? 'Saved' : 'Save'}</button>
                    <a href="${job.applyUrl}" target="_blank" class="btn btn-primary">Apply</a>
                </div>
            </div>
        `;
    },

    renderSettings() {
        this.root.innerHTML = `
            <header class="context-header">
                <h1>Preferences</h1>
                <p class="subtext">Configure matching logic for intentional job discovery.</p>
            </header>
            <div class="main-grid">
                <div class="primary-workspace">
                    <div class="card">
                        <h2 class="card-title">Preference Profile</h2>
                        
                        <div class="form-group">
                            <label class="form-label">Ideal Roles</label>
                            <input type="text" id="role-keywords" placeholder="e.g. Frontend Engineer, SDE Intern" value="${this.prefs.roleKeywords}">
                            <span style="font-size:12px; color:rgba(17,17,17,0.4);">Comma separated keywords.</span>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Tech Stack (Skills)</label>
                            <input type="text" id="skills-input" placeholder="e.g. React, Node, SQL" value="${this.prefs.skills}">
                        </div>

                        <div class="form-row" style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
                            <div class="form-group">
                                <label class="form-label">Preferred Location</label>
                                <select id="pref-location-select" multiple style="height:100px;">
                                    ${[...new Set(this.jobs.map(j => j.location))].sort().map(l =>
            `<option value="${l}" ${this.prefs.preferredLocations.includes(l) ? 'selected' : ''}>${l}</option>`
        ).join('')}
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Exp Level</label>
                                <select id="pref-exp">
                                    <option value="">Any</option>
                                    <option value="Fresher" ${this.prefs.experienceLevel === 'Fresher' ? 'selected' : ''}>Fresher</option>
                                    <option value="0-1" ${this.prefs.experienceLevel === '0-1' ? 'selected' : ''}>0-1 Year</option>
                                    <option value="1-3" ${this.prefs.experienceLevel === '1-3' ? 'selected' : ''}>1-3 Years</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Work Style</label>
                            <div class="radio-group mt-8">
                                ${['Remote', 'Hybrid', 'Onsite'].map(mode => `
                                    <label class="radio-option">
                                        <input type="checkbox" class="pref-mode" value="${mode}" ${this.prefs.preferredMode.includes(mode) ? 'checked' : ''}> ${mode}
                                    </label>
                                `).join('')}
                            </div>
                        </div>

                        <div class="form-group mt-16">
                            <label class="form-label">Minimum Match Threshold: <span id="threshold-val">${this.prefs.minMatchScore}%</span></label>
                            <input type="range" id="score-slider" min="0" max="100" value="${this.prefs.minMatchScore}">
                        </div>

                        <div class="mt-24">
                            <button class="btn btn-primary" id="save-prefs">Save Preferences</button>
                        </div>
                    </div>
                </div>
                <aside class="secondary-panel">
                    <div class="card">
                        <h3 style="font-size:16px;">Matching Logic</h3>
                        <p style="font-size:14px; line-height:1.6; color:rgba(17,17,17,0.6);">
                            Our engine weighs your ideal role title (+25), skills overlap (+15), and location preference (+15) highest to ensure precision.
                        </p>
                    </div>
                </aside>
            </div>
        `;

        const slider = document.getElementById('score-slider');
        const thresholdVal = document.getElementById('threshold-val');
        slider.addEventListener('input', () => { thresholdVal.innerText = `${slider.value}%`; });

        document.getElementById('save-prefs').addEventListener('click', () => {
            const updatedPrefs = {
                roleKeywords: document.getElementById('role-keywords').value,
                skills: document.getElementById('skills-input').value,
                preferredLocations: Array.from(document.getElementById('pref-location-select').selectedOptions).map(o => o.value),
                preferredMode: Array.from(document.querySelectorAll('.pref-mode:checked')).map(o => o.value),
                experienceLevel: document.getElementById('pref-exp').value,
                minMatchScore: parseInt(slider.value)
            };
            localStorage.setItem('jobTrackerPreferences', JSON.stringify(updatedPrefs));
            this.prefs = updatedPrefs;
            alert('Preferences saved.');
        });
    },

    // --- OTHER UI STUBS ---
    renderLanding() {
        this.root.innerHTML = `<section class="hero-section"><div class="text-max-width" style="margin: 0 auto;"><h1>Stop Missing The Right Jobs.</h1><p class="subtext">Precision-matched job discovery delivered daily at 9AM.</p><a href="/settings" class="btn btn-primary" style="padding: 16px 40px; font-size: 18px;">Start Tracking</a></div></section>`;
    },
    renderSaved() {
        const savedIds = JSON.parse(localStorage.getItem('savedJobs') || '[]');
        const savedJobs = this.jobs.filter(job => savedIds.includes(job.id.toString()));
        this.root.innerHTML = `<header class="context-header"><h1>Saved</h1></header><div class="main-grid" style="grid-template-columns: 1fr;">${savedJobs.length ? `<div class="job-list-grid" style="display:grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap:24px;">${savedJobs.map(j => this.renderJobCard({ ...j, matchScore: this.calculateMatchScore(j) })).join('')}</div>` : `<div class="empty-state">No saved jobs.</div>`}</div>`;
    },
    renderDigest() { this.root.innerHTML = `<header class="context-header"><h1>Daily Digest</h1><p class="subtext">Future feature.</p></header>`; },
    renderProof() { this.root.innerHTML = `<header class="context-header"><h1>Proof</h1><p class="subtext">Intelligence implemented.</p></header>`; },
    render404() { this.root.innerHTML = `<h1>404</h1>`; },

    updateActiveNav(path) {
        this.navLinks.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.toggle('active', href === path || (path === '/' && href === '/'));
        });
    },

    viewJobDetails(id) {
        const job = this.jobs.find(j => j.id.toString() === id);
        if (!job) return;
        const score = this.calculateMatchScore(job);
        this.modalContent.innerHTML = `
            <span class="modal-close">&times;</span>
            <div class="job-header mt-8">
                <div><h2 class="serif">${job.title}</h2><div class="job-company">${job.company}</div></div>
                <div class="score-badge ${this.getScoreClass(score)}">${score}% Match</div>
            </div>
            <div class="mt-24"><p>${job.description}</p></div>
            <div class="mt-24">${job.skills.map(s => `<span class="skill-pill">${s}</span>`).join('')}</div>
        `;
        this.modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    },
    closeModal() { this.modal.style.display = 'none'; document.body.style.overflow = 'auto'; }
};

document.addEventListener('DOMContentLoaded', () => App.init());
