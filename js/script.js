//Create Footer Text
var footer = document.querySelector('footer');
var footerP = document.createElement('p');
footerP.textContent = 'Copyright © ' + new Date().getFullYear() + ' John Perrin P.Eng.';
footer.appendChild(footerP);


const resumeData = {
    // "meta": {
    //   "theme": "Elegant"
    // },
    "basics": {
      "name": "John Perrin P.Eng.",
      "label": "Excellence. Forged by experience.",
      "image": "img/personalProfilePicJohnPerrin.JPG",
      "narrative": "Adaptable, savvy and professional. I overcome challenges around the world through strategic judgement, clear communication, ensuring stakeholder engagement and perfect execution.",
      "email": "perrin.john@gmail.com",
      "location": {
        "address": "Bearspaw",
        "city": "Calgary",
        "countryCode": "Canada"
      },
      "profiles": [
        {
          "url": "https://www.linkedin.com/in/johnperrinpeng/",
          "username": "JohnPerrinPEng",
          "network": "LinkedIn",
          "image": ""
        },
        {
          "url": "https://github.com/JohnPerrinPEng",
          "username": "JohnPerrinPEng",
          "network": "github",
          "image": ""
        },
        {
          "url": "https://www.google.com/maps/place/Bearspaw,+AB/@51.1579186,-114.4174535,10.75z/data=!4m5!3m4!1s0x53716a393a5f46eb:0xc8b883d7efb67147!8m2!3d51.138655!4d-114.3111641",
          "username": "Bearspaw, Calgary, Alberta, Canada",
          "network": "IRL",
          "image": "img/iconGoogleMapsLocationTransparent.png"
        }
      ]
    },
    "education": [
      {
        "endDate": "1997-05-01",
        "startDate": "1993-09-01",
        "area": "Mechanical Engineering",
        "studyType": "Bachelors of Science (BSc)",
        "entity": "University of Alberta",
        "url": "https://www.ualberta.ca/engineering/mechanical-engineering/index.html",
        "location": "Edmonton, Canada",
        "file": "img/logoUniversityOfAlbertaEngineeringTranparent.png"
      },
      {
        "endDate": "1993-05-01",
        "startDate": "1991-09-01",
        "area": "Engineering",
        "studyType": "Certificate of Applied Science (CAS)",
        "entity": "Acadia University",
        "url": "https://engineering.acadiau.ca/Welcome.html",
        "location": "Wolfville, Canada",
        "file": "img/logoAcadiaUniversityEngineeringTranparent.png"
      }
    ],
    "volunteering": [ 
      {
        "role": "Member of Autonomous Systems Advisory Group",
        "entity": "Engineers Canada",
        "narrative": "Member of an advisory group created to help guide the development of a detailed research paper on Autonomous Systems by defining scope and key terms, reviewing materials, and providing feedback and direction. The findings are documented in an Engineers Canada internal document: Autonomous Systems Engineering, Final Paper.",
        "startDate": "2020-09-01",
        "endDate": "2021-12-15",
        "url": "https://engineerscanada.ca/",
        "file": "img/logoEngineersCanada.png"
      },
      {
        "role": "Big Brother",
        "entity": "Big Brothers and Big Sisters of Calgary & Area",
        "startDate": "2008-05-01",
        "endDate": "2013-05-15",
        "url": "https://bbbscalgary.ca/",
        "file": "img/logoBBBSCalgary.png"
      },
      {
        "role": "President",
        "entity": "Canadian Progress Club - Calgary Downtown Chapter",
        "startDate": "2010-09-01",
        "endDate": "2011-08-30",
        "url": "https://www.progressclub.ca/",
        "file": "img/logoCanadianProgressClub.png"

      },
      {
        "role": "Member",
        "entity": "Canadian Progress Club - Calgary Downtown Chapter",
        "startDate": "2006-09-01",
        "endDate": "2011-08-30",
        "url": "https://www.progressclub.ca/",
        "file": "img/logoCanadianProgressClub.png"

      },
      {
        "role": "2015 Session Co-Chair: New Ideas in Western Canadian Resource Plays",
        "entity": "GeoConvention Partnership",
        "startDate": "2014-09-01",
        "endDate": "2015-05-15",
        "url": "https://geoconvention.com/",
        "file": "img/logoGeoConventionPartnershipTransparent.png"
      }
    ],
    "skills": [
      {
        "name": "Leadership",
        "keywords": ["Strategic Thinking", "Empower Team Members", "Effective Communication"]
      },
      {
        "name": "Business Devlopment",
        "keywords": ["Closing Profitable Deals", "Market Assessment", "Stakeholder Engagement"]
      },
       {
        "name": "Continuous Improvement",
        "keywords": ["Goalsetting", "Change Management", "Ongoing Assessment"]
      },
       {
        "name": "Engineering",
        "keywords": ["Industrial Automation", "Petroleum Reservoir Assessment", "Machine Design"]
      }
    ],
    "awards": [
      {
        "title": "Pathfinder Award",
        "awarder": "Scouts Canada and Governor General of Canada"
      },
      {
        "title": "Man of The Year",
        "awarder": "Canadian Progress Club - Calgary Downtown"
      }
    ],
    "interests": [
      {
        "name": "Golf"
      },
      {
        "name": "Sailing"
      },
      {
        "name": "Comedy"
      },
      {
        "name": "Volunteering"
      }
    ],
    "work": [
      {"name": "Atomic Energy Canada Limited", "role": "Intern for Fluid Sealing Technology Unit", "Summary": "Joint role as Intern for Fluid Sealing Technology Unit and Tutor for Deep River Science Academy.", "location": "Chalk River, Canada", "startDate": "1996-05-01", "endDate": "1996-08-31"},
      {"name": "Atomic Energy Canada Limited", "role": "Reactor Services Engineer", "Summary": "I joined Reactor Services to research, build, inspect and repair CANDU Nuclear Fuel Channel Components.", "location": "Mississauga, Canada", "startDate": "1997-05-28", "endDate": "2000-07-09"},
      {"name": "Atomic Energy Canada Limited", "role": "Supervisor, Calandria Restoration", "Summary": "", "location": "Cernavoda, Romania", "startDate": "1998-06-15", "endDate": "1998-08-30"},
      {"name": "Atomic Energy Canada Limited", "role": "Supervisor, Sub-Assembly and Components", "Summary": "", "location": "Cernavoda, Romania", "startDate": "1999-02-01", "endDate": "1999-07-31"},
      {"name": "Schlumberger", "role": "Field Engineer Trainee", "Summary": "Joined Schlumberger as a Wireline Field Engineer Trainee and progressed through the ranks to General Field Engineer in Charge over 4 years in Saudi Arabia, Kuwait and United Arab Emirates. Subsequently transferred to Calgary in Wireline Sales and finally promoted to Canada Recruiter for one year.", "location": "Shreveport, USA", "startDate": "2000-07-09", "endDate": "2000-10-15"},
      {"name": "Schlumberger", "role": "Field Engineer", "Summary": "", "location": "Al Khobar, Saudi Arabia", "startDate": "2000-10-16", "endDate": "2002-01-01"},
      {"name": "Schlumberger", "role": "Field Engineer", "Summary": "Tranferred to Kuwait Land location ", "location": "Ahmadi, Kuwait", "startDate": "2002-01-01", "endDate": "2002-09-15"},
      {"name": "Schlumberger", "role": "Senior Field Engineer", "Summary": "Transferred to Abu Dhabi Offshore location promoted to Senior Field Engineer.", "location": "Abu Dhabi, United Arab Emirates", "startDate": "2002-09-15", "endDate": "2003-02-01"},
      {"name": "Schlumberger", "role": "Wireline Engineer in Charge for TOTAL Abu Al Bukhoosh", "Summary": "Designated as SLB Engineer In Charge for TOTAL Al Bukhoosh field on the basis of strong relationship with TOTAL personnel in town and on the rig, excellent field service quality, and informal leadership amongst peers. I fulfilled the sales role for TOTAL, performed all Rig Based Wireline Operations,    coordinated movement of people, tools and materials for Rig and Rigless TOTAL operations, and fulfilled role of Service Quality Manager including preparation and presentation of periodic Service Quality Meetings.", "location": "Abu Dhabi, United Arab Emirates", "startDate": "2003-02-01", "endDate": "2004-10-01"},
      {"name": "Schlumberger", "role": "General Field Engineer", "Summary": "Promoted to General Field Enginer after fulfill GFE Control requirements including extensive Technical, Management, Personnel, Finance and Personnel knowledge written and oral examinations in addition to completion of major independant project with confirmed significant business outcome.project with significcant ", "location": "Abu Dhabi, United Arab Emirates", "startDate": "2003-12-01", "endDate": "2004-10-01"},
      {"name": "Schlumberger", "role": "Technical Sales Engineer – Wireline", "Summary": "Transferred to Canada and promoted to Wireline Sales Engineer on the basis of performance in role and demonstrated capability in sales as EIC for Total.", "location": "Calgary, Canada", "startDate": "2004-10-01", "endDate": "2006-04-01"},
      {"name": "Schlumberger", "role": "OFS Field Engineer Recruiter", "Summary": "Promoted to Recruiter role by SLB Global OFS HR Manager with a mandate to fulfill the Field Engineer, Product Center Graduate Hybrid and Field Engineer Intern programs.", "location": "Calgary, Canada", "startDate": "2006-04-01", "endDate": "2006-12-12"},
      {"name": "ConocoPhillips", "role": "Petrophysicist", "Summary": "Recruited by former clients in the Technical Excellence department to perform regional petrophysical studies as part of a multidisciplinary team.", "location": "Calgary, Canada", "startDate": "2007-05-01", "endDate": "2008-04-20"},
      {"name": "Tendeka", "role": "Vice President North and South America for Senornet", "Summary": "Recruited as Vice President North and South America for Sensornet Limited.", "location": "Calgary, Canada", "startDate": "2008-05-01", "endDate": "2009-09-01"},
      {"name": "Tendeka", "role": "Regional Manager Canada and Strategic Relationship Manager", "Summary": "Promoted to Strategic Relationship Manager and Regional Manager Canada on the combination of Sensornet, SwellFifix and WellTechnogolgy by Kenda Capital in June 2009..", "location": "Calgary, Canada", "startDate": "2009-09-01", "endDate": "2010-12-13"},
      {"name": "Calmena", "role": "Microseismic Business Development Manager", "Summary": "Joined a hungry oil field services start up and grew our share of the Microseismic Fracture Monitoring and Horizontal Completion Technology market in Canada.", "location": "Calgary, Canada", "startDate": "2010-12-13", "endDate": "2012-12-18"},
      {"name": "Enerplus Corporation", "role": "Staff Petrophysical Engineer", "Summary": "Recruited by the Chief Geoscientist to expand the rigorous use of Petrophysics across Enerplus. Established a foundation of Petrophysical knowledge throughout the organization by performing advanced analysis and delivering formal and informal training to geoscientists, engineers and managers.", "location": "Calgary, Canada", "startDate": "2012-12-18", "endDate": "2015-06-02"},
      {"name": "Weatherford now Stratum Reservoir", "role": "Product Line Manager - Laboratories and Sub-Surface Consulting", "Summary": "Recruited to lead a technically strong but unprofitable Geoscience, Fluid PVT (Pressure Volume Temperature) and SCAL (Special Core Analysis) laboratory. Implemented a cultural change and renewed focus on oilfield service fundamentals.", "location": "Calgary, Canada", "startDate": "2017-04-01", "endDate": "2018-06-21"},
      {"name": "DIKUW Incorporated", "role": "Founder", "Summary": "DIKUW specializes in enabling YOUR TEAM to overcome barriers to success. DIKUW collaborates with a focus on fundamental principles to assess, suggest and implement the optimal solution — all to provide exceptional advice that will transform your business and provide value for years to come.", "location": "Calgary, Canada", "startDate": "2019-03-01", "endDate": "2022-01-24"},
      {"name": "DIKUW Incorporated", "role": "Consulting Engagement to CEDA Technical Center of Excellence", "Summary": "Coached CEDA’s newly founded Technical Center of Exellence using DIKUW’s proprietary “Comprehensive Framework for Field Operations Project Management and general knowledge of how to deploy technical resources for successful commercial outcomes.’", "location": "Calgary, Canada", "startDate": "2019-03-01", "endDate": "2019-09-15"},
      {"name": "Emerson Automation Solutions", "role": "Team Lead, Customer Solutions Engineering for Zedi IoT SaaS", "Summary": "", "location": "Calgary, Canada", "startDate": "2019-05-01", "endDate": "2019-08-01"},
      {"name": "Emerson Automation Solutions", "role": "Manager, Automation Engineering for Zedi IoT SaaS", "Summary": "", "location": "Calgary, Canada", "startDate": "2019-08-01", "endDate": "2020-02-01"},
      {"name": "Emerson Automation Solutions", "role": "Director, Automation Engineering for Zedi IoT SaaS", "Summary": "Achieved an across the board KPI improvement of Automation Engineering Sales, Implementation and and Support", "location": "Calgary, Canada", "startDate": "2020-02-01", "endDate": "2020-10-01"},
      {"name": "Emerson Automation Solutions", "role": "Director, International Business Development for Zedi IoT SaaS", "Summary": "Induce Digital Transformation journeys in potential customers employing our SaaS product in diverse industries including Hydrogen Systems, Renewable Energy, Bulk Product Distribution and Oil & Gas.", "location": "Calgary, Canada", "startDate": "2020-10-01", "endDate": "2021-09-30"},
      ]
}

