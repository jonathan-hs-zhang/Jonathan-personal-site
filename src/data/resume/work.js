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
    jumpto: '/murc',
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
    name: 'DESIGN OF A MEMORY SYSTEM BASED ON M68K ON FPGA',
    position: 'Developer',
    url: 'https://zenysis.com',
    startDate: '2023-01-01',
    endDate: '2023-05-01',
    summary: `Worked on a project involving the design and implementation of various memory controllers,
     the development of an IIC (I2C), SPI Controller, EEPROM, and ADC system, 
     and the creation of a user monitor program and debugging program. 
     This project also involved the integration of an RTOS and Canbus Network Controller.`,
    highlights: [
      'Designed and implemented SRAM, DRAM, SPI Flash, and RAM controllers for efficient memory access and data storage.',
      'Developed an IIC (I2C),SPI Controller, EEPROM, and ADC system to interface with external devices and sensors.',
      'Created a user monitor program and debugging program, enhancing the functionality and usability of the memory system.',
      'Integrated an RTOS and Canbus Network Controller to enable real-time communication and networking capabilities within the M68K system.',
    ],
  },
  {
    name: 'SCARA Robot',
    position: 'CAD Designer',
    url: 'https://youtu.be/--zV-EIfd0Y',
    jumpto: 'https://github.com/zhs126/SCARARobotArm',
    startDate: '2022-01-01',
    endDate: '2022-05-01',
    summary: `This report highlights the electrical hardware system of a pick and place scara robot arm. 
    The arm comprises of two joints that allow it to move its end effector anywhere in a 2D plane. 
    The system is powered using a 480W 24V power supply. 
    Custom H Bridge MOSFET Motor Drivers are designed to allow the robot to move its arms. 
    A data acquisition board is developed that allows the robot to continuously monitor the position of the motors. 
    Finally, all the boards are mounted on top of a motherboard that connects them together and to the microcontroller.
    This paper is divided into eight sections. `,
    highlights: [
      'Designed a selective compliance assembly robot arm to locate and pick up objects.',
      'Utilized Solidwork to make the prototype of the robot arm and simulate the picking-up move using Matlab and SimulationX.',
      'Designed a PCB of robot’s control circuit and power model.',
      'Compared with other SCARA Robots, my robot does better in producing balabala.',
    ],
  },
  {
    name: 'Metal detector',
    position: 'Developer',
    url: 'http://enveritas.org',
    startDate: '2021-01-01',
    endDate: '2021-05-01',
    summary: `adbada
    adasdasd`,
    highlights: [
      'Assembled the control circuit on a bread board and wire-wound coil to build a metal detector prototype.',
      'Embedded the microcontroller (STM32) using C for data processing, displaying, Timer Interrupt generating and pins connection.',
      'Utilized the prototype to detect metal and distinguish the type based on inducted current received on the coil to determine the ferruginosity.',
    ],
  },
  {
    name: 'Quantum Algorithm Implementation',
    position: 'Machine Learning Developer',
    url: 'http://enveritas.org',
    startDate: '2023-01-01',
    endDate: '2023-05-01',
    summary: `abc
    acbas`,
    highlights: [
      'Employed Pennylane, a Python package, to implement Delegated variational quantum algorithms based on quantum homomorphic encryption, which is a new developed concept of data encryption and transmission based on quantum computing.',
      'Trained a machine learning model that takes the MNIST dataset and detects the figure after quantum transformation and quantum transmission.',
    ],
  },
  {
    name: 'Bragg Grating Cavity Design',
    position: 'Designer',
    url: 'https://zenysis.com',
    startDate: '2023-01-01',
    endDate: '2023-05-01',
    summary: `abc
    adsad`,
    highlights: [
      'Designed a 1310nm central wavelength Fabry-Perot cavity-based Bragg grating resonator using Klayout to maximize Q factor.',
      'Simulated and analyzed the resonator’s performance by comparing the measurement of the printed fabrication in lab and simulation of running Lumerical MODE, FDTD and Interconnet.',
    ],
  },
  {
    name: 'Computer Architecture Improvements',
    position: 'Software Developer',
    url: 'https://zenysis.com',
    startDate: '2022-09-01',
    endDate: '2023-01-01',
    summary: `abc
    adsad`,
    highlights: [
      'Compared Modern cache replacement policies (BIP, DIP, Pseudo-tree) by C++ to find the optimized cache performance method.',
      'Improved computer performance by Out-of-order execution Pipelining basing on Tomasulo’s Algorithm using C++.',
      'Improved Branch Prediction accuracy by Correlated Saturation Counter using C++.',
    ],
  },
  {
    name: 'NAND3 Gate Level Cadence Design',
    position: 'Designer',
    url: 'https://zenysis.com',
    startDate: '2023-01-01',
    endDate: '2023-05-01',
    summary: `abc
    adsad`,
    highlights: [
      'Designed a schematic and built a MOSFET layout of a NAND3 gate on Cadence Virtuoso using Cadence45nm PDK.',
      'Verified the design by comparing the calculation and the result (voltage, propagation delay) from the output waveforms of the FSM layout simulation on Cadence Virtuoso ADE and WV.',
    ],
  },
];

export default work;
