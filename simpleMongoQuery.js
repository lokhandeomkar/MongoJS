/*

Command: db.resumes.find({location : "New York, NY"}).count()

MongoDB shell version: 3.2.1
connecting to: cs410mp3
6139
bye
*/

/*

Command: db.resumes.find({location : "New York, NY", "education.degree" : "MBA"}).pretty()

MongoDB shell version: 3.2.1
connecting to: cs410mp3
{
	"_id" : ObjectId("56b6767a5d134274640bfd82"),
	"additionalInfo" : "Skills: • Microsoft Office - Microsoft Word, Excel, PowerPoint, Outlook, Publisher • Vlinq, Fiserv-Mainframe, Cognos, Profit Planner • SAP • Lotus notes, Lync, Concur, Kronos",
	"additionalInfo_html" : "<p>Skills: <br/> <br/>• Microsoft Office - Microsoft Word, Excel, PowerPoint, Outlook, Publisher <br/>• Vlinq, Fiserv-Mainframe, Cognos, Profit Planner <br/>• SAP <br/>• Lotus notes, Lync, Concur, Kronos</p>",
	"awards" : [ ],
	"certifications" : [ ],
	"education" : [
		{
			"degree" : "MBA",
			"start_finish_dates" : "2014",
			"university" : "Benedictine University",
			"university_location" : "Lisle, IL"
		},
		{
			"degree" : "BS in Biology",
			"start_finish_dates" : "2009",
			"university" : "Georgia Southern University",
			"university_location" : "Statesboro, GA"
		}
	],
	"groups" : [ ],
	"location" : "New York, NY",
	"name" : "Angela Francois",
	"skills" : [ ],
	"work_experience" : [
		{
			"company" : "Porsche Financial Services - Porsche Cars North America",
			"company_location" : "Atlanta, GA",
			"job_title" : "Account Coordinator",
			"responsibilities" : "• Provided guidance and support within the department in order to achieve excellent and consistent service and integrity when interacting with dealers, internal customers, external customers, vendors, and affiliates ",
			"start_finish_dates" : "March 2013 to October 2015"
		},
		{
			"company" : "Verizon Wireless",
			"company_location" : "Alpharetta, GA",
			"job_title" : "Customer Service Representative/ Retention Specialist",
			"responsibilities" : "• Handled inbound customer calls ",
			"start_finish_dates" : "October 2011 to March 2013"
		},
		{
			"company" : "Lowe's Companies",
			"company_location" : "Norcross, GA",
			"job_title" : "Pricing Coordinator",
			"responsibilities" : "• Administer and process advertising, instant rebate, promotion and price claims and return authorizations. ",
			"start_finish_dates" : "May 2007 to October 2011"
		},
		{
			"company" : "Georgia Southern University",
			"company_location" : "Statesboro, GA",
			"job_title" : "Student Office Assistant",
			"responsibilities" : "• Assisted with the planning and execution of conferences, meetings and fairs. ",
			"start_finish_dates" : "September 2006 to December 2009"
		}
	]
}
{
	"_id" : ObjectId("56b6767b5d134274640c2269"),
	"additionalInfo" : "Areas of expertise include: * Application Architecture * Business Analysis * Content Management * Infrastructure Architecture * Solution Engineering * Financial Planning * Process Improvement * Operations Management * Project/Program Management * Relationship Management * Outsourcing * Team Building TECHNICAL SKILLS: Operating Systems: Windows, AIX, HPUX, Solaris, Linux (Red Hat, Ubuntu, CentOS, SUSE), Mac OS, VMWare. Web Servers: Apache Web Server, Microsoft Internet Information Server (IIS), IBM HTTPServer. Application Servers / Middleware: IBM WebSphere: Application Server, Portal Server, MQ; Apache Tomcat, JBoss: Application Server, Portal; Oracle/BEA Weblogic Application Server, Open Text Web Experience Management, LiveLink; Adobe LiveCycle; Autonomy IDOL; Google Search Appliance; SDL Tridion; Drupal, CA/Netegrity SiteMinder, IBM FileNet Content Manager, Microsoft SharePoint. Database Servers: IBM DB2, Oracle, Microsoft SQL, MySQL, MongoDB. Languages / Scripting: Java, C, C++, JSP, Servlets, JDBC, EJB, JNDI, Web Services, HTML, XML, XSLT, XHTML, UNIX shell, Perl. Networking / Storage / Security: TCP/IP, DNS, DHCP, HTTP(S), POP3, NAT, SMTP, POP3, IMAP, LDAP, NAS, SAN, SRDF, NFS, GPFS, HFS, RSYNC, SSL, PGP, Firewalls, Local & Global load balancers (Cisco PIX, ACE, Arrowpoint, Citrix Netscaler, SonicWALL). Applications: Microsoft Word, Excel, Project, PowerPoint, Visio; CA Clarity PPM. Methodologies / Concepts / Frameworks: SOA, Single Sign-On, .NET, Multi-tier Architecture, Spring MVC, ETL, PMBOK, BABOK, ITIL, TOGAF, Agile/Scrum, Kaizen Big Data: Hadoop, Hive, HBase, MapReduce",
	"additionalInfo_html" : "<p>Areas of expertise include: <br/> <br/>* Application Architecture <br/>* Business Analysis <br/>* Content Management <br/>* Infrastructure Architecture <br/>* Solution Engineering <br/>* Financial Planning <br/>* Process Improvement <br/>* Operations Management <br/>* Project/Program Management <br/>* Relationship Management <br/>* Outsourcing <br/>* Team Building <br/> <br/>TECHNICAL SKILLS: <br/> <br/>Operating Systems: <br/>Windows, AIX, HPUX, Solaris, Linux (Red Hat, Ubuntu, CentOS, SUSE), Mac OS, VMWare. <br/> <br/>Web Servers:   <br/>Apache Web Server, Microsoft Internet Information Server (IIS), IBM HTTPServer. <br/> <br/>Application Servers / Middleware:   <br/>IBM WebSphere: Application Server, Portal Server, MQ; Apache Tomcat, JBoss: Application Server, Portal; Oracle/BEA Weblogic Application Server, Open Text Web Experience Management, LiveLink; Adobe LiveCycle; Autonomy IDOL; Google Search Appliance; SDL Tridion; Drupal, CA/Netegrity SiteMinder, IBM FileNet Content Manager, Microsoft SharePoint. <br/> <br/>Database Servers:   <br/>IBM DB2, Oracle, Microsoft SQL, MySQL, MongoDB. <br/> <br/>Languages / Scripting: <br/>Java, C, C++, JSP, Servlets, JDBC, EJB, JNDI, Web Services, HTML, XML, XSLT, XHTML, UNIX shell, Perl. <br/> <br/>Networking / Storage / Security:   <br/>TCP/IP, DNS, DHCP, HTTP(S), POP3, NAT, SMTP, POP3, IMAP, LDAP, NAS, SAN, SRDF, NFS, GPFS, HFS, RSYNC, SSL, PGP, Firewalls, Local &amp; Global load balancers (Cisco PIX, ACE, Arrowpoint, Citrix Netscaler, SonicWALL). <br/> <br/>Applications:   <br/>Microsoft Word, Excel, Project, PowerPoint, Visio; CA Clarity PPM. <br/> <br/>Methodologies / Concepts / Frameworks: <br/>SOA, Single Sign-On, .NET, Multi-tier Architecture, Spring MVC, ETL, PMBOK, BABOK, ITIL, TOGAF, Agile/Scrum, Kaizen <br/> <br/>Big Data: <br/>Hadoop, Hive, HBase, MapReduce</p>",
	"awards" : [ ],
	"certifications" : [
		{
			"certification" : "ITIL v3 Foundations",
			"certification_description" : "",
			"start_finish_dates" : ""
		},
		{
			"certification" : "CCNA",
			"certification_description" : "",
			"start_finish_dates" : ""
		}
	],
	"education" : [
		{
			"degree" : "MBA",
			"start_finish_dates" : "2016",
			"university" : "Babson College",
			"university_location" : "Wellesley, MA"
		},
		{
			"degree" : "BS in Computer Science",
			"start_finish_dates" : "September 2004",
			"university" : "Boston University",
			"university_location" : "Boston, MA"
		}
	],
	"groups" : [ ],
	"location" : "New York, NY",
	"name" : "Uche Onyebuchi",
	"skills" : [ ],
	"work_experience" : [
		{
			"company" : "MetLife Inc",
			"company_location" : "New York, NY",
			"job_title" : "Director, Enterprise Content Management",
			"responsibilities" : "Led a globally distributed team of 32 employees and consultants to deliver Enterprise Content Management (ECM) solutions. Managed all ECM infrastructure and led architecture, design, implementation and support of all MetLife businesses leveraging ECM solutions. Built a 24x7x365 support and maintenance operation. ",
			"start_finish_dates" : "October 2010 to September 2015"
		},
		{
			"company" : "MetLife Inc",
			"company_location" : "New York, NY",
			"job_title" : "Manager, Web Content Management",
			"responsibilities" : "Led a high-performing cross-functional team of 10+ engineers/consultants to deliver highly scalable and fault tolerant Web Content Management (WCM) and Enterprise Search solutions.  Supported the content management and search infrastructure of the flagship www.metlife.com, my.metlife.com intranet and many other critical business applications. ",
			"start_finish_dates" : "May 2008 to October 2010"
		},
		{
			"company" : "MetLife Inc",
			"company_location" : "New York, NY",
			"job_title" : "Manager, Web Infrastructure Engineering",
			"responsibilities" : "Led teams in delivering application infrastructure solutions across multiple MetLife lines of businesses for in-house built and vendor packaged J2EE and .NET applications. ",
			"start_finish_dates" : "June 2005 to May 2008"
		},
		{
			"company" : "MetLife Inc",
			"company_location" : "Boston, MA",
			"job_title" : "Senior Systems Engineer",
			"responsibilities" : "Principal architect and lead engineer responsible for technical strategy, infrastructure architecture, project management, consulting services and support for over 200 applications spanning across multiple MetLife lines of businesses. ",
			"start_finish_dates" : "July 2002 to June 2005"
		},
		{
			"company" : "New England Financial",
			"company_location" : "Boston, MA",
			"job_title" : "Senior Applications Architect",
			"responsibilities" : "Provided lead application architecture, development and support services for critical business applications, including the MetLife and New England Financial corporate sites, corporate intranets, sales and eService portals.",
			"start_finish_dates" : "February 2000 to July 2002"
		},
		{
			"company" : "Ceridian Corporation",
			"company_location" : "Boston, MA",
			"job_title" : "Senior Solutions Architect",
			"responsibilities" : "Provided lead web applications architecture and technical strategy for all e-commerce IT initiatives.  Team lead for three solutions architects. ",
			"start_finish_dates" : "June 1995 to February 2000"
		}
	]
}
{
	"_id" : ObjectId("56b6767e5d134274640c4bf6"),
	"additionalInfo" : "",
	"additionalInfo_html" : null,
	"awards" : [ ],
	"certifications" : [
		{
			"certification" : "Project Management Professional (PMP)",
			"certification_description" : "",
			"start_finish_dates" : "February 2016"
		}
	],
	"education" : [
		{
			"degree" : "Master of Science in Medical Informatics",
			"start_finish_dates" : "",
			"university" : "STATE UNIVERSITY OF NEW YORK",
			"university_location" : "New York, NY"
		},
		{
			"degree" : "Certificate in Analysis and Design of Information Systems",
			"start_finish_dates" : "",
			"university" : "COLUMBIA UNIVERSITY",
			"university_location" : "New York, NY"
		},
		{
			"degree" : "MBA",
			"start_finish_dates" : "",
			"university" : "ATENEO GRADUATE SCHOOL OF BUSINESS",
			"university_location" : "Manila"
		},
		{
			"degree" : "B.S. in Business Management",
			"start_finish_dates" : "",
			"university" : "LA SALLE UNIVERSITY",
			"university_location" : "Manila"
		}
	],
	"groups" : [ ],
	"location" : "New York, NY",
	"name" : "Samuel Espino",
	"skills" : [ ],
	"work_experience" : [
		{
			"company" : "Fairway Market",
			"company_location" : "Market, NY",
			"job_title" : "Consultant Business Analyst",
			"responsibilities" : "Define and document application requirements for the e-commerce website and a software enabling picking, packing, payment, pickup and delivery processes using geospatial technology. ",
			"start_finish_dates" : "August 2015 to November 2015"
		},
		{
			"company" : "Zipari",
			"company_location" : "New York, NY",
			"job_title" : "Consultant Business Analyst",
			"responsibilities" : "Perform business analysis tasks for cloud-based technology applications based on CRM software that enable health insurance companies to provide a private exchange shopping experience by allowing consumers to purchase and enroll in health, dental, and vision insurance plans directly on the insurer's website.  Collaborate with government agencies (Centers for Medicare and Medicaid) in developing these applications to make it easy for the consumers to understand, buy and use insurance plans. ",
			"start_finish_dates" : "March 2015 to June 2015"
		},
		{
			"company" : "FJA",
			"company_location" : "New York, NY",
			"job_title" : "Business Analyst",
			"responsibilities" : "Gather and document requirements for front end applications at a software company that uses product engineering and model-driven development for healthcare insurance applications. ",
			"start_finish_dates" : "April 2013 to January 2015"
		},
		{
			"company" : "JEWISH HOME LIFECARE",
			"company_location" : "New York, NY",
			"job_title" : "EMR Business Analyst/Project Coordinator",
			"responsibilities" : "Conducted project management, workflow analysis, data analysis and gap analysis of legacy and EHR/EMR (Electronic Health Record) system; responsibilities included systems security, test plan writing and testing and project communication. These systems involved Clinical, Scheduling, Billing, and reporting systems in three different hospital sites in Manhattan, the Bronx and Westchester.  Project Lead for \"Touchscreen\", a real-time documentation system using Touchpads/Computer tablets used by the clinical team (nurses, nurse aides, doctors, social workers and dietitians) to document Care Plan. ",
			"start_finish_dates" : "September 2010 to January 2013"
		},
		{
			"company" : "INFORMATION TECHNOLOGY SOLUTIONS, INC",
			"company_location" : "Jersey City, NJ",
			"job_title" : "Consultant Business Analyst",
			"responsibilities" : "Clients included: ",
			"start_finish_dates" : "April 2008 to December 2009"
		},
		{
			"company" : "CAPITAL ONE/NORTH FORK BANK",
			"company_location" : "",
			"job_title" : "Consultant Business Analyst",
			"responsibilities" : "Worked on the UAT (user acceptance testing) phase of the conversion and integration of two Fortune 500 banks. ",
			"start_finish_dates" : "November 2007 to March 2008"
		},
		{
			"company" : "CITIBANK",
			"company_location" : "Long Island City, NY",
			"job_title" : "Consultant Business Analyst",
			"responsibilities" : "Conducted data analysis and business analysis for a case management software used by the world's largest bank for metrics, customer relationship management and compliance reporting to government regulatory agencies. ",
			"start_finish_dates" : "July 2004 to April 2007"
		},
		{
			"company" : "INFORMATION TECHNOLOGY SOLUTIONS, INC",
			"company_location" : "Jersey City, NJ",
			"job_title" : "Consultant Business Analyst",
			"responsibilities" : "Conceptualized, planned and delivered more than 50 training workshops on RDBMS (Relational Database Management Systems, Access and Excel) at the New York Public Library enabling them to increase their productivity and tracking metrics more effectively.",
			"start_finish_dates" : "August 2001 to June 2004"
		},
		{
			"company" : "FDG CONSULTING FIRM, INC",
			"company_location" : "Morris Plains, NJ",
			"job_title" : "Consultant Business Analyst",
			"responsibilities" : "Worked on projects for Internet companies performing requirements gathering; UAT and quality assurance testing; documenting test results; obtaining user signoffs and managing performance metrics. ",
			"start_finish_dates" : "April 2000 to July 2001"
		},
		{
			"company" : "CITIBANK",
			"company_location" : "Long Island City, NY",
			"job_title" : "Consultant Business Analyst",
			"responsibilities" : "Managed over $250 K multi-currency accounts from Citibank entities in 50 countries used to ensure ATM access for customers.  Performed user requirements gathering; user acceptance testing; funds reconciliation; interfaced with distributed project teams and Citibank businesses worldwide; documentation and management reporting. ",
			"start_finish_dates" : "May 1995 to March 2000"
		}
	]
}
{
	"_id" : ObjectId("56b6767f5d134274640c7c8a"),
	"additionalInfo" : "Expertise: • Software Test Engineering • Test Case Design • Automated Script Design • Automation Framework Design • Behavior Driven Development (BDD) • Attention to Detail • Excellent Communication Skills • Software Development Life Cycle (SDLC) • Software Test Life Cycle (STLC) • Agile Test Methodology • Release Management • API Testing • Keyword Driven Testing • Cross Browser Testing • Project Management • Process Improvement • Change Management • Quality Standards • Standard Operating Procedures • Exceptional Analytic • Problem-Solving Strength: Several years of testing experience with special emphasis on: • Excellent understanding of Software Development Life Cycle with Waterfall, Iterative and Agile. • Strong experience with Behavior Driven Testing (BDT) for Behavior Driven Development (BDD) with Cucumber JVM to implement Test Driven Development (TDD). • Thoroughly experience with Behavior Driven Testing framework implementation with Selenium WebDriver • Strong experience Page Object Model framework with Selenium WebDriver • Solid experience with Keyword Driven and Data Driven framework implementation. • Strong experience in cross browser, cross platform web testing with Selenium Web Driver. • Strong experience with SOA architecture that include Restful Web Service Testing. • Excellent writing, verbal and interpersonal skill set with a self-starting attitude, team player, and flexible. • A fast learner and high degree of creativity and initiative is expected. • Good at prioritizing along critical path and meeting project milestones and deliverable dates. • Strong experience with Agile test methodology and Agile Development process. • Quality Testing including Effective Test Case Design, Test Execution and Reporting. • Experience in analyzing the requirements, User Stories and Use Cases to develop test cases. • Strong experience in Black Box and Gray Box testing. • Strong analytical and problem solving skills. • Expertise in QA Methodologies with various testing concept such as Acceptance testing, System Testing, Functional Testing, Integration Testing, Regression Testing, Smoke Testing, End-to-End Testing, Business Process Testing and more. • Good experience with HP Quick Test Professional. • Strong experience with descriptive programming in QTP with VB script. • Strong experience in development of core QA framework function library for various Web and Client-Server application. • Extensive work experience using Change Control and Bug Tracking Tools like Quality Center, JIRA. Technical Skills: * Testing Tools: Selenium WebDriver, JVM, Cucumber, UFT / QTP * Test Management: ALM (Quality Center) * Defect Management: JIRA, HP Quality Center * Requirement Management: HP Quality Center * Programming Languages: Java, VB Script, HTML * Development IDE: Eclipse, NetBeans * Database/Database tools: SQL Server, Oracle, SQL Workbench, SQL Pro and  MySQL * Application: Microsoft Office Application, VMware, Toad * Operating Systems: Windows, Mac OS X, Linux, Unix",
	"additionalInfo_html" : "<p>Expertise: <br/>• Software Test Engineering <br/>• Test Case Design <br/>• Automated Script Design <br/>• Automation Framework Design <br/>• Behavior Driven Development (BDD) <br/>• Attention to Detail <br/>• Excellent Communication Skills <br/> <br/>• Software Development Life Cycle (SDLC) <br/>• Software Test Life Cycle (STLC) <br/>• Agile Test Methodology <br/>• Release Management <br/>• API Testing <br/>• Keyword Driven Testing <br/>• Cross Browser Testing <br/> <br/>• Project Management <br/>• Process Improvement <br/>• Change Management <br/>• Quality Standards <br/>• Standard Operating Procedures <br/>• Exceptional Analytic <br/>• Problem-Solving <br/> <br/>Strength: <br/> <br/>Several years of testing experience with special emphasis on: <br/>• Excellent understanding of Software Development Life Cycle with Waterfall, Iterative and Agile. <br/>• Strong experience with Behavior Driven Testing (BDT) for Behavior Driven Development (BDD) with Cucumber JVM to implement Test Driven Development (TDD). <br/>• Thoroughly experience with Behavior Driven Testing framework implementation with Selenium WebDriver <br/>• Strong experience Page Object Model framework with Selenium WebDriver <br/>• Solid experience with Keyword Driven and Data Driven framework implementation. <br/>• Strong experience in cross browser, cross platform web testing with Selenium Web Driver. <br/>• Strong experience with SOA architecture that include Restful Web Service Testing. <br/>• Excellent writing, verbal and interpersonal skill set with a self-starting attitude, team player, and flexible. <br/>• A fast learner and high degree of creativity and initiative is expected. <br/>• Good at prioritizing along critical path and meeting project milestones and deliverable dates. <br/>• Strong experience with Agile test methodology and Agile Development process. <br/>• Quality Testing including Effective Test Case Design, Test Execution and Reporting. <br/>• Experience in analyzing the requirements, User Stories and Use Cases to develop test cases. <br/>• Strong experience in Black Box and Gray Box testing. <br/>• Strong analytical and problem solving skills. <br/>• Expertise in QA Methodologies with various testing concept such as Acceptance testing, System Testing, Functional Testing, Integration Testing, Regression Testing, Smoke Testing, End-to-End Testing, Business Process Testing and more. <br/>• Good experience with HP Quick Test Professional. <br/>• Strong experience with descriptive programming in QTP with VB script. <br/>• Strong experience in development of core QA framework function library for various Web and Client-Server application. <br/>• Extensive work experience using Change Control and Bug Tracking Tools like Quality Center, JIRA. <br/> <br/>Technical Skills: <br/> <br/>* Testing Tools: Selenium WebDriver, JVM, Cucumber, UFT / QTP <br/>* Test Management: ALM (Quality Center) <br/>* Defect Management: JIRA, HP Quality Center <br/>* Requirement Management: HP Quality Center <br/>* Programming Languages: Java, VB Script, HTML <br/>* Development IDE: Eclipse, NetBeans <br/>* Database/Database tools: SQL Server, Oracle, SQL Workbench, SQL Pro and  MySQL <br/>* Application: Microsoft Office Application, VMware, Toad <br/> <br/>* Operating Systems: Windows, Mac OS X, Linux, Unix</p>",
	"awards" : [ ],
	"certifications" : [ ],
	"education" : [
		{
			"degree" : "MBA",
			"start_finish_dates" : "",
			"university" : "",
			"university_location" : ""
		}
	],
	"groups" : [ ],
	"location" : "New York, NY",
	"name" : "Muhammad Molla",
	"skills" : [
		"Software Test Engineering, QA, Test Case Design, Automated Script Design, Automation Framework"
	],
	"work_experience" : [
		{
			"company" : "LordAndTaylor.com",
			"company_location" : "",
			"job_title" : "QA Automation and Manual Test Engineer",
			"responsibilities" : "Founded in 1826, Lord & Taylor has been offering designer fashions to Manhattan's most distinguished and discerning shoppers for nearly two centuries. Since its beginnings, Lord & Taylor has proved a true retail visionary: it was the first department store to move to Fifth Avenue, the first to develop the concept of personal shopping, and it was the first department store to boast the first woman president, Dorothy Shaver. ",
			"start_finish_dates" : "May 2012 to Present"
		},
		{
			"company" : "inMarkit.Com",
			"company_location" : "",
			"job_title" : "Automation and Manual Test Engineer",
			"responsibilities" : "inMarkit is inspired by the idea of a truly connected shopping experience. With a growing number of ways to share our favorites items with friends and family while shopping, we can easily loose track of the products that are important to us when we actually need to find them. inMarkit created a simple and easy to use shopping tool that connects us with our friends and organizes all of our social sharing in one place. With inMarkit we can share our favorites products with friends, save the items we love and see all of our friends' shares and product recommendations directly from the retail site, without having to interrupt our shopping experience. ",
			"start_finish_dates" : "January 2011 to April 2012"
		},
		{
			"company" : "Vonage.com",
			"company_location" : "",
			"job_title" : "Automation and Manual Test Engineer",
			"responsibilities" : "Vonage is a publicly held commercial voice over IP (VoIP) network and SIP Company that provides telephone service via a broadband connection. The company first offered subscription service in the United States, Canada and the United Kingdom. Vonage has approximately 2.4 million subscriber lines, in conjunction with their services provided through mobile applications.. ",
			"start_finish_dates" : "October 2009 to December 2010"
		}
	]
}
{
	"_id" : ObjectId("56b676845d134274640cc9cd"),
	"additionalInfo" : "",
	"additionalInfo_html" : null,
	"awards" : [ ],
	"certifications" : [ ],
	"education" : [
		{
			"degree" : "MBA",
			"start_finish_dates" : "May 2012 to May 2014",
			"university" : "Tippie School of Management, The University of IOWA",
			"university_location" : null
		},
		{
			"degree" : "Master's in Electrical & Computer Engineering",
			"start_finish_dates" : "2006 to 2007",
			"university" : "Purdue School of Engineering and Technology, Purdue University",
			"university_location" : "Indianapolis, IN"
		},
		{
			"degree" : "M.S. in Circuit and System. Dept. of Electronic and Information Engineering",
			"start_finish_dates" : "September 2001 to June 2004",
			"university" : "Huazhong University of Science and Technology",
			"university_location" : "Wuhan, CN"
		},
		{
			"degree" : "B.S. in Power System and Automation. Dept. of Electrical Engineering",
			"start_finish_dates" : "September 1994 to July 1998",
			"university" : "School of Electric Power, South China University of Technology",
			"university_location" : "Guangzhou, CN"
		},
		{
			"degree" : "Certificate in Electrical Engineering and Automation",
			"start_finish_dates" : "September 1990 to July 1993",
			"university" : "North China Institute of Aerospace",
			"university_location" : "Langfang, CN"
		}
	],
	"groups" : [ ],
	"location" : "New York, NY",
	"name" : "Gansheng Ou",
	"skills" : [ ],
	"work_experience" : [
		{
			"company" : "Caterpillar Inc",
			"company_location" : "Peoria, IL",
			"job_title" : "Senior Project Engineer – Software, Embedded Software Development - Lead",
			"responsibilities" : "Responsibilities ",
			"start_finish_dates" : "March 2015 to October 2015"
		},
		{
			"company" : "Crown Equipment Corporation",
			"company_location" : "New Bremen, OH",
			"job_title" : "Electrical Engineer III - Software",
			"responsibilities" : "Responsibilities ",
			"start_finish_dates" : "March 2015 to March 2015"
		},
		{
			"company" : "Navistar",
			"company_location" : "Lisle, IL",
			"job_title" : "systems electrical engineer- Prod Dev Engineer Team Lead",
			"responsibilities" : "Gather requirements or change request from the customers; generate and coordinate the system level requirements, and design schematic with Mentor Capital tool for an electrical subsystem and document those requirements in a defined structure which include hardware, software, component, electronics, diagnostics and serviceability in automotive industry.  ",
			"start_finish_dates" : "September 2014 to December 2014"
		},
		{
			"company" : "GE Transportation",
			"company_location" : "Erie, PA",
			"job_title" : "Lead Engine Test Engineer",
			"responsibilities" : "Manage the locomotive engine test cell day to day activities, provide work assignments to the hourly work force, and interface with the engineering team. ",
			"start_finish_dates" : "June 2014 to July 2014"
		},
		{
			"company" : "John Deere Power System (PEC)",
			"company_location" : "Waterloo, IA",
			"job_title" : "Engine Control Application Engineer",
			"responsibilities" : "•    Manage software projects based on Agile software development processes for John Deere’s Skidder/Wheeled Feller Buncher (WFB) and HEX OA Excavator, including T2, T3, FT4 engine emission regulation; ",
			"start_finish_dates" : "December 2011 to January 2014"
		},
		{
			"company" : "John Deere",
			"company_location" : "Dubuque, IA",
			"job_title" : "Embedded System Software Engineer",
			"responsibilities" : "Responsibilities: ",
			"start_finish_dates" : "January 2009 to November 2011"
		},
		{
			"company" : "Fifth Third Bank",
			"company_location" : "Indianapolis, IN",
			"job_title" : "Data Analyzer",
			"responsibilities" : "Contract with Pomeroy IT Solutions, Inc.) ",
			"start_finish_dates" : "September 2008 to October 2008"
		},
		{
			"company" : "Advanced Test Concepts, Inc",
			"company_location" : "Indianapolis, IN",
			"job_title" : "Software and System Engineer",
			"responsibilities" : "Support, modify and upgrade ATC's main products: IGLS/IGFS, Leak-Tek, Gas-Cal, Adaptive Test programs, and other RD Standard Software, in their current software platform - including 16bit Motorola HC12 Microprocessor (C/C++), MS Visual Basic and LabView. ",
			"start_finish_dates" : "January 2008 to July 2008"
		},
		{
			"company" : "Dept. of Electrical & Computer Engineering",
			"company_location" : "Indianapolis, IN",
			"job_title" : "Graduate Research Assistant",
			"responsibilities" : "Purdue School of Engineering and Technology, IUPUI, Indianapolis, IN ",
			"start_finish_dates" : "January 2006 to October 2007"
		},
		{
			"company" : "China Electronic Product Reliability and Environmental Testing Research Institute",
			"company_location" : "Guangzhou, CN",
			"job_title" : "Quality Inspection & Testing Center, Headquarter of CEPREI",
			"responsibilities" : "China Electronic Product Reliability and Environmental Testing Research Institute, also named  The Fifth Research Institute of the Ministry of Information Industry). Guangzhou, Guangdong, China ",
			"start_finish_dates" : "July 2004 to June 2005"
		},
		{
			"company" : "Huazhong University of Science and Technology",
			"company_location" : "Wuhan, CN",
			"job_title" : "Graduate Student and Graduate Research Assistant",
			"responsibilities" : "Wuhan, Hubei, China ",
			"start_finish_dates" : "September 2001 to June 2004"
		},
		{
			"company" : "Facilities",
			"company_location" : "Guangzhou, CN",
			"job_title" : "Technician, Assistant Engineer, Engineer & Manager",
			"responsibilities" : "Dept. of Construction & Maintenance of Facilities, Guangzhou Wanglaoji Pharmaceutical Company Limited (Affiliate of Guangzhou Pharmaceutical Holdings Limited.) Guangzhou, Guangdong, China ",
			"start_finish_dates" : "July 1993 to August 2001"
		}
	]
}
{
	"_id" : ObjectId("56b676865d134274640d14ed"),
	"additionalInfo" : "Trustee, New Jersey Foundation for the Blind",
	"additionalInfo_html" : "<p>Trustee, New Jersey Foundation for the Blind</p>",
	"awards" : [ ],
	"certifications" : [ ],
	"education" : [
		{
			"degree" : "MBA",
			"start_finish_dates" : "",
			"university" : "Northeastern University",
			"university_location" : "Boston, MA"
		},
		{
			"degree" : "BS in Business",
			"start_finish_dates" : "",
			"university" : "State University of New York at Albany",
			"university_location" : "Albany, NY"
		},
		{
			"degree" : "",
			"start_finish_dates" : "",
			"university" : "Harvard School of Negotiation",
			"university_location" : null
		},
		{
			"degree" : "Finance and Accounting for Non-Financial Managers",
			"start_finish_dates" : "",
			"university" : "University of Pennsylvania, Wharton School",
			"university_location" : "Wharton, PA"
		},
		{
			"degree" : "Strategy and Introduction to Digital Marketing",
			"start_finish_dates" : "",
			"university" : "NYU School of Continuing Education",
			"university_location" : null
		}
	],
	"groups" : [ ],
	"location" : "New York, NY",
	"name" : "Robin Pearl",
	"skills" : [ ],
	"work_experience" : [
		{
			"company" : "Quest Diagnostics",
			"company_location" : "Madison, NJ",
			"job_title" : "Director of Marketing Services",
			"responsibilities" : "Responsibilities included creating, developing and launching products, which differentiated Quest Diagnostics from the competition; leading marketing operations for the organization and the integrated communications function for the physician line of business. ",
			"start_finish_dates" : "2008 to 2013"
		},
		{
			"company" : "Quest Diagnostics",
			"company_location" : "Madison, NJ",
			"job_title" : "Director of Marketing, Integrated Communications",
			"responsibilities" : "Responsibilities ",
			"start_finish_dates" : "2004 to 2008"
		},
		{
			"company" : "Quest Diagnostics",
			"company_location" : "Madison, NJ",
			"job_title" : "Director of Marketing, Women's Health",
			"responsibilities" : "Directed all marketing activities associated with the growth and development of the Obstetrics/Gynecology segment. ",
			"start_finish_dates" : "2001 to 2004"
		},
		{
			"company" : "Quest Diagnostics",
			"company_location" : "Madison, NJ",
			"job_title" : "Director of Marketing, Employer Solutions",
			"responsibilities" : "Developed marketing plans to drive testing volume with Employers. Key accountabilities included developing and launching new products, market research, and managing the day-to-day activities of the toxicology business. ",
			"start_finish_dates" : "1999 to 2001"
		},
		{
			"company" : "Quest Diagnostics",
			"company_location" : "",
			"job_title" : "Director of Marketing, Special Projects",
			"responsibilities" : "Provided thought leadership on a range of projects including DTC and American Medical Association initiatives. ",
			"start_finish_dates" : "1997 to 1998"
		},
		{
			"company" : "CPC International, Inc.",
			"company_location" : "Bayshore, NC",
			"job_title" : "Senior Marketing Manager",
			"responsibilities" : "Directed marketing activities for trade and consumer promotions, managed advertising agency relationships, conducted market research and R&D for Entenmann's fine baked goods trademark. ",
			"start_finish_dates" : "1997 to 1997"
		},
		{
			"company" : "Dr Pepper/Cadbury Beverages Inc",
			"company_location" : "Stamford, CT",
			"job_title" : "Regional Marketing Manager, Senior Product Manager, Root Beer Category; Brand Manager",
			"responsibilities" : "A&W Franchise, Vernors & Country Time Lemonade; Market Planning Manager/Market Planning Analyst ",
			"start_finish_dates" : "1983 to 1996"
		}
	]
}
{
	"_id" : ObjectId("56b676865d134274640d15d9"),
	"additionalInfo" : "Technical skills: Microsoft Word, Excel, Project, Visio, PowerPoint, Word, Outlook, Lotus Notes Specialized Skills: Project Management, Quality Assurance, Quality Control, Process Behavioral Analysis, Defect Prevention, Value Stream Maps (VSMs)",
	"additionalInfo_html" : "<p>Technical skills: Microsoft Word, Excel, Project, Visio, PowerPoint, Word, Outlook, Lotus Notes <br/>Specialized Skills: Project Management, Quality Assurance, Quality Control, Process Behavioral Analysis, Defect Prevention, Value Stream Maps (VSMs)</p>",
	"awards" : [
		{
			"award" : "IMPAC Awards - FAU Certificate of Academic Awards",
			"award_description" : "",
			"start_finish_dates" : "March 1995"
		}
	],
	"certifications" : [
		{
			"certification" : "Lean Six Sigma Yellow Belt",
			"certification_description" : "",
			"start_finish_dates" : "August 2009 to Present"
		},
		{
			"certification" : "ITIL Foundation",
			"certification_description" : "",
			"start_finish_dates" : "September 2015 to Present"
		},
		{
			"certification" : "Project Management Professional - PMP®,",
			"certification_description" : "",
			"start_finish_dates" : "October 2015 to October 2018"
		}
	],
	"education" : [
		{
			"degree" : "MBA",
			"start_finish_dates" : "",
			"university" : "Kaplan University",
			"university_location" : "Chicago, IL"
		},
		{
			"degree" : "BBA",
			"start_finish_dates" : "",
			"university" : "FLA Atlantic University",
			"university_location" : "Boca Raton, FL"
		}
	],
	"groups" : [
		{
			"group" : "Project Management Institute",
			"group_description" : "",
			"start_finish_dates" : "January 2014 to Present"
		},
		{
			"group" : "National Association of Professional Women",
			"group_description" : "",
			"start_finish_dates" : "September 2015 to Present"
		},
		{
			"group" : "Phi Theta Kappa Honor Society",
			"group_description" : "",
			"start_finish_dates" : "December 1991 to Present"
		}
	],
	"location" : "New York, NY",
	"name" : "Sharon Camille Hunter MBA, PMP®, ITIL®",
	"skills" : [
		"Project/team leadership (10+ years)"
	],
	"work_experience" : [
		{
			"company" : "IBM",
			"company_location" : "",
			"job_title" : "Sr. Program/Project Manager",
			"responsibilities" : "• Project Management - Managed 26 projects & project managers while maintaining delivery excellence; Met all project management Fundamentals: scope management, schedule management, and financial management requirements. ",
			"start_finish_dates" : "2004 to 2015"
		},
		{
			"company" : "IBM",
			"company_location" : "",
			"job_title" : "Service Delivery Manager",
			"responsibilities" : "Delivery/Project Mgmt: ",
			"start_finish_dates" : "2013 to 2014"
		},
		{
			"company" : "IBM",
			"company_location" : "",
			"job_title" : "Project Manager/Service Portfolio Manager - Oversaw Projects & Service Delivery Accounts",
			"responsibilities" : "First Line Manager - Managed deskside support for internal IBM & for IBM clients        […] ",
			"start_finish_dates" : "2008 to 2013"
		}
	]
}
{
	"_id" : ObjectId("56b676865d134274640d219f"),
	"additionalInfo" : "",
	"additionalInfo_html" : null,
	"awards" : [ ],
	"certifications" : [ ],
	"education" : [
		{
			"degree" : "MBA",
			"start_finish_dates" : "2008 to 2010",
			"university" : "COLUMBIA BUSINESS SCHOOL",
			"university_location" : "New York, NY"
		},
		{
			"degree" : "JD in Law",
			"start_finish_dates" : "2002 to 2005",
			"university" : "Notre Dame Law School",
			"university_location" : "Notre Dame, IN"
		},
		{
			"degree" : "BA in Economics",
			"start_finish_dates" : "1998 to 2002",
			"university" : "University of Notre Dame",
			"university_location" : "Notre Dame, IN"
		}
	],
	"groups" : [ ],
	"location" : "New York, NY",
	"name" : "John Palma",
	"skills" : [ ],
	"work_experience" : [
		{
			"company" : "Natixis",
			"company_location" : "New York, NY",
			"job_title" : "Vice President - Leverage Finance Credit Analyst (Investment Banking)",
			"responsibilities" : "Responsibilities ",
			"start_finish_dates" : "July 2013 to Present"
		},
		{
			"company" : "CREDIT SUISSE SECURITIES",
			"company_location" : "New York, NY",
			"job_title" : "Associate - Investment Banking Department",
			"responsibilities" : "Extensive experience participating in and evaluating high yield and leveraged lending transactions, and advising sellers and acquirers in leveraged buyouts and other acquisitions ",
			"start_finish_dates" : "July 2010 to June 2012"
		},
		{
			"company" : "WESTLB AG, NEW YORK BRANCH",
			"company_location" : "New York, NY",
			"job_title" : "Intern - Energy Loan Originations Group",
			"responsibilities" : "Considered clients' available sources of debt financing from traditional lenders, private placement note holders and government agencies and pitched potential transactions ",
			"start_finish_dates" : "June 2009 to August 2009"
		},
		{
			"company" : "Starwood Capital",
			"company_location" : "Greenwich, CT",
			"job_title" : "Private Equity Intern",
			"responsibilities" : "Responsibilities ",
			"start_finish_dates" : "May 2009 to July 2009"
		},
		{
			"company" : "PAUL, HASTINGS, JANOFSKY & WALKER LLP",
			"company_location" : "New York, NY",
			"job_title" : "Associate - Project Finance, Lending, M&A",
			"responsibilities" : "Extensive experience representing companies making debt and equity investments in energy, infrastructure and other projects ",
			"start_finish_dates" : "September 2005 to August 2008"
		}
	]
}
{
	"_id" : ObjectId("56b676865d134274640d21d0"),
	"additionalInfo" : "Software Skills: Proficient in QuickBooks, Ultra soft, Peachtree, Factor, PowerPoint, Microsoft Excel, BIS",
	"additionalInfo_html" : "<p>Software Skills: Proficient in QuickBooks, Ultra soft, Peachtree, Factor, PowerPoint, Microsoft Excel, BIS</p>",
	"awards" : [ ],
	"certifications" : [ ],
	"education" : [
		{
			"degree" : "MBA",
			"start_finish_dates" : "July 2007",
			"university" : "CAMERON SCHOOL OF BUSINESS, UNIVERSITY OF ST. THOMAS",
			"university_location" : "Houston, TX"
		}
	],
	"groups" : [ ],
	"location" : "New York, NY",
	"name" : "Aisha Nazim",
	"skills" : [ ],
	"work_experience" : [
		{
			"company" : "MEDIAMORPH, INC",
			"company_location" : "",
			"job_title" : "Senior Accountant",
			"responsibilities" : "• Responsible for complete month end Close, preparing all Month End Work papers Bank Recs ",
			"start_finish_dates" : "November 2014 to Present"
		},
		{
			"company" : "CSS",
			"company_location" : "",
			"job_title" : "Temporary Project",
			"responsibilities" : "Responsible for the Audit of documents received for the allocation of Grants by Community Service Society",
			"start_finish_dates" : "August 2014 to November 2014"
		},
		{
			"company" : "OFFICE LINKS INC",
			"company_location" : "New York, NY",
			"job_title" : "Accounting Analyst",
			"responsibilities" : "• Did budget allocation for the six centers of Office Links ",
			"start_finish_dates" : "July 2013 to July 2014"
		},
		{
			"company" : "KING FUELS INC",
			"company_location" : "Houston, TX",
			"job_title" : "Financial Accountant",
			"responsibilities" : "• Reconciled monthly EFT gas drafts with bank statements ",
			"start_finish_dates" : "July 2010 to November 2012"
		},
		{
			"company" : "HR SHAIKH SEYAR, LLP",
			"company_location" : "Houston, TX",
			"job_title" : "Accountant/Client Relations",
			"responsibilities" : "• Utilized Quick books to Prepare monthly financials for medium sized clients ",
			"start_finish_dates" : "July 2008 to July 2010"
		},
		{
			"company" : "DELOITTE TAX",
			"company_location" : "Houston, TX",
			"job_title" : "Financial Services Group - (FSG) - Staff Accountant",
			"responsibilities" : "• Received training on CDO Suite software for recording transactions online and preparing financial statements. ",
			"start_finish_dates" : "August 2007 to June 2008"
		}
	]
}
{
	"_id" : ObjectId("56b6768e5d134274640d78da"),
	"additionalInfo" : "",
	"additionalInfo_html" : null,
	"awards" : [ ],
	"certifications" : [ ],
	"education" : [
		{
			"degree" : "MBA",
			"start_finish_dates" : "",
			"university" : "Embry-Riddle Aeronautical University ",
			"university_location" : null
		},
		{
			"degree" : "Master in Finance",
			"start_finish_dates" : "",
			"university" : "All Russian Financial University",
			"university_location" : null
		}
	],
	"groups" : [ ],
	"location" : "New York, NY",
	"name" : "Yana Zhebeleva",
	"skills" : [
		"Advanced Excel, People Soft, Quick Books, MS Office, SAP, Oracle, SRM (8 years)"
	],
	"work_experience" : [
		{
			"company" : "NYCT",
			"company_location" : "",
			"job_title" : "Financial Analyst",
			"responsibilities" : "",
			"start_finish_dates" : "2015 to Present"
		},
		{
			"company" : "Protax Services",
			"company_location" : "",
			"job_title" : "Assistant Controller",
			"responsibilities" : "",
			"start_finish_dates" : "2013 to 2015"
		},
		{
			"company" : "Estée Lauder Companies",
			"company_location" : "",
			"job_title" : "Financial Analyst",
			"responsibilities" : "",
			"start_finish_dates" : "2013 to 2013"
		},
		{
			"company" : "BDO",
			"company_location" : "",
			"job_title" : "Senior Accountant Consultant",
			"responsibilities" : "",
			"start_finish_dates" : "2002 to 2008"
		}
	]
}
{
	"_id" : ObjectId("56b6768f5d134274640d84a7"),
	"additionalInfo" : "",
	"additionalInfo_html" : null,
	"awards" : [ ],
	"certifications" : [
		{
			"certification" : "Financial Risk Manager (FRM)",
			"certification_description" : "",
			"start_finish_dates" : ""
		}
	],
	"education" : [
		{
			"degree" : "MS in Financial Engineering",
			"start_finish_dates" : "2013 to 2014",
			"university" : "Baruch College - City University of New York",
			"university_location" : "New York, NY"
		},
		{
			"degree" : "MBA",
			"start_finish_dates" : "2011 to 2013",
			"university" : "Peking University (BiMBA)",
			"university_location" : "北京市"
		},
		{
			"degree" : "MS in Global Finance",
			"start_finish_dates" : "2012 to 2012",
			"university" : "Fordham University",
			"university_location" : "New York, NY"
		},
		{
			"degree" : "BS in Applied Mathematics",
			"start_finish_dates" : "2004 to 2008",
			"university" : "Nankai University",
			"university_location" : "天津市"
		}
	],
	"groups" : [ ],
	"location" : "New York, NY",
	"name" : "Tianyu Li",
	"skills" : [
		"C++, Python, R, Matlab, Excel VBA"
	],
	"work_experience" : [
		{
			"company" : "Ernst & Young LLP",
			"company_location" : "New York, NY",
			"job_title" : "Financial Services Risk Management - Quantitative Advisory Services (Staff)",
			"responsibilities" : "Utilize quantitative modelling and IT skills to help institutions with risk management, compliance and optimization.",
			"start_finish_dates" : "February 2015 to Present"
		},
		{
			"company" : "RBC Capital Markets",
			"company_location" : "New York, NY",
			"job_title" : "Global Valuations (Valuation Analyst)",
			"responsibilities" : "Provided periodic independent pricing verification for commodities trading business",
			"start_finish_dates" : "September 2014 to December 2014"
		},
		{
			"company" : "PricewaterhouseCoopers LLP",
			"company_location" : "San Francisco, CA",
			"job_title" : "Transaction Service: Valuation – Financial Analytics & Derivatives (Intern)",
			"responsibilities" : "Delivered valuation services related to fixed income securities, swaps, exotic options, and other securities ",
			"start_finish_dates" : "June 2014 to August 2014"
		},
		{
			"company" : "Solventure NV",
			"company_location" : "Gent",
			"job_title" : "Forecasting and Demand Management (Intern)",
			"responsibilities" : "Analyzed relationships between corporate sales data and external economic indicators ",
			"start_finish_dates" : "August 2012 to September 2012"
		},
		{
			"company" : "Apple Inc.",
			"company_location" : "北京市",
			"job_title" : "Lifestyle Sales Channel/Sales Operation (Intern)",
			"responsibilities" : "Engaged in sales forecasting and data analysis for over 300 Apple Lifestyle stores in Greater China",
			"start_finish_dates" : "January 2012 to June 2012"
		},
		{
			"company" : "Sumitomo Mitsui Banking Corporation",
			"company_location" : "天津市",
			"job_title" : "Cash Management Service (Assistant Manager)",
			"responsibilities" : "Managed payment, collection, liquidity management and electronic banking service for corporate clients",
			"start_finish_dates" : "April 2008 to July 2011"
		}
	]
}
{
	"_id" : ObjectId("56b676915d134274640debe2"),
	"additionalInfo" : "• Computer Skills: Proficient in Microsoft Office programs including Word, PowerPoint, and Excel (V-Lookup and pivot tables) • Fluent in Japanese",
	"additionalInfo_html" : "<p>• Computer Skills: Proficient in Microsoft Office programs including Word, PowerPoint, and Excel (V-Lookup and pivot tables) <br/>• Fluent in Japanese</p>",
	"awards" : [ ],
	"certifications" : [ ],
	"education" : [
		{
			"degree" : "MBA",
			"start_finish_dates" : "2010 to 2012",
			"university" : "COLUMBIA BUSINESS SCHOOL",
			"university_location" : "New York, NY"
		},
		{
			"degree" : "BS in Fashion Merchandising Management",
			"start_finish_dates" : "February 2004 to December 2006",
			"university" : "FASHION INSTITUTE OF TECHNOLOGY",
			"university_location" : "New York, NY"
		}
	],
	"groups" : [ ],
	"location" : "New York, NY",
	"name" : "Maiko Shimazaki",
	"skills" : [ ],
	"work_experience" : [
		{
			"company" : "INTERMIX",
			"company_location" : "New York, NY",
			"job_title" : "Associate Planner",
			"responsibilities" : "Responsibilities ",
			"start_finish_dates" : "August 2014 to Present"
		},
		{
			"company" : "Scoop NYC",
			"company_location" : "New York, NY",
			"job_title" : "Associate Planner",
			"responsibilities" : "Responsibilities ",
			"start_finish_dates" : "March 2013 to July 2014"
		},
		{
			"company" : "BARCLAYS CAPITAL PLC",
			"company_location" : "Tokyo, Japan",
			"job_title" : "Equity Sales, Intern",
			"responsibilities" : "10 week rotational program culminating in a stock pitch presentation to the Equity Sales group",
			"start_finish_dates" : "June 2011 to August 2011"
		},
		{
			"company" : "BAROQUE JAPAN LIMITED",
			"company_location" : "Tokyo, Japan",
			"job_title" : "Executive Assistant & Account Executive",
			"responsibilities" : "Assistant to CEO (Apr 10 – Jul 10)             ",
			"start_finish_dates" : "October 2008 to August 2010"
		},
		{
			"company" : "ISSEY MIYAKE",
			"company_location" : "New York, NY",
			"job_title" : "Junior Account Executive",
			"responsibilities" : "Presented 6 collection lines to buyers in New York and Paris during market week ",
			"start_finish_dates" : "January 2007 to January 2008"
		}
	]
}
{
	"_id" : ObjectId("56b676925d134274640e0065"),
	"additionalInfo" : "Fluent in German and English and advanced language skills in French",
	"additionalInfo_html" : "<p>Fluent in German and English and advanced language skills in French</p>",
	"awards" : [ ],
	"certifications" : [ ],
	"education" : [
		{
			"degree" : "MBA",
			"start_finish_dates" : "",
			"university" : "Gutenberg School of Management and Economics",
			"university_location" : null
		}
	],
	"groups" : [ ],
	"location" : "New York, NY",
	"name" : "Marie Wolf",
	"skills" : [
		"Microsoft Excel (4 years)"
	],
	"work_experience" : [
		{
			"company" : "Global Design Concepts",
			"company_location" : "",
			"job_title" : "Business Analyst",
			"responsibilities" : "Creation of a POS database and automatization of all front-end POS related reports to be  ",
			"start_finish_dates" : ""
		},
		{
			"company" : "Scope Ratings",
			"company_location" : "",
			"job_title" : "Analyst",
			"responsibilities" : "Qualitative and quantitative analysis and evaluation of management companies in the field of  ",
			"start_finish_dates" : "September 2012 to August 2013"
		},
		{
			"company" : "H&M",
			"company_location" : "Berlin, NH",
			"job_title" : "Stock Room Manager",
			"responsibilities" : "Responsible for receiving and processing garments, setting priorities and goals, overseeing staff. ",
			"start_finish_dates" : "December 2011 to August 2012"
		}
	]
}
{
	"_id" : ObjectId("56b676965d134274640e88e4"),
	"additionalInfo" : "",
	"additionalInfo_html" : null,
	"awards" : [ ],
	"certifications" : [ ],
	"education" : [
		{
			"degree" : "MBA",
			"start_finish_dates" : "2007 to 2009",
			"university" : "COLUMBIA BUSINESS SCHOOL",
			"university_location" : "New York, NY"
		},
		{
			"degree" : "BA in Computer Science and Economics",
			"start_finish_dates" : "1997 to 2001",
			"university" : "DARTMOUTH COLLEGE",
			"university_location" : "Hanover, NH"
		}
	],
	"groups" : [ ],
	"location" : "New York, NY",
	"name" : "Andrew Chu",
	"skills" : [ ],
	"work_experience" : [
		{
			"company" : "TRADEWEB MARKETS, LLC",
			"company_location" : "",
			"job_title" : "Director",
			"responsibilities" : "Global product manager for Dealerweb Actives, firm's first offering in $200mm interdealer e-trading market for on-the-run Treasuries; this entrenched segment is traded 22 hours a ",
			"start_finish_dates" : "2013 to 2015"
		},
		{
			"company" : "TRADEWEB MARKETS, LLC",
			"company_location" : "",
			"job_title" : "VP to Director, U.S. Strategy & Business Development",
			"responsibilities" : "Senior strategic analyst, reporting ",
			"start_finish_dates" : "2011 to 2013"
		},
		{
			"company" : "TRADEWEB MARKETS, LLC",
			"company_location" : "",
			"job_title" : "VP, Market Manager",
			"responsibilities" : "Lead product analyst for Tradeweb Institutional ",
			"start_finish_dates" : "2010 to 2011"
		},
		{
			"company" : "FOUNDERS EQUITY",
			"company_location" : "New York, NY",
			"job_title" : "Associate, Private Equity",
			"responsibilities" : "Supported principals of lower middle market private equity firm focused on growth ",
			"start_finish_dates" : "2008 to 2010"
		},
		{
			"company" : "DARTMOUTH ASIAN PACIFIC AMERICAN ALUMNI ASSOCIATION",
			"company_location" : "New York, NY",
			"job_title" : "Co-Chairman of Board",
			"responsibilities" : "Head of 19-member board for national affiliated alumni organization. ",
			"start_finish_dates" : "2006 to 2009"
		},
		{
			"company" : "ACCENTURE",
			"company_location" : "New York, NY",
			"job_title" : "Manager, Corporate Development",
			"responsibilities" : "Team reported directly to Chief Strategy Officer; Sourced, evaluated and executed M&A transactions; Developed strategic fit assessments, valuations and synergy analyses of potential ",
			"start_finish_dates" : "2005 to 2007"
		},
		{
			"company" : "YAHOO! OVERTURE SERVICES",
			"company_location" : "Pasadena, CA",
			"job_title" : "Analyst, International Sales",
			"responsibilities" : "Promoted to International Sales analyst in three months for Yahoo!'s $2Bn search ",
			"start_finish_dates" : "2003 to 2005"
		},
		{
			"company" : "MORGAN STANLEY",
			"company_location" : "Los Angeles, CA",
			"job_title" : "Analyst, Mergers & Acquisitions Group",
			"responsibilities" : "Ranked in top 20% of class. ",
			"start_finish_dates" : "2001 to 2003"
		}
	]
}
{
	"_id" : ObjectId("56b676975d134274640e992c"),
	"additionalInfo" : "",
	"additionalInfo_html" : null,
	"awards" : [ ],
	"certifications" : [ ],
	"education" : [
		{
			"degree" : "MBA",
			"start_finish_dates" : "2005",
			"university" : "U. P. Technical University",
			"university_location" : null
		}
	],
	"groups" : [ ],
	"location" : "New York, NY",
	"name" : "NeelimA Chabra",
	"skills" : [ ],
	"work_experience" : [
		{
			"company" : "Clever Devices, NY",
			"company_location" : "",
			"job_title" : "Dot Net Developer",
			"responsibilities" : "Project: Smart Yard ",
			"start_finish_dates" : "January 2013 to Present"
		},
		{
			"company" : "Trans Union Health",
			"company_location" : "Piscataway, NJ",
			"job_title" : "Dot Net Developer",
			"responsibilities" : "Project: MedConnect ",
			"start_finish_dates" : "August 2012 to January 2013"
		},
		{
			"company" : "GE Capital Solutions",
			"company_location" : "Danbury, CT",
			"job_title" : "Dot Net Developer",
			"responsibilities" : "Project: ABS Suite ",
			"start_finish_dates" : "January 2011 to June 2012"
		},
		{
			"company" : "Bank of America",
			"company_location" : "Charlotte, NC",
			"job_title" : "Dot Net Developer",
			"responsibilities" : "Project: Rewards Processing System ",
			"start_finish_dates" : "February 2009 to November 2010"
		},
		{
			"company" : "Humana Inc",
			"company_location" : "Louisville, KY",
			"job_title" : "Dot Net Developer",
			"responsibilities" : "Project: Security Console ",
			"start_finish_dates" : "January 2008 to December 2008"
		},
		{
			"company" : "MagicPublishing",
			"company_location" : "",
			"job_title" : "Dot Net Developer",
			"responsibilities" : "Magic Publishing is an enterprise application for managing all aspects of publication industry ranging from booking of classified and display ads for newspapers managing complete format of the paper and billing to the client. It was divided in different subsystems, which communicate with each other to simulate complete workflow of the publication industry. ",
			"start_finish_dates" : "January 2007 to December 2007"
		},
		{
			"company" : "GE Money Bank",
			"company_location" : "Burbank, CA",
			"job_title" : "Dot Net Developer",
			"responsibilities" : "Project: Mortgage Expert ",
			"start_finish_dates" : "January 2006 to December 2006"
		},
		{
			"company" : "C.L. Gupta Exports Ltd",
			"company_location" : "",
			"job_title" : "Dot Net Developer",
			"responsibilities" : "Project: Export Expert ERP ",
			"start_finish_dates" : "January 2005 to December 2005"
		}
	]
}
{
	"_id" : ObjectId("56b676985d134274640eb1a2"),
	"additionalInfo" : "Skills Proficient in Opera & SMS operating systems, Microsoft Office, sales, strategic planning, Bilingual - fluent in Spanish.",
	"additionalInfo_html" : "<p>Skills <br/>Proficient in Opera &amp; SMS operating systems, Microsoft Office, sales, strategic <br/>planning, Bilingual - fluent in Spanish.</p>",
	"awards" : [ ],
	"certifications" : [ ],
	"education" : [
		{
			"degree" : "MBA",
			"start_finish_dates" : "2004",
			"university" : "Long Island University",
			"university_location" : null
		},
		{
			"degree" : "BS",
			"start_finish_dates" : "2002",
			"university" : "Long Island University",
			"university_location" : null
		}
	],
	"groups" : [ ],
	"location" : "New York, NY",
	"name" : "Daniel Barrios",
	"skills" : [ ],
	"work_experience" : [
		{
			"company" : "Lotte New York Palace",
			"company_location" : "",
			"job_title" : "Guest Service Agent",
			"responsibilities" : "909 Room Full-Service Luxury Hotel in Manhattan ",
			"start_finish_dates" : "February 2004 to October 2015"
		}
	]
}
{
	"_id" : ObjectId("56b676995d134274640edd26"),
	"additionalInfo" : "",
	"additionalInfo_html" : null,
	"awards" : [ ],
	"certifications" : [ ],
	"education" : [
		{
			"degree" : "B.B.A. in Accounting",
			"start_finish_dates" : "",
			"university" : "TEXAS SOUTHERN UNIVERSITY",
			"university_location" : "Houston, TX"
		},
		{
			"degree" : "MBA",
			"start_finish_dates" : "",
			"university" : "TEXAS SOUTHERN UNIVERSITY",
			"university_location" : "Houston, TX"
		}
	],
	"groups" : [ ],
	"location" : "New York, NY",
	"name" : "Marcus Freeman",
	"skills" : [
		"Financial Statements (10+ years)"
	],
	"work_experience" : [
		{
			"company" : "Marcus Freeman Consulting",
			"company_location" : "",
			"job_title" : "Finance Consultant",
			"responsibilities" : "Responsibilities ",
			"start_finish_dates" : "July 2015 to Present"
		},
		{
			"company" : "MORRIS HEIGHTS HEALTH CENTER, INC",
			"company_location" : "Bronx, NY",
			"job_title" : "V.P. Finance",
			"responsibilities" : "Responsible for financial management of large nonprofit health system and related for profit and nonprofit affiliated entities with a combined budget of approximately $65million dollars. ",
			"start_finish_dates" : "September 2011 to July 2015"
		},
		{
			"company" : "CALLEN-LORDE COMMUNITY HEALTHCARE CENTER, INC",
			"company_location" : "New York, NY",
			"job_title" : "Chief Financial Officer",
			"responsibilities" : "Represented the organization to outside lending institutions, rating, regulatory and funding agencies and other social service agencies. ",
			"start_finish_dates" : "November 2010 to April 2011"
		},
		{
			"company" : "GREATER PHILADELPHIA HEALTH ACTION, INC",
			"company_location" : "Philadelphia, PA",
			"job_title" : "Chief Financial Officer",
			"responsibilities" : "Assisted Executive Team in development of GPHA's long-term financial strategy, forecast and model scenarios.  Provided financial expertise, advice and analysis to the executive staff and board of directors through active participation as a member of the leadership team. ",
			"start_finish_dates" : "September 2005 to November 2010"
		},
		{
			"company" : "PRIVATE MINI STORAGE, INC",
			"company_location" : "Houston, TX",
			"job_title" : "Asst Controller",
			"responsibilities" : "Coordinated and directed the preparation of budgets and financial forecasts, institute and maintains other planning and control procedures and analyzes and report variances. Work with management on variances, trends and issues. Support district managers by helping them manage their actual versus budget expenses through effective management reports. Perform data mining to identify and explain variances, trends, drivers and results to district managers, CFO and Controller. ",
			"start_finish_dates" : "January 2003 to September 2005"
		},
		{
			"company" : "UNIQUE FINANCIAL SERVICES, INC",
			"company_location" : "Dallas, TX",
			"job_title" : "Senior Accountant",
			"responsibilities" : "",
			"start_finish_dates" : "January 1999 to January 2003"
		}
	]
}
{
	"_id" : ObjectId("56b676995d134274640eec3a"),
	"additionalInfo" : "",
	"additionalInfo_html" : null,
	"awards" : [ ],
	"certifications" : [ ],
	"education" : [
		{
			"degree" : "MBA",
			"start_finish_dates" : "2012 to 2014",
			"university" : "University of Florida, Hough Graduate School of Business",
			"university_location" : "Gainesville, FL"
		},
		{
			"degree" : "Bachelor of Arts in International Relations",
			"start_finish_dates" : "2002 to 2005",
			"university" : "University of Kentucky",
			"university_location" : "Lexington, KY"
		}
	],
	"groups" : [ ],
	"location" : "New York, NY",
	"name" : "Lucas Hoe, MBA",
	"skills" : [
		"Global Supply Chain & Logistics Optimization, 3rd Party Management, SCM Performance Measurement, Order to Cash Optimization, Cross-Functional Leadership, E-Commerce Fulfillment, Continuity & Subscription Fulfillment, Retail & Wholesale Distribution (10+ years)"
	],
	"work_experience" : [
		{
			"company" : "Allstar Products Group",
			"company_location" : "New York, NY",
			"job_title" : "SENIOR MANAGER, OPERATIONS",
			"responsibilities" : "Allstar Products Group is North America’s largest marketer and distributor of direct response consumer goods; building multi-million dollar brands from fun and innovative products, maximizing brand value through extensive national retail, E-commerce, and wholesale distribution channels. ",
			"start_finish_dates" : "September 2014 to Present"
		},
		{
			"company" : "TracFone Wireless, Inc",
			"company_location" : "Miami, FL",
			"job_title" : "MANAGER, LOGISTICS",
			"responsibilities" : "TracFone Wireless is the nation’s largest prepaid wireless service provider, encompassing brands: TracFone, NET10, StraightTalk, TelCel America, Simple Mobile and SafeLink. TracFone is a subsidiary of América Móvil (BMV: AMX / NYSE: AMX / NASDAQ: AMOV).  ",
			"start_finish_dates" : "October 2007 to June 2014"
		},
		{
			"company" : "TracFone Wireless, Inc",
			"company_location" : "Miami, FL",
			"job_title" : "ANALYST II, DEMAND PLANNING",
			"responsibilities" : "Scheduled the production and fulfillment of over 15 million handset units annually (over 500 distinct phone inventory items, including approximately 20 new model launches per year) across seven brands (TracFone, NET10, StraightTalk, TelCel America, Simple Mobile and SafeLink), three 3PLs, and over thirty major retailers (including Walmart, Family Dollar, Dollar General, Kmart, Best Buy, and Target). ",
			"start_finish_dates" : "April 2010 to February 2013"
		},
		{
			"company" : "TracFone Wireless, Inc",
			"company_location" : "Miami, FL",
			"job_title" : "SUPPLY CHAIN MANAGEMENT ANALYST",
			"responsibilities" : "• Worked with OEMs, 3PLs, and retailers to determine their IT capabilities and create plans to quickly and comprehensively integrate them into the company's electronic trading hub; managing EDI onboarding of new trading partners from evaluation through SIT, UAT and launch. ",
			"start_finish_dates" : "October 2007 to April 2010"
		},
		{
			"company" : "JR HOE & SONS, Inc",
			"company_location" : "Louisville, KY",
			"job_title" : "QUALITY ASSURANCE SPECIALIST",
			"responsibilities" : "Collaborated with all levels of management, floor personnel and customer advocates to communicate and implement solutions to improve product and process quality, driven by the objective of improving fulfillment of customer quality requirements. ",
			"start_finish_dates" : "June 2005 to August 2007"
		}
	]
}
{
	"_id" : ObjectId("56b6769b5d134274640f07ef"),
	"additionalInfo" : "",
	"additionalInfo_html" : null,
	"awards" : [ ],
	"certifications" : [ ],
	"education" : [
		{
			"degree" : "MBA",
			"start_finish_dates" : "2007 to 2009",
			"university" : "Augsburg School of Business",
			"university_location" : "New York, NY"
		},
		{
			"degree" : "BS in Computer Science",
			"start_finish_dates" : "2001 to 2005",
			"university" : "University of Minnesota Twin Cities",
			"university_location" : "Minneapolis-Saint Paul, MN"
		}
	],
	"groups" : [ ],
	"location" : "New York, NY",
	"name" : "Josef Pfeiffer",
	"skills" : [ ],
	"work_experience" : [
		{
			"company" : "AOL",
			"company_location" : "New York, NY",
			"job_title" : "VP Product & Business Development",
			"responsibilities" : "Gravity is a startup focused on personalization and natural language processing.  We were acquired in 2014 by AOL for $100m.  I reported to the founders and started the New York office to lead all publisher facing activities for Gravity including both product management and business development. Grew the company revenue from $0 to $40m in 2 years. ",
			"start_finish_dates" : "September 2012 to Present"
		},
		{
			"company" : "Bespoke Web Apps",
			"company_location" : "New York, NY",
			"job_title" : "Creative Director",
			"responsibilities" : "Cofounder and partner in a firm that designs, builds and markets web applications for fashion startups. The software is built using tools such as WordPress, Tumblr, Drupal, Shopify and FoxyCart with a team of designers and developers. Apps Include such things as e-commerce stores, promotional sites, Facebook / Twitter pages, games and iPhone/iPad apps.  ",
			"start_finish_dates" : "May 2009 to December 2012"
		},
		{
			"company" : "The Wall Street Journal",
			"company_location" : "New York, NY",
			"job_title" : "Director of Product",
			"responsibilities" : "Manage the strategy, requirements, design and development of the flagship digital product ",
			"start_finish_dates" : "February 2011 to September 2012"
		},
		{
			"company" : "Symantec",
			"company_location" : "New York, NY",
			"job_title" : "Senior Product Manager",
			"responsibilities" : "General Manager for a new product that performs searches across large sets of backup data and does continuous backup of business applications. The product was based on a $8M startup acquisition in 2005 followed by 3-years of internal development with teams located in California, Minneapolis, Boston and India. ",
			"start_finish_dates" : "April 2009 to February 2011"
		},
		{
			"company" : "Symantec",
			"company_location" : "San Francisco, CA",
			"job_title" : "Product Manager",
			"responsibilities" : "Responsible for marketing and sales strategy of a new product. Devised simplified ",
			"start_finish_dates" : "November 2007 to April 2009"
		},
		{
			"company" : "Minneapolis",
			"company_location" : "",
			"job_title" : "Cofounder and Partner",
			"responsibilities" : "Created and hosted a public radio show and website that plays and reviews instrumental ",
			"start_finish_dates" : "January 2005 to January 2009"
		},
		{
			"company" : "Minneapolis",
			"company_location" : "",
			"job_title" : "Software Engineer",
			"responsibilities" : "Developed the software that controlled disk drives, tape, and robotic libraries written in C++ and compiled on all major operating systems including Windows, Linux, UNIX and Mac. ",
			"start_finish_dates" : "June 2004 to November 2007"
		}
	]
}
{
	"_id" : ObjectId("56b6769c5d134274640f0dec"),
	"additionalInfo" : "Level III CFA Candidate (Passed June 2013 Level II exam and December 2012 Level I exam).",
	"additionalInfo_html" : "<p>Level III CFA Candidate (Passed June 2013 Level II exam and December 2012 Level I exam).</p>",
	"awards" : [
		{
			"award" : "Graduated Dean's List with Honors (top 5% of Class) from Columbia MBA ",
			"award_description" : "",
			"start_finish_dates" : "May 2015"
		},
		{
			"award" : "Winner - Suresh Balaraman Prize ",
			"award_description" : "Awarded to single student who has demonstrated outstanding work in the field of finance",
			"start_finish_dates" : "May 2015"
		},
		{
			"award" : "Winner - Robert and Jacqueline Willens Tax Research  Prize ",
			"award_description" : "Awarded to top student in investment banking tax factors class",
			"start_finish_dates" : "May 2015"
		}
	],
	"certifications" : [ ],
	"education" : [
		{
			"degree" : "MBA",
			"start_finish_dates" : "2014 to 2015",
			"university" : "COLUMBIA BUSINESS SCHOOL",
			"university_location" : "New York, NY"
		},
		{
			"degree" : "Bachelor's in International Studies and Business",
			"start_finish_dates" : "2002",
			"university" : "UNIVERSITY OF PENNSYLVANIA / WHARTON SCHOOL OF BUSINESS",
			"university_location" : "Philadelphia, PA"
		}
	],
	"groups" : [ ],
	"location" : "New York, NY",
	"name" : "Adi Brenner",
	"skills" : [ ],
	"work_experience" : [
		{
			"company" : "CRITICALPOINT PARTNERS (Investment and advisory firm founded by former senior professionals at Platinum Equity)    ",
			"company_location" : "Los Angeles, CA",
			"job_title" : "Consultant",
			"responsibilities" : "• Performed financial and operational due diligence relating to investment opportunities and new advisory engagements. ",
			"start_finish_dates" : "2013 to 2013"
		},
		{
			"company" : "PLATINUM EQUITY",
			"company_location" : "Los Angeles, CA",
			"job_title" : "Senior Associate - Private Equity",
			"responsibilities" : "Associate (2010-2011), Private Equity                                                2008-2012 ",
			"start_finish_dates" : "2010 to 2012"
		},
		{
			"company" : "Platinum Equity",
			"company_location" : "Los Angeles, CA",
			"job_title" : "Associate - Distressed Debt / Special Situations",
			"responsibilities" : "Performed financial and valuation due diligence on potential distressed debt investments including: ",
			"start_finish_dates" : "2008 to 2010"
		},
		{
			"company" : "BMO CAPITAL MARKETS",
			"company_location" : "Chicago, IL",
			"job_title" : "Mergers & Acquisitions Analyst",
			"responsibilities" : "• Performed analyses including DCF/LBO, accretion /dilution, public trading comps and precedent transactions. ",
			"start_finish_dates" : "2005 to 2008"
		},
		{
			"company" : "LEXECON",
			"company_location" : "Chicago, IL",
			"job_title" : "Research Analyst",
			"responsibilities" : "2002-2005 ",
			"start_finish_dates" : "2002 to 2005"
		}
	]
}
Type "it" for more
bye
*/