var roleHighlights = [
  {"unique":"Intern for Fluid Sealing Technology UnitAtomic Energy Canada Limited1996-05-01", "highlight":"Succesfully identified failure mode of Primary Heat Transport Pump Seal."},
  {"unique":"Reactor Services EngineerAtomic Energy Canada Limited1997-05-28", "highlight":"Designed, simulated, fabricated, instrumented and reported results for CANDU6 30 Year Retube Operations"},
  {"unique":"Reactor Services EngineerAtomic Energy Canada Limited1997-05-28", "highlight":"Revised and published CANDU 6 Fuel Channel Installation Manual"},
  {"unique":"Reactor Services EngineerAtomic Energy Canada Limited1997-05-28", "highlight":"1st Emergency Project: Fuel Channel End Cap Sealing Assembly designed, fabricated, bench test, documented, and shipped in 10 days."},
  {"unique":"Reactor Services EngineerAtomic Energy Canada Limited1997-05-28", "highlight":"1st Introduction of CAE Tools including SolidWorks, ProEngineer and Ansys to AECL Reactor Services."},
  {"unique":"Supervisor, A-Side Fuel Channel InstallationAtomic Energy Canada Limited1998-06-15", "highlight":"1st Restoration of Calandria after 7 years cold storage"},
  {"unique":"Supervisor, Sub-Assembly and ComponentsAtomic Energy Canada Limited1999-02-01", "highlight":"World Record, at the time, of CANDU 6 Fuel Channel Component for Cernavoda Unit 2"},
  {"unique":"Field Engineer TraineeSchlumberger2000-07-09", "highlight":"Completed Open Hole Wireline Breakout Job including Imaging, Formation Testing, and Walkaway Seismic with radios in dual dogleg well."},
  {"unique":"Field Engineer TraineeSchlumberger2000-07-09", "highlight":"Partipated as Field Tester of Seismic While Drilling technology"},
  {"unique":"Field EngineerSchlumberger2000-10-16", "highlight":"1st Well Logging in Hail Region of Saudi Arabia in living memory"},
  {"unique":"Field EngineerSchlumberger2000-10-16", "highlight":"1st JP Offshore Logging Job."},
  {"unique":"Field EngineerSchlumberger2000-10-16", "highlight":"Seconded to remote Khafji, Saudi Arabia location."},
  {"unique":"Field EngineerSchlumberger2000-10-16", "highlight":"Attended Cased Hole Formation Resistivity Field Tester Training at Schlumberger Clamart"},
  {"unique":"Field EngineerSchlumberger2000-10-16", "highlight":"Performed 1st successful Cased Hole Formation Resistivity Tool measurement in Kuwait."},
  {"unique":"Senior Field EngineerSchlumberger2002-09-15", "highlight":"Performed 1st successful Cased Hole Formation Resistivity Tool measurement in United Arab Emirates."},
  {"unique":"Wireline Engineer in Charge for TOTAL Abu Al BukhooshSchlumberger2003-02-01", "highlight":"Successfully overcame differentially stuck casing guns to avoid arrest by Abu Dhabi National Police."},
  {"unique":"Wireline Engineer in Charge for TOTAL Abu Al BukhooshSchlumberger2003-02-01", "highlight":"Wireline Unit, Explosive Bunker and Schlumberger Doghouse move from Raniworo to Gus Androes on-time and on-budget"},
  {"unique":"General Field EngineerSchlumberger2003-12-01", "highlight":"Successfilly completed and presented results of Ultrasonic Imaging Tool Research And Development project on Effects of Sensor Sub Misallignment"},
  {"unique":"Technical Sales Engineer – WirelineSchlumberger2004-10-01", "highlight":"Increased Top Line revenue from named accounts from CAD9.5M to CAD12.5M"},
  {"unique":"Product Line Manager - Reservoir Services (Laboratories and Sub-Surface Consulting)Weatherford now Stratum Reservoir2017-04-01", "highlight":"Improved P&L: Through a no holds barred approach to topline revenue generation and variable-cost control, EBITDA moved from heavily negative to positive."},
  {"unique":"Product Line Manager - Reservoir Services (Laboratories and Sub-Surface Consulting)Weatherford now Stratum Reservoir2017-04-01", "highlight":"Cultural Change: Focusing on team and personal accountability, I led an increase in compliance and process discipline reflected in improved QHSSE KPIs and COR Audit performance."},
  {"unique":"Product Line Manager - Reservoir Services (Laboratories and Sub-Surface Consulting)Weatherford now Stratum Reservoir2017-04-01", "highlight":"Innovation: Shepherded operations team in the engineering development of techniques and equipment for a 10 client, multi-million-dollar Lean Gas Cycling Joint Industry Partnership."},
  {"unique":"Team Lead, Customer Solutions Engineering for Zedi IoT SaaSEmerson Automation Solutions2019-05-01", "highlight":"Assesed and initiated improvement of field delivery operations in first 60 days"},
  {"unique":"Director, Automation Engineering for Zedi IoT SaaSEmerson Automation Solutions2020-02-01", "highlight":"Create, deploy, and direct continuous improvement of a Perfect Execution approach to Zedi Automation Engineering."},
  {"unique":"Director, Automation Engineering for Zedi IoT SaaSEmerson Automation Solutions2020-02-01", "highlight":"Initiate, select, oversee training and integrate personnnel from Emerson’s Best Cost Center location in Pune, India resources from into the North America based Automation Engineering Team."},
  {"unique":"Director, Automation Engineering for Zedi IoT SaaSEmerson Automation Solutions2020-02-01", "highlight":"APEGA Responsible Member for Automation Engineering under Emerson Electric Canada Limited (EECL) Permit to Practice."},
  {"unique":"Director, Automation Engineering for Zedi IoT SaaSEmerson Automation Solutions2020-02-01", "highlight":"Successful introduction of StackOverflow for Teams as Automation Engineering knowledge repository."},
  {"unique":"Director, Automation Engineering for Zedi IoT SaaSEmerson Automation Solutions2020-02-01", "highlight":"1st formal Automation Engineering team training in 3rd party pollling engine."},
  {"unique":"Director, International Business Development for Zedi IoT SaaSEmerson Automation Solutions2020-10-01", "highlight":"Increased named pursuit funnel, 6X in 1 YEAR (Total potential Contract Value approximately USD25M)"},
  {"unique":"Director, International Business Development for Zedi IoT SaaSEmerson Automation Solutions2020-10-01", "highlight":"Selected, trained and supported 20 Total IoT SaaS Subject Matter Experts in 12 Months via MS Teams"},
  {"unique":"Director, International Business Development for Zedi IoT SaaSEmerson Automation Solutions2020-10-01", "highlight":"Delivered IoT SaaS Sales Awareness Training to ~1000 Emerson Business Development and Partner Staff  around the world."},
  {"unique":"Director, International Business Development for Zedi IoT SaaSEmerson Automation Solutions2020-10-01", "highlight":"Established meaningful working relationships with Regional Executives and key Business Development resources around the world without the opportunity to meet in person."},
];

