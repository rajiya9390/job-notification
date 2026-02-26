/**
 * Job Notification Tracker - Premium App Upgrade
 * Includes realistic dataset, dashboard rendering, and job persistence.
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
        // ... continuing to 60 with similar patterns
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
        { id: 48, title: 'SDE-1', company: 'Dream11', location: 'Mumbai', mode: 'Hybrid', experience: '1-3', skills: ['Java', 'Microservices', 'Cassandra'], source: 'LinkedIn', postedDaysAgo: 2, salaryRange: '25–38 LPA', applyUrl: 'https://dream11.com/jobs/48', description: 'Help us handle 100M+ concurrent users during peak cricket seasons. Focus on concurrency and reliability.' },
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

    bindEvents() {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (link && link.getAttribute('href') && link.getAttribute('href').startsWith('/')) {
                e.preventDefault();
                const path = link.getAttribute('href');
                this.navigate(path);
            }

            // Job actions
            if (e.target.matches('.btn-view')) {
                const jobId = e.target.dataset.id;
                this.viewJobDetails(jobId);
            }
            if (e.target.matches('.btn-save')) {
                const jobId = e.target.dataset.id;
                this.toggleSaveJob(jobId, e.target);
            }
            if (e.target.matches('.modal-close')) {
                this.closeModal();
            }
        });

        // Close modal on outside click
        window.addEventListener('click', (e) => {
            if (e.target === this.modal) this.closeModal();
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

    // --- RENDER METHODS ---

    renderLanding() {
        this.root.innerHTML = `
            <section class="hero-section">
                <div class="text-max-width" style="margin: 0 auto;">
                    <h1>Stop Missing The Right Jobs.</h1>
                    <p class="subtext">Precision-matched job discovery delivered daily at 9AM.</p>
                    <a href="/settings" class="btn btn-primary" style="padding: 16px 40px; font-size: 18px;">Start Tracking</a>
                </div>
            </section>
        `;
    },

    renderDashboard() {
        this.root.innerHTML = `
            <header class="context-header">
                <h1>Job Feed</h1>
                <p class="subtext">Live opportunities curated based on current market signals.</p>
            </header>
            <div class="main-grid" style="grid-template-columns: 1fr;">
                <div class="filter-bar" id="filter-bar">
                    <div class="filter-group">
                        <label class="filter-label">Search</label>
                        <input type="text" placeholder="Title or company..." id="search-input" class="filter-input">
                    </div>
                    <div class="filter-group">
                        <label class="filter-label">Location</label>
                        <select id="location-select" class="filter-input">
                            <option value="">All Locations</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Gurgaon">Gurgaon</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Remote">Remote Only</option>
                        </select>
                    </div>
                    <div class="filter-group">
                        <label class="filter-label">Mode</label>
                        <select id="mode-select" class="filter-input">
                            <option value="">All Modes</option>
                            <option value="Remote">Remote</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="Onsite">Onsite</option>
                        </select>
                    </div>
                    <div class="filter-group">
                        <label class="filter-label">Exp</label>
                        <select id="exp-select" class="filter-input">
                            <option value="">All Exp</option>
                            <option value="Fresher">Fresher</option>
                            <option value="0-1">0-1 Year</option>
                            <option value="1-3">1-3 Years</option>
                        </select>
                    </div>
                </div>

                <div class="primary-workspace">
                    <div class="job-list-grid" id="job-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 24px;">
                        <!-- Jobs injected here -->
                    </div>
                </div>
            </div>
        `;

        this.setupFilterListeners();
        this.applyFilters();
    },

    renderSaved() {
        const savedIds = JSON.parse(localStorage.getItem('savedJobs') || '[]');
        const savedJobs = this.jobs.filter(job => savedIds.includes(job.id.toString()));

        this.root.innerHTML = `
            <header class="context-header">
                <h1>Saved Jobs</h1>
                <p class="subtext">Personalized shortlist for your next career move.</p>
            </header>
            <div class="main-grid" style="grid-template-columns: 1fr;">
                <div class="primary-workspace">
                    ${savedJobs.length > 0 ? `
                        <div class="job-list-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 24px;">
                            ${savedJobs.map(job => this.renderJobCard(job)).join('')}
                        </div>
                    ` : `
                        <div class="empty-state">
                            <h3>No saved jobs.</h3>
                            <p>Browse the feed and save roles you are interested in for future reference.</p>
                            <a href="/dashboard" class="btn btn-secondary">Explore Feed</a>
                        </div>
                    `}
                </div>
            </div>
        `;
    },

    renderJobCard(job) {
        const savedIds = JSON.parse(localStorage.getItem('savedJobs') || '[]');
        const isSaved = savedIds.includes(job.id.toString());

        return `
            <div class="job-card">
                <div class="job-header">
                    <div>
                        <div class="job-title">${job.title}</div>
                        <div class="job-company">${job.company}</div>
                    </div>
                    <span class="source-badge">${job.source}</span>
                </div>
                <div class="job-meta">
                    <div class="meta-item">📍 ${job.location}</div>
                    <div class="meta-item">🕒 ${job.mode}</div>
                    <div class="meta-item">💼 ${job.experience}</div>
                </div>
                <div style="font-size: 15px; font-weight: 600; color: #4A5D4E;">${job.salaryRange}</div>
                <div style="font-size: 13px; color: rgba(17,17,17,0.4);">${job.postedDaysAgo === 0 ? 'Today' : `${job.postedDaysAgo} days ago`}</div>
                <div class="job-actions">
                    <button class="btn btn-secondary btn-view" data-id="${job.id}">View</button>
                    <button class="btn btn-secondary btn-save" data-id="${job.id}">${isSaved ? 'Saved' : 'Save'}</button>
                    <a href="${job.applyUrl}" target="_blank" class="btn btn-primary">Apply</a>
                </div>
            </div>
        `;
    },

    // --- HELPER METHODS ---

    setupFilterListeners() {
        const filters = ['search-input', 'location-select', 'mode-select', 'exp-select'];
        filters.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('input', () => this.applyFilters());
        });
    },

    applyFilters() {
        const query = document.getElementById('search-input')?.value.toLowerCase() || '';
        const location = document.getElementById('location-select')?.value || '';
        const mode = document.getElementById('mode-select')?.value || '';
        const exp = document.getElementById('exp-select')?.value || '';

        const filtered = this.jobs.filter(job => {
            const matchesQuery = job.title.toLowerCase().includes(query) || job.company.toLowerCase().includes(query);
            const matchesLocation = !location || job.location === location || (location === 'Remote' && job.mode === 'Remote');
            const matchesMode = !mode || job.mode === mode;
            const matchesExp = !exp || job.experience === exp;
            return matchesQuery && matchesLocation && matchesMode && matchesExp;
        });

        // Sort by Latest (postedDaysAgo ascending)
        filtered.sort((a, b) => a.postedDaysAgo - b.postedDaysAgo);

        const listEl = document.getElementById('job-list');
        if (!listEl) return;

        if (filtered.length > 0) {
            listEl.innerHTML = filtered.map(job => this.renderJobCard(job)).join('');
        } else {
            listEl.innerHTML = `
                <div class="empty-state" style="grid-column: 1 / -1;">
                    <h3>No jobs match your search.</h3>
                    <p>Try adjusting your filters or keyword to find more opportunities.</p>
                </div>
            `;
        }
    },

    toggleSaveJob(id, btn) {
        let saved = JSON.parse(localStorage.getItem('savedJobs') || '[]');
        if (saved.includes(id)) {
            saved = saved.filter(savedId => savedId !== id);
            btn.innerText = 'Save';
        } else {
            saved.push(id);
            btn.innerText = 'Saved';
        }
        localStorage.setItem('savedJobs', JSON.stringify(saved));
    },

    viewJobDetails(id) {
        const job = this.jobs.find(j => j.id.toString() === id);
        if (!job) return;

        this.modalContent.innerHTML = `
            <span class="modal-close">&times;</span>
            <div class="job-header mt-8">
                <div>
                    <h2 class="serif">${job.title}</h2>
                    <div class="job-company" style="font-size: 18px;">${job.company}</div>
                </div>
                <span class="source-badge" style="padding: 4px 12px; font-size: 12px;">${job.source}</span>
            </div>
            
            <div class="job-meta mt-16 pb-16" style="border-bottom: 1px solid var(--color-border);">
                <div class="meta-item">📍 ${job.location}</div>
                <div class="meta-item">🕒 ${job.mode}</div>
                <div class="meta-item">💼 ${job.experience}</div>
                <div class="meta-item" style="color: #4A5D4E; font-weight: 700;">${job.salaryRange}</div>
            </div>

            <div class="mt-24">
                <h3 style="font-size: 16px; text-transform: uppercase; color: rgba(17,17,17,0.4); margin-bottom: 12px;">About the role</h3>
                <p style="font-size: 16px; line-height: 1.6;">${job.description}</p>
            </div>

            <div class="mt-24">
                <h3 style="font-size: 16px; text-transform: uppercase; color: rgba(17,17,17,0.4); margin-bottom: 12px;">Required Skills</h3>
                <div>
                    ${job.skills.map(skill => `<span class="skill-pill">${skill}</span>`).join('')}
                </div>
            </div>

            <div class="mt-40" style="display: flex; gap: 16px;">
                <a href="${job.applyUrl}" target="_blank" class="btn btn-primary" style="flex: 2; padding: 16px;">Apply via ${job.source}</a>
                <button class="btn btn-secondary btn-save" data-id="${job.id}" style="flex: 1;">${JSON.parse(localStorage.getItem('savedJobs') || '[]').includes(job.id.toString()) ? 'Saved' : 'Save To My List'}</button>
            </div>
        `;
        this.modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    },

    closeModal() {
        this.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    },

    updateActiveNav(path) {
        this.navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === path || (path === '/' && href === '/')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    },

    // Placeholder shells for other routes
    renderSettings() {
        this.root.innerHTML = `<header class="context-header"><h1>Settings</h1><p class="subtext">Configure matching preferences.</p></header><div class="main-grid"><section class="primary-workspace"><div class="card"><h3>Feature coming soon.</h3><p>Preference matching is slated for the next development sprint.</p></div></section></div>`;
    },
    renderDigest() {
        this.root.innerHTML = `<header class="context-header"><h1>Daily Digest</h1><p class="subtext">Your 9AM job summary.</p></header><div class="main-grid"><section class="primary-workspace"><div class="empty-state"><h3>No active digest.</h3><p>Summaries will appear once your preference profile is active.</p></div></section></div>`;
    },
    renderProof() {
        this.root.innerHTML = `<header class="context-header"><h1>Artifact Proof</h1><p class="subtext">Dev documentation.</p></header><div class="main-grid"><section class="primary-workspace"><div class="card"><h3>Milestone 2: Data & Rendering</h3><p>Realistic dataset and premium UI components implemented.</p></div></section></div>`;
    },
    render404() {
        this.root.innerHTML = `<header class="context-header"><h1>404</h1><p class="subtext">Page not found.</p></header><div class="main-grid"><section class="primary-workspace"><div class="empty-state"><a href="/" class="btn btn-secondary">Return Home</a></div></section></div>`;
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());
