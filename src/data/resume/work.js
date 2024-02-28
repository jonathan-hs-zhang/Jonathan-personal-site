/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: '3D printer temperature control system',
    position: 'Researcher',
    url: 'https://students.ubc.ca/career/events-workshops/multidisciplinary-undergraduate-research-conference',
    startDate: '2022-09-01',
    endDate: '2023-04-30',
    jumpto: '/murc_pr',
    summary: ` Kezi Li, a UBC PhD student, kezili@yahoo.com, supervised our research on improving 3D printer temperature control. 
    The team devised a direct feedforward model to expedite temperature setup, enhancing accuracy for subsequent feedback adjustments. 
    We validated their model using Simulink and presented their findings at the UBC Multidisciplinary Undergraduate Research Conference (MURC).`,
    highlights: [
      'Researched on 3D printer molten pool and its temperature controlling method and control model.',
      'Designed a feedforward control system consist of a pyrometer inquiring temperature as input, dynamically controlling voltage output by Simulink.',
      'Modified the existing feedback control models to a second-order state-space feedforward control system.',
      'Verified the design by Matlab and achieved a 5% reduction in temperature change time delay.',
    ],
  },
  {
    name: '3D Mapping glasses prototype',
    position: 'Hardware Team Developer',
    url: 'https://youtu.be/S8IF_UF8q8E',
    startDate: '2022-09-01',
    endDate: '2023-04-30',
    summary: `A start-up company, <a href="https://www.seleste.co/">Seleste</a>, aims to verify the concept of utilizing a stereo camera for constructing a 3D mapping model to aid indoor navigation for the visually impaired via their product. 
    My teammate and I endeavored to develop both a hardware system and an iOS application to fulfill this functionality. 
    Throughout the project, we created a standalone hardware stereo system to assess the viability of utilizing stereo cameras to meet Selest's requirements independently of their existing product.`,
    highlights: [
      'Created a prototype with a stereo camera and Raspberry Pi 2 to capture 3D depth cloud points of office room obstacles.',
      'Authored a Python script for Raspberry Pi 2 to autonomously capture stereo photos and transmit them to the iOS app.',
      'Created an iOS app with React Native, integrating 3D glasses hardware to enhance accessibility for visually impaired users.',
    ],
  },
  {
    name: 'Retro Snake Arcade game',
    position: 'Developer',
    url: 'https://youtu.be/CVaYIhPWGNk',
    jumpto: 'https://github.com/zhs126/RetroSnakeArcadeGame',
    startDate: '2023-01-01',
    endDate: '2023-04-30',
    summary: `Worked on a project involving the implementation of a hardware design on Quartus, 
    the design and integration of a snake game, and the utilization of built-in timer and interrupts on M68K for RTOS. 
    This project allowed me to apply my skills in hardware coding with Verilog and VHDL, and software coding with C.`,
    highlights: [
      'Successfully integrated the snake game using the M68K processor and VGA core for both software and hardware implementation, enabling display on the screen from DE1-SOC using VGA.',
      'Executed Quartus hardware design project with 80*40 VGA xc3s400-4ft256, utilizing IP cores (2-port RAM, ROM, PLL).',
      "Implemented M68K's built-in timer and interrupts for Real Time Operating System, ensuring smooth and responsive gameplay.",
      'Applied Verilog and VHDL for hardware coding and C for efficient software performance.',
    ],
  },
  {
    name: 'SCARA Robot',
    position: 'Co-founder & C.T.O.',
    url: 'https://youtu.be/--zV-EIfd0Y',
    jumpto: 'https://github.com/zhs126/SCARARobotArm',
    startDate: '2022-01-01',
    endDate: '2022-05-01',
    summary: `asv,
    shdht`,
    highlights: [
      'Designed a selective compliance assembly robot arm to locate and pick up objects.',
      'Utilized Solidwork to make the prototype of the robot arm and simulate the picking-up move using Matlab and SimulationX.',
      'Designed a PCB of robot’s control circuit and power model.',
      'Compared with other SCARA Robots, my robot does better in producing balabala.',
    ],
  },
  {
    name: 'Quantum Algorithm Implementation',
    position: 'ML Engineering Contractr',
    url: 'http://enveritas.org',
    startDate: '2016-09-01',
    endDate: '2018-01-01',
    summary: `Enveritas is a non-profit that works with coffee farmers to improve their livelihoods.
    I joined on day one and helped build a variety of tools to collect and analyze data. I also advised
    on technical strategy, helped hire engineers, and advised on their YC application.`,
    highlights: [
      'Trained a model for the Brazilian Coffee Scenes Dataset with better than state of the art accuracy.',
      'Collected training sets on the ground in Uganda. Built dashboards to visualize work of surveyors using Flask, React, and D3.',
      'Performed supporting analysis to ensure data integrity using Pandas, t-SNE, SVM\'s, and other techniques.',
    ],
  },
  {
    name: 'Quantum Algorithm Implementation',
    position: 'Researcher and Developer',
    url: 'http://enveritas.org',
    startDate: '2016-09-01',
    endDate: '2018-01-01',
    summary: `Enveritas is a non-profit that works with coffee farmers to improve their livelihoods.
    I joined on day one and helped build a variety of tools to collect and analyze data. I also advised
    on technical strategy, helped hire engineers, and advised on their YC application.`,
    highlights: [
      'Trained a model for the Brazilian Coffee Scenes Dataset with better than state of the art accuracy.',
      'Collected training sets on the ground in Uganda. Built dashboards to visualize work of surveyors using Flask, React, and D3.',
      'Performed supporting analysis to ensure data integrity using Pandas, t-SNE, SVM\'s, and other techniques.',
    ],
  },
  {
    name: 'Bragg Grating Cavity Design',
    position: 'Designer',
    url: 'https://zenysis.com',
    startDate: '2016-02-01',
    endDate: '2016-03-01',
    summary: `Zenysis develops data analysis and visualization tools for government agencies and international organizations.
    Their solutions help improve decision-making by integrating and analyzing large-scale datasets from various sources.
    I was the second contributor to the codebase. We built data visualization tools and tackled complex data ingestion
    challenges for the Ethiopian Ministry of Health.`,
    highlights: [
      'Worked in Addis Ababa for the Ethiopian Ministry of Health and built data visualization tools in React and Flask.',
      'Ingested multiple databases with different alphabets, calendars, and without official spellings of geographic locations.',
    ],
  },
];

export default work;