var logoImages = [
  {"name": "UniversityofAlberta", "file": "img/logoUniversityOfAlbertaEngineeringTranparent.png", "url": "https://www.ualberta.ca/engineering/mechanical-engineering/index.html"},{"name": "AcadiaUniversity", "file": "img/logoAcadiaUniversityEngineeringTranparent.png", "url": "https://engineering.acadiau.ca/Welcome.html"},{"name": "AtomicEnergyCanadaLimited", "file": "img/logoAECL-Stacked-BlueTranparent.png", "url": "https://www.aecl.ca"},{"name": "Schlumberger", "file": "img/logoSchlumbergerTranparent.png", "url": "https://www.slb.com"},{"name": "ConocoPhillips", "file": "img/logoConocoPhillipsTranparent.png", "url": "https://www.conocophillips.com"},{"name": "Tendeka", "file": "img/logoTendekaTransparent.png", "url": "https://www.tendeka.com"},{"name": "Calmena", "file": "img/logoCalmenaTransparent.png", "url": ""},{"name": "EnerplusCorporation", "file": "img/logoEnerplusTranparent.png", "url": "https://www.enerplus.com"},{"name": "NXTEnergySolutions", "file": "img/logoNXTEnergySolutionsTransparent.png", "url": "http://www.nxtenergy.com/"},{"name": "WeatherfordnowStratumReservoir", "file": "img/logoWeatherfordTransparent.png", "url": "https://www.stratumreservoir.com"},{"name": "DIKUWIncorporated", "file": "img/logoDIKUWTransparent.png", "url": "https://www.dikuw.ca"},{"name": "EmersonAutomationSolutions", "file": "img/logoEmersonTransparent.png", "url": "https://www.emerson.com/en-ca/automation/control-and-safety-systems/scada-systems/zedi-cloud-scada-solutions"}
];
// var contentContainer = recordContainerizer('content', 'contentContainer', 'content')
var main = document.querySelector('main');
const content = JSON.stringify(resumeData);
const contentParsed = JSON.parse(content);

var contentDomObj = document.createElement('div');
appendDom( contentDomObj, contentParsed ) //Add all resume content to contentDOMObj
// main.insertBefore(contentDomObj, main.firstChild);
//Pretty up the Experience portion
const work = JSON.stringify(resumeData.work);
var workParsed = JSON.parse(work).sort((a,b) => new Date(b.endDate) - new Date(a.endDate));
workify(workParsed);


//Pretty format the content
// for (child of contentParsed.children) {
Object.entries( contentParsed ).forEach( child => { 
  switch ( child[0] ) {
    case "work":
      // workify(child[1]);
      break
    case "education":
      sectionCreator(child); 
      educationFormatter(child);
      break
    case "volunteering":
      sectionCreator(child);  
      volunteeringFormatter(child);
      break
    case "basics":
      basicsFormatter(child);
      break
    default:
  }
});

function basicsFormatter(basics) {
  var navbarObj = document.createElement('div');
  Object.assign( navbarObj, {
    id: 'navbar',
    className: 'navbar',
    role: 'navigation'
  })
  var navBarSpacer = document.createElement('div');
  Object.assign (navBarSpacer, {
    id: 'navBarSpacer',
    className: 'navBarSpace'
  })
  var personaObj = recordContainerizer('persona', 'personaContainer', basics[1].name)
  var personaImgContainer = recordContainerizer('personaImg', 'personaImgContainer', basics[1].name)
  var personaImg = document.createElement('img');
  Object.assign( personaImg , {
    id: basics[1].name,
    className: 'personaImg',
    alt: `${basics[1].name} Picture`,
    src: basics[1].image
  })
  var personaTextObj = recordContainerizer('personaText', 'personaTextContainer',  basics[1].name);
  var personaNameObj = paragraphizer(basics[1].name, basics[1].name, 'personaName' );
  var personaLabelObj = paragraphizer(basics[1].label, basics[1].name, 'personaLabel')
  var profilesContainer = recordContainerizer('profiles', 'profilesContainer', basics[1].name);
  
  var profiles = basics[1].profiles
  console.log({profiles})

  personaTextObj.appendChild(personaNameObj);
  personaTextObj.appendChild(personaLabelObj);
  personaTextObj.appendChild(profilesContainer);
  personaImgContainer.appendChild(personaImg);
  personaObj.appendChild(personaImgContainer);
  personaObj.appendChild(personaTextObj);
  navbarObj.appendChild(personaObj);
  main.prepend(navbarObj);
  // main.prepend(navBarSpacer);
}

function volunteeringFormatter(volObj) {
  var volunteerSummary = summarizeByEntity (volObj);
  // var rolesObj = roleifyByEntity(volObj);
  volunteerSummary.forEach( summary => {
    var recordContainer = recordContainerizer( 'record' , 'recordContainer', summary.entity );
    var logoContainer = containerizeLogo(summary.entity, summary.entity, summary.file, summary.url);
    var summaryEntity = paragraphizer( summary.entity, summary.entity, 'detail' );
    var summaryDuration = paragraphizer( summary.durationPhrase, summary.entity, 'detail');
    var recordTextContainer = recordContainerizer('recordText', 'recordTextContainer', summary.entity);
    var recordSummaryRow = recordContainerizer('recordSummaryRow', 'recordSummaryRow', summary.entity);
    var rolesByEntity = roleifyByEntity(volObj[1].filter( item => item.entity == summary.entity));
    
    recordSummaryRow.appendChild( summaryEntity );
    recordSummaryRow.appendChild( summaryDuration );
    recordTextContainer.appendChild( recordSummaryRow )
    recordTextContainer.appendChild( rolesByEntity )
    recordContainer.appendChild( logoContainer )
    recordContainer.appendChild( recordTextContainer)
    document.getElementById('volunteering').appendChild(recordContainer)
  })

}

function roleifyByEntity(entityRolesObj) {
  var roleTextContainer = recordContainerizer('roleTextContainer', 'roleTextContainer', entityRolesObj[0].entity);
  entityRolesObj.forEach( (role) => {
    roleDates = `${prettyDates(role.startDate)} to ${prettyDates(role.endDate)}`
    var roleContainer = recordContainerizer('role', 'roleContainer', role.entity);
    var roleSummaryRole = paragraphizer(role.role, role.entity, 'detail entity');
    var roleSummaryLocation = paragraphizer(role.location, role.entity, 'detail location');
    var roleSummaryDates = paragraphizer(roleDates, role.entity, 'detail duration');
    var roleSummaryRow = recordContainerizer('roleSummaryRow', 'roleSummaryRow', role.entity);
    roleSummaryRow.appendChild(roleSummaryRole);
    roleSummaryRow.appendChild(roleSummaryLocation);
    roleSummaryRow.appendChild(roleSummaryDates);
    roleTextContainer.appendChild(roleSummaryRow);
    var roleNarrative = paragraphizer(role.narrative, role.entity, 'detail narrative');
    roleTextContainer.appendChild(roleNarrative);
  });
  return roleTextContainer
}

function summarizeByEntity ( listingArray ) {
  const entityList = [...new Set(listingArray[1].map( item => item.entity))];
  var entitySummary = [];
  entityList.forEach( (entity, index) => {
    const regex = RegExp(entity);
    const entitySet = listingArray[1].filter(({entity}) => entity.match(regex));
    // Create entity record if 1 unique entry
    if ( !entitySet[1]) {
      var record = {
        "entity": listingArray[1].find(({ entity }) => entity.match(RegExp(regex))).entity,
        "file": listingArray[1].find(({ entity }) => entity.match(RegExp(regex))).file,
        "url": listingArray[1].find(({ entity }) => entity.match(RegExp(regex))).url,
        "startDate": listingArray[1].find(({ entity }) => entity.match(RegExp(regex))).startDate,
        "endDate": listingArray[1].find(({ entity }) => entity.match(RegExp(regex))).endDate
      }
    // Create record for entity with multiple entries
    } else {
      const entityStartDate = entitySet.map(a => a.startDate).reduce(function(min, cur) {
        return cur < min ? cur : min;
      },"21000");
      const entityEndDate = entitySet.map(a => a.endDate).reduce(function(max, cur) {
        return cur > max ? cur : max;
      },"0");
      var record = {
        "entity": listingArray[1].find(({ entity }) => entity.match(RegExp(regex))).entity,
        "file": listingArray[1].find(({ entity }) => entity.match(RegExp(regex))).file,
        "url": listingArray[1].find(({ entity }) => entity.match(RegExp(regex))).url,
        "startDate":entityStartDate,
        "endDate":entityEndDate
      }
    }
    calculateDuration(record);//Add durationPhrase
    entitySummary[index] = record;//Add record to summary object
  });
  return entitySummary
}

function educationFormatter(educationObj) {
  var eduSort = educationObj[1].sort((a,b) => new Date(b.endDate) - new Date(a.endDate));
  
  eduSort.forEach( educationRec => {

    // const gradPhrase = `${}`
    calculateDuration(educationRec);
    
    var detailLocation = paragraphizer(educationRec.location, educationRec.entity, 'location')
    var detailDates = paragraphizer(`${prettyDates(educationRec.startDate)} to ${prettyDates(educationRec.endDate)}.`, educationRec.entity, 'dates');
    var roleSummaryRow = document.createElement('p')
    Object.assign( roleSummaryRow, {
      id: `${educationRec.entity}`,
      className: 'roleSummaryRow',
    })
    var recordSummaryRow = document.createElement('div')
    Object.assign( recordSummaryRow, {
      id: `${educationRec.entity}`,
      className: 'recordSummaryRow'
    })
    
    var summaryEntity = document.createElement('p')
    Object.assign( summaryEntity, {
      id: `${educationRec.entity}`,
      className: 'summaryDetail',
      textContent: `${educationRec.entity}`
    })
    
    const summaryCredential = document.createElement('p')
    Object.assign( summaryCredential, {
      id: `${educationRec.entity}`,
      className: 'summaryDetail',
      textContent: `${educationRec.studyType} in ${educationRec.area}`
    })
    
    
    var recordTextContainer = document.createElement('div');
    Object.assign( recordTextContainer, {
      id: `${educationRec.entity}`,
      className: 'recordTextContainer'
    })

    var recordContainer = document.createElement('div');
    Object.assign( recordContainer, {
      id: `${educationRec.entity}`,
      className: 'recordContainer'
    })
    var logoContainer = containerizeLogo( educationRec.entity, educationRec.entity, educationRec.file, educationRec.url)
    
    recordSummaryRow.append( summaryEntity, summaryCredential);
    recordTextContainer.appendChild(recordSummaryRow);
    
    roleSummaryRow.appendChild(detailLocation);
    roleSummaryRow.appendChild(detailDates);
    recordTextContainer.appendChild(roleSummaryRow);

    recordContainer.appendChild(logoContainer);
    recordContainer.appendChild(recordTextContainer);
        
    document.getElementById("education").appendChild(recordContainer)
  })
 
}

function paragraphizer(text, id, className) {
  var textNode = document.createElement('p');
  Object.assign( textNode , {
    id: id,
    className: className,
    textContent: text
  })
  return textNode
}

function recordContainerizer (instance, className, id) {
  eval(`var ${instance}Container = document.createElement('div')`);
  Object.assign( eval(`${instance}Container`), {
    id: `${id}`,
    className: className,
  });
  // parentObj.append(eval(`${instance}Container`));
  return eval(`${instance}Container`);
}

function sectionCreator( sectionObj ) {
  sectionName = sectionObj[0];
  var sectionTitle = document.createElement('h5')
  Object.assign(sectionTitle, {
    className: 'sectionTitle',
    id: sectionName,
    textContent: sectionName
  })
  var sectionContainerObj = document.createElement('div');
  Object.assign(sectionContainerObj, {
    id: sectionName,
    className: 'sectionContainer'
  } )
  sectionContainerObj.appendChild(sectionTitle)
  main.append(sectionContainerObj);
}



function containerizeLogo(entity, id, file, url) {
  shortName = entity.split(" ").join("");
  var logoImg = document.createElement('img');
  Object.assign( logoImg , {
    id: id,
    className: 'logoImg',
    alt: `${entity} Logo`,
    src: `${file}`
  });
  var logoHref = document.createElement('a');
  Object.assign( logoHref , {
    id: id,
    className: 'logoHref',
    href: url
  });
  logoContainer = document.createElement('div');
  Object.assign( logoContainer , {
    id: id,
    className: 'logoContainer'
  });
  logoHref.appendChild(logoImg);
  logoContainer.appendChild(logoHref);
  return logoContainer
}

function calculateDuration(array) {
  start = new Date(array.startDate);
  end = new Date(array.endDate);
  var durationYears;
  var durationMonths;
  var yearS = 's';
  var monthS = 's';
  if ( end.getMonth() < start.getMonth() ) {
    durationMonths = 12 + end.getMonth() - start.getMonth();
    durationYears = -1 + end.getFullYear() - start.getFullYear();
  } else {
    durationMonths = end.getMonth() - start.getMonth();
    durationYears = end.getFullYear() - start.getFullYear();
  }
  if (durationYears == 1) {yearS = ''}
  if (durationMonths == 1) {yearS = ''}
  array.
  durationPhrase = `${durationYears} year${yearS}, ${durationMonths} month${monthS}`
}

function prettyDates(date) {
  
  dateArray = date.split("-");
  dateUgly = new Date(dateArray[0], parseInt(dateArray[1])-1 , dateArray[2]);
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const datePrettyMonth = monthNames[parseInt(dateUgly.getMonth())];
  const datePrettyYear = dateUgly.getFullYear();
  const datePretty = `${datePrettyMonth}-${datePrettyYear}`
  return datePretty
}

function appendDom (targetObj,data) {
  var dataKeys = Object.keys(data);
  dataKeys.forEach( dataKey => {
    if (!Object.isExtensible(data[dataKey])) {
      //If the current element doesn't expand create a p for content
      var domElement = document.createElement('p');
      Object.assign( domElement, {
        className: dataKey,
        textContent: data[dataKey]
      });
      targetObj.appendChild(domElement);
    } else {
      //If the current elelment does expand creat a div and be recursive
      var domElement = document.createElement('div');
      Object.assign( domElement, {
        className: dataKey
      });
      targetObj.appendChild(domElement);
      appendDom(domElement, data[dataKey])
    }
  })
}


function workify(workParsed) {
  workParsed.forEach( (item) => calculateDuration(item)); //Add durationPhrase
  workParsed.forEach(job => calculateDuration(job));
  workParsed.forEach(job => job.prettyStartDate = prettyDates(job.startDate));
  workParsed.forEach(job => job.prettyEndDate = prettyDates(job.endDate));

  // Create an object of unique companies worked and populate with summary data
  const workSummaryList = [...new Set(workParsed.map( item => item.name))];
  var workSummary = [];
  var startDateSort
  workSummaryList.forEach( (company, index) => {
    const regex = RegExp(company);
    const nameSet = workParsed.filter(({name}) => name.match(regex));
    //Create company Meta Data if company has 1 entry
    if ( !nameSet[1]) {
      var record = {
        "name": company,
        "startDate": workParsed.find(({ name }) => name.match(RegExp(regex))).startDate,
        "endDate": workParsed.find(({ name }) => name.match(RegExp(regex))).endDate
      }
    // Create company Meta Data and summarize start and end if more than 1 entry
    } else {
      const nameStartDate = nameSet.map(a => a.startDate).reduce(function(min, cur) {
        return cur < min ? cur : min;
      },"21000");
      const nameEndDate = nameSet.map(a => a.endDate).reduce(function(max, cur) {
        return cur > max ? cur : max;
      },"0");
      var record = {
        "name": company,
        "startDate":nameStartDate,
        "endDate":nameEndDate
      }
    }
    calculateDuration(record);//Add durationPhrase
    workSummary[index] = record;//Add record to summary object

  });

  var workSummarySorted = workSummary.sort();
  workSummary = workSummarySorted;
  delete workSummary.startDate;
  delete workSummary.endDate;

  var expTitle = document.createElement('h5');
  Object.assign( expTitle, {
    id: 'experience',
    className: "sectionTitle",
    textContent: "Experience"
  } );
  var sectionContainer = document.createElement('div');
  sectionContainer.id = "experience"
  sectionContainer.className = "sectionContainer"
  sectionContainer.appendChild(expTitle);


  //Create Exerience DOM
  workSummary.forEach( (summary) => {
    const companyNameCollapsed = summary.name.split(" ").join("");

    //Create company container with logo
    eval(`var ${companyNameCollapsed}Container = document.createElement('div')`);
    Object.assign( eval(`${companyNameCollapsed}Container`), {
      className: 'recordContainer',
      id: 'experience'
    });
    eval(`var ${companyNameCollapsed}LogoContainer = document.createElement('div')`);
    Object.assign( eval(`${companyNameCollapsed}LogoContainer`), {
      className: 'logoContainer',
      id: 'experience'
    });
    eval(`var ${companyNameCollapsed}TextContainer = document.createElement('div')`);
    Object.assign( eval(`${companyNameCollapsed}TextContainer`), {
      className: 'recordTextContainer',
      id: 'experience'
    });
    eval(`var ${companyNameCollapsed}LogoHref = document.createElement('a')`);
    Object.assign( eval(`${companyNameCollapsed}LogoHref`), {
      className: 'logoHref',
      id: 'experience',
      href: logoImages.find(({ name }) => name.match(RegExp(companyNameCollapsed))).url
    });

    eval(`var ${companyNameCollapsed}Logo = document.createElement('img')`);
    Object.assign( eval(`${companyNameCollapsed}Logo`), {
      className: 'logoImg',
      id: 'experience',
      alt: summary.name,
      src: logoImages.find(({ name }) => name.match(RegExp(companyNameCollapsed))).file
    });
    eval(`${companyNameCollapsed}LogoHref`).appendChild(eval(eval(`${companyNameCollapsed}Logo`)));
    eval(`${companyNameCollapsed}LogoContainer`).appendChild(eval(eval(`${companyNameCollapsed}LogoHref`)));
    eval(`${companyNameCollapsed}Container`).appendChild(eval(`${companyNameCollapsed}LogoContainer`));
    eval(`${companyNameCollapsed}Container`).appendChild(eval(`${companyNameCollapsed}TextContainer`));
    sectionContainer.appendChild(eval(`${companyNameCollapsed}Container`));


    //Create expSummaryRow
    eval(`var ${companyNameCollapsed}SummaryRow = document.createElement('div')`);
    Object.assign( eval(`${companyNameCollapsed}SummaryRow`), {
          className: 'recordSummaryRow',
    });
    
    //Convert to prettyDates for display
    delete summary.endDate; //= prettyDates(summary.endDate);
    delete summary.startDate; // = prettyDates(summary.startDate);

    //Create entityDetail
    Object.entries(summary).forEach(detail => {
      const detailType = `entityDetail${detail[0].charAt(0).toUpperCase()}${detail[0].slice(1)}`;
      eval(`var ${detailType} = document.createElement('p')`);
      Object.assign( eval(detailType), {
        className: detail[0],
        textContent: detail[1]
      });
      eval(detailType).classList.add('entityDetail');
      eval(`${companyNameCollapsed}SummaryRow`).appendChild(eval(detailType));
    })
    eval(`${companyNameCollapsed}TextContainer`).appendChild(eval(`${companyNameCollapsed}SummaryRow`));

    // Create role DOM
    const roles = workParsed.filter(({name}) => name.match(RegExp(summary.name)));
    var roleSummaryFields = {}
    roles.forEach( (summary,index) => {
      //Build roleSummaryFields 

        
        //Build roleContainer
        eval(`var ${companyNameCollapsed}${index}roleContainer = document.createElement('div')`);
        Object.assign( eval(`${companyNameCollapsed}${index}roleContainer`), {
          className: 'roleContainer'
        });
        eval(eval(`${companyNameCollapsed}TextContainer`).appendChild(eval(`${companyNameCollapsed}${index}roleContainer`)));
        
        //Build roleSummaryRow
        
        eval(`var ${companyNameCollapsed}${index}roleSummaryRow = document.createElement('div')`);
        Object.assign( eval(`${companyNameCollapsed}${index}roleSummaryRow`), {
          className: 'roleSummaryRow'
        });
        eval(`${companyNameCollapsed}${index}roleContainer`).appendChild(eval(`${companyNameCollapsed}${index}roleSummaryRow`));
        
        // Build details to go inside summary row
        roleSummaryFields = {
          "role": summary.role,
          "location": summary.location,
          "dates": `${prettyDates(summary.startDate)} to ${prettyDates(summary.endDate)}`
          // "duration": summary.durationPhrase 
          }
        Object.entries(roleSummaryFields).forEach((roleDetail) => {
          const detailType = `positonDetail${roleDetail[0].charAt(0).toUpperCase()}${roleDetail[0].slice(1)}`;
          eval(`var ${detailType} = document.createElement('p')`);
          Object.assign( eval(detailType), {
            className: detailType,
            textContent: roleDetail[1]
          });
          eval(`${detailType}`).classList.add('roleDetail');
          // eval(`${companyNameCollapsed}${index}roleSummaryContainer`).appendChild(eval(`${companyNameCollapsed}${index}${detail}`));
          eval(`${companyNameCollapsed}${index}roleSummaryRow`).appendChild(eval(`${detailType}`));
        })
        
        //Build postion narrative
        eval(`var ${companyNameCollapsed}${index}roleNarrative = document.createElement('p')`);
        Object.assign( eval(`${companyNameCollapsed}${index}roleNarrative`), {
          className: 'exproleNarrative',
          textContent: summary.Summary
        });
        eval(`${companyNameCollapsed}${index}roleContainer`).appendChild(eval(`${companyNameCollapsed}${index}roleNarrative`));

        //Build highlight list
        summary.unique = `${summary.role}${summary.name}${summary.startDate}` //Add unique to summary for matching

        const highlightsFiltered = roleHighlights.filter(({unique}) => unique.match(RegExp(summary.unique)));
        if (highlightsFiltered.length > 0) {
          eval(`var ${companyNameCollapsed}${index}HighlightList = document.createElement('ul')`);
          Object.assign( eval(`${companyNameCollapsed}${index}HighlightList`), {
            className: 'expHighlightList',
          });
          eval(`${companyNameCollapsed}${index}roleContainer`).appendChild(eval(`${companyNameCollapsed}${index}HighlightList`));

          const highlightsFiltered = roleHighlights.filter(({unique}) => unique.match(RegExp(summary.unique)));
          highlightsFiltered.forEach( (highlight,highlightIndex) => {
            eval(`var ${companyNameCollapsed}${highlightIndex}HighlightItem = document.createElement('li')`);
            Object.assign( eval(`${companyNameCollapsed}${highlightIndex}HighlightItem`), {
              className: 'expHighlightItem',
              textContent: highlight.highlight
            });
            eval(`${companyNameCollapsed}${index}HighlightList`).appendChild(eval(`${companyNameCollapsed}${highlightIndex}HighlightItem`));
          })
        }
    });
  });

  main.appendChild(sectionContainer);
}