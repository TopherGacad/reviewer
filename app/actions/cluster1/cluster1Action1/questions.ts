export const questions = [
    
    {
        id: 1,
        question: "Coulomb's law states that electrostatic force is:",
        options: [
          "Directly proportional to the square of the distance between charges.",
          "Directly proportional to the square of the product of charges.",
          "Inversely proportional to the product of charges.",
          "Inversely proportional to the square of the distance between charges."
        ],
        correctAnswer: 3, // Index of the correct answer
        rationale: "Coulomb’s Law states that electrostatic force is directly proportional to the product of the electrostatic charges and inversely proportional to the square of the distance between them."
      },
      {
        id: 2,
        question: "In a parallel circuit, which of the following rules are correct?  1. Vt=V1=V2=V3  2.Vt=V1+V2+V3  3.It=I1=I2=I3  4.It=I1+I2+I3  5.Rt=R1+R2+R3  6. 1/Rt=1/R1+1/R2+1/R3",
        options: [
          "1, 4 and 5 only",
          "1, 4 and 6 only",
          "2, 4 and 6 only",
          "1, 3 and 6 only"
        ],
        correctAnswer: 1,
        rationale: "In a parallel circuit: VT = V1 = V2 = V3 (voltage is the same across all components), IT = I1 + I2 + I3 (total current is the sum of individual currents), and 1/RT = 1/R1 + 1/R2 + 1/R3."
      },
      {
        id: 3,
        question: "Less voltage ripple results in:",
        options: [
          "Greater x-ray quantity but lesser x-ray quality.",
          "Lesser x-ray quantity but greater x-ray quality.",
          "Lesser x-ray quantity and quality.",
          "Greater x-ray quantity and quality."
        ],
        correctAnswer: 3,
        rationale: "Low voltage ripple results in higher x-ray quantity and quality."
      },
      {
        id: 4,
        question: "Which of the following statements is/are true regarding the anode heel effect?  1. Smaller actual focal spot on the anode side  2. Less radiation intensity on the anode side  3. Thicker structure is positioned on the cathode side   4.Smaller actual focal spot on the anode side",
        options: [
          "1, 2 and 4 only",
          "2 and 4 only",
          "2, 3 and 4 only",
          "1, 2, 3 and 4"
        ],
        correctAnswer: 0,
        rationale: "Anode Heel Effect: The anode side has less x-ray intensity and a smaller effective focal spot. The cathode side has higher intensity and larger focal spot blur. Thicker structures should be positioned on the cathode side."
      },
      {
        id: 5,
        question: "All of the following are the main components of an x-ray imaging system, EXCEPT:",
        options: [
          "X-ray tube",
          "Image receptor",
          "Collimator",
          "Transformer"
        ],
        correctAnswer: 2,
        rationale: "The collimator is used to limit the size and shape of the x-ray beam and is not considered a main component of the x-ray imaging system."
      },
      {
        id: 6,
        question: "This design is incorporated to the x-ray tube targets to allow large area for heating while maintaining a small focal spot.",
        options: [
          "Rotating anode",
          "Stationary anode",
          "Line focus principle",
          "Both a and b"
        ],
        correctAnswer: 2,
        rationale: "Line Focus Principle is incorporated to the x-ray tube targets to allow a large area for heating while maintaining a small focal spot."
      },
      {
        id: 7,
        question: "In the design of an autotransformer:",
        options: [
          "A single coil serves as both the primary and the secondary coils.",
          "The exposure timer is on the primary side.",
          "The major kVp adjustment and the line-voltage compensator are on the secondary side.",
          "The major kVp adjustment is on the primary side and the minor kVp adjustment is on the secondary side."
        ],
        correctAnswer: 0,
        rationale: "An autotransformer uses a single winding to serve as both primary and secondary coils, adjusting voltage as required."
      },
      {
        id: 8,
        question: "Every diagnostic x-ray tube housing must be sufficiently shielded to limit the level of exposure 1 meter from the housing to:",
        options: [
          "10 mR/hr.",
          "100 mR/hr.",
          "1000 mR/hr.",
          "A factor that varies according to kVp."
        ],
        correctAnswer: 1,
        rationale: "The shielding is required to limit the exposure to 100 mR/hr at 1 meter from the housing."
      },
      {
        id: 9,
        question: "Which of the following statements are false? 1. A high voltage transformer is a step down transformer.  2. A filament transformer is a step up transformer  3. Ohm’s law is calculated using VI=R  4. Any charge at rest induces a magnetic field  5. Volt is a unit of electric charge  6. Autotransformer law and transformer law are calculated differently  7. Autotransformer supplies voltage to the x-ray tube",
        options: [
          "1, 2, 3 , 5 and 7 only",
          "3, 4, 5, and 7 only",
          "3, 4, 5, 6 and 7 only",
          "All of the above",
        ],
        correctAnswer: 0,
        rationale: "High voltage transformer is a step-up transformer, and a filament transformer is a step-down transformer."
      },
      {
        id: 10,
        question: "AEC failure, resulting in an underexposed radiograph, can be caused by:",
        options: [
          "Processing deficiencies such as fluctuating developer temperature",
          "Improper placement of the dense breast tissue/size over the detector",
          "Decreased radiographic contrast",
          "Inadequate breast compression"
        ],
        correctAnswer: 1,
        rationale: "Improper positioning of dense tissue over the AEC detector can cause underexposure."
      },
      {
        id: 11,
        question: "Calculate the heat units generated in a three-phase, 12-pulse rectified unit with the following exposure: 250 mA, 0.7 seconds, and 200 kVp.",
        options: [
          "47,250 HU",
          "50,750 HU",
          "49,350 HU",
          "35,200 HU"
        ],
        correctAnswer: 2,
        rationale: "Heat Units = 1.41 x kVp x mA x s. For this exposure, HU = 49,350."
      },
      {
        id: 12,
        question: "This element increases the efficiency of thermionic emission:",
        options: [
          "Rhenium",
          "Molybdenum",
          "Thorium",
          "Tungsten"
        ],
        correctAnswer: 2,
        rationale: "Thorium is added to the filament to enhance thermionic emission efficiency."
      },
      {
        id: 13,
        question: "Determine the number of dots that should appear on a manual spin top test imaged for a single phase full-wave rectified unit produced with an exposure of 300 ms, 60 mA and 50 kVp.",
        options: [
          "40 dots",
          "36 dots",
          "25 dots",
          "16 dots"
        ],
        correctAnswer: 1,
        rationale: "For a full-wave rectified unit, dots = cycles/second x time. This gives 36 dots."
      },
      {
        id: 14,
        question: "Determine the number of dots that should appear on a manual spin top test imaged for a single phase half-wave unit with an exposure of 0.6s, 100 mA and 70 kVp.",
        options: [
          "40 dots",
          "36 dots",
          "25 dots",
          "16 dots"
        ],
        correctAnswer: 1,
        rationale: "For a half-wave rectified unit, dots = 60 x time. This gives 36 dots."
      },
      {
        id: 15,
        question: "In mammography, selecting extremely low kVp values:",
        options: [
          "Reduces contrast and lowers patient dose",
          "Increases contrast but increases patient dose",
          "Reduces contrast but increases patient dose",
          "Increases contrast and reduces patient dose"
        ],
        correctAnswer: 1,
        rationale: "Low kVp increases contrast but also increases the patient's dose."
      },
      {
        id: 16,
        question: "What target-filtration combination provides the best penetration for dense or thick breast?",
        options: [
          "Molybdenum target with molybdenum filtration",
          "Rhodium target with rhodium filtration",
          "Tungsten target with tungsten filtration",
          "Molybdenum target with appropriate K-edge filtration"
        ],
        correctAnswer: 1,
        rationale: "Rhodium target with rhodium filtration provides better penetration for dense breast tissue."
      },
      {
        id: 17,
        question: "Compared with radiography, the x-ray technique required for fluoroscopy calls for which of the following?",
        options: [
          "Lower mA",
          "Lower kVp",
          "Higher mAs",
          "Higher kVp"
        ],
        correctAnswer: 0,
        rationale: "Fluoroscopy requires lower mA settings compared to radiography."
      },
      {
        id: 18,
        question: "Which of the following structures is responsible for the vision of dim objects?",
        options: [
          "Cornea",
          "Pupil",
          "Iris",
          "Rod"
        ],
        correctAnswer: 3,
        rationale: "Rods are responsible for scotopic (dim light) vision, making them sensitive to low light levels."
      },
      {
        id: 19,
        question: "Which of the following is the input phosphor of image intensifiers?",
        options: [
          "Sodium Iodide",
          "Calcium Tungstate",
          "Cesium Iodide",
          "Zinc Cadmium Sulfide"
        ],
        correctAnswer: 2,
        rationale: "Cesium Iodide is the material used for the input phosphor, converting x-rays into light."
      },
      {
        id: 20,
        question: "Which of the following is the component of the image intensifier responsible for focusing the electron beam?",
        options: [
          "Glass envelope",
          "Input phosphor",
          "Output phosphor",
          "Electrostatic lens"
        ],
        correctAnswer: 3,
        rationale: "The electrostatic lens focuses the electron beam within the image intensifier."
      },
      {
        id: 21,
        question: "A transformer has a primary voltage of 240 volts and a secondary voltage of 120 volts. If the primary coil has 400 turns, how many turns are in the secondary coil?",
        options: [
          "200 turns",
          "300 turns",
          "400 turns",
          "500 turns"
        ],
        correctAnswer: 0,
        rationale: "Using the transformer formula, the secondary coil has 200 turns."
      },
      {
        id: 22,
        question: "If a transformer has a primary coil of 100 turns and a secondary coil of 50 turns, and the primary voltage is 220 volts, what is the secondary voltage?",
        options: [
          "110 V",
          "120 V",
          "220 V",
          "440 V"
        ],
        correctAnswer: 0,
        rationale: "According to the transformer formula, the secondary voltage will be 110V."
      },
      {
        id: 23,
        question: "In a transformer, the primary coil has 600 turns and the secondary coil has 100 turns. If the primary current is 2 amps, what is the secondary current?",
        options: [
          "0.33 A",
          "1.2 A",
          "6 A",
          "12 A"
        ],
        correctAnswer: 3,
        rationale: "The current in the secondary coil is calculated to be 12 A based on the transformer law."
      },
      {
        id: 24,
        question: "Two resistors, one of 5 ohms and one of 10 ohms, are connected in parallel. What is the equivalent resistance?",
        options: [
          "15 ohms",
          "7.5 ohms",
          "3.33 ohms",
          "5 ohms"
        ],
        correctAnswer: 2,
        rationale: "For resistors in parallel, the equivalent resistance is calculated to be 3.33 ohms."
      },
      {
        id: 25,
        question: "In a parallel circuit, three resistors have values of 6 ohms, 3 ohms, and 2 ohms. What is the total resistance of the circuit?",
        options: [
          "1 ohm",
          "2 ohms",
          "1.09 ohms",
          "11 ohms"
        ],
        correctAnswer: 0,
        rationale: "The total resistance of the parallel circuit is calculated to be 1 ohm."
      },
      {
        id: 26,
        question: "A single-phase, full-wave rectified x-ray unit shows 18 dots on the film during a spinning top test. What was the set exposure time?",
        options: [
          "0.15 seconds",
          "0.3 seconds",
          "0.6 seconds",
          "1.2 seconds"
        ],
        correctAnswer: 0,
        rationale: "The exposure time is 0.15 seconds based on the number of dots produced."
      },
      {
        id: 27,
        question: "During a spinning top test of a three-phase, 12-pulse x-ray machine, the film shows a 108-degree arc. What was the set exposure time?",
        options: [
          "0.1 seconds",
          "0.2 seconds",
          "0.3 seconds",
          "0.4 seconds"
        ],
        correctAnswer: 2,
        rationale: "The exposure time is calculated to be 0.3 seconds based on the arc length."
      },
      {
        id: 28,
        question: "There are 200 turns on the secondary side of a transformer and 150 turns on the primary side. If 200V AC is the output of the secondary winding, what is the voltage input in the primary winding?",
        options: [
          "550V",
          "220V",
          "150V",
          "250V"
        ],
        correctAnswer: 2,
        rationale: "Using the transformer formula, the primary voltage is calculated to be 150V."
      },
      {
        id: 29,
        question: "A transformer operates:",
        options: [
          "On both DC and AC",
          "On DC but not on AC",
          "On AC but not on DC",
          "Only above its critical current"
        ],
        correctAnswer: 2,
        rationale: "A transformer operates only on alternating current (AC)."
      },
      {
        id: 30,
        question: "The force between two electric charges:",
        options: [
          "Depends on the permeability of matter separating the electric charges.",
          "Is inversely proportional to the strength of each electric charge.",
          "Varies inversely with the distance between them.",
          "Varies directly with the distance between them."
        ],
        correctAnswer: 2,
        rationale: "According to Coulomb's law, the force between charges varies inversely with the square of the distance."
      },
      {
        id: 31,
        question: "If an automatic exposure control (AEC) device is used:",
        options: [
          "It is not necessary to depress the exposure control.",
          "The exposure starts and stops automatically.",
          "Technique selection is not necessary.",
          "A backup timer is required."
        ],
        correctAnswer: 3,
        rationale: "A backup timer is required to terminate exposure if AEC fails."
      },
      {
        id: 32,
        question: "If the AEC cell is placed over an area of adipose tissue on a breast with a mixture of adipose and glandular tissue, the areas of glandular tissue will be:",
        options: [
          "Underexposed",
          "Overexposed",
          "Normally exposed",
          "The AEC cell position will not affect the exposure."
        ],
        correctAnswer: 0,
        rationale: "Glandular tissue will be underexposed if the AEC cell is positioned over less dense adipose tissue."
      },
      {
        id: 33,
        question: "The primary goal of compression is to:",
        options: [
          "Reduce the OID of the lesion",
          "Allow uniform penetration of structures within the breast",
          "Reduce the possibility of motion during the exposure",
          "Reduce the radiation dose to the breast"
        ],
        correctAnswer: 1,
        rationale: "The primary goal of compression is to allow uniform penetration of the structures within the breast."
      },
      {
        id: 34,
        question: "Why is staff certification important in the QA process?",
        options: [
          "It reduces the number of audits required.",
          "It ensures staff have up-to-date licenses and are competent.",
          "It increases the speed of imaging procedures.",
          "It minimizes the cost of QA activities."
        ],
        correctAnswer: 1,
        rationale: "Certification ensures that staff are up-to-date on licenses and competent in their roles."
      },
      {
        id: 35,
        question: "What are Corrective and Preventive Actions (CAPA) in the QA process designed to do?",
        options: [
          "Address identified issues and mitigate future risks",
          "Increase patient throughput",
          "Simplify imaging procedures",
          "Reduce training requirements for staff"
        ],
        correctAnswer: 0,
        rationale: "CAPA is designed to address identified issues and mitigate future risks in the QA process."
      },
      {
        id: 36,
        question: "As a radiologic technologist, you perform daily checks of radiographic equipment to ensure it is within the manufacturer’s specifications. What is this an example of?",
        options: [
          "Quality Assurance (QA)",
          "Quality Management (QM)",
          "Quality Control (QC)",
          "None of the above"
        ],
        correctAnswer: 2,
        rationale: "Quality Control (QC) involves checking equipment performance to ensure it meets the required standards."
      },
      {
        id: 37,
        question: "You are tasked with developing a new quality management system for your radiology department. Which of the following would be included in this system?",
        options: [
          "Implementing patient positioning protocols - QA",
          "Regular equipment calibration and maintenance - QC",
          "Integrating QA and QC processes with strategic planning - QM",
          "All of the above"
        ],
        correctAnswer: 3,
        rationale: "A complete quality management system (QM) integrates QA, QC, and strategic planning."
      },
      {
        id: 38,
        question: "A technologist conducts a routine phantom imaging test to verify the accuracy of radiologic images. What component of quality management does this activity represent?",
        options: [
          "Quality Management (QM)",
          "Quality Assurance (QA)",
          "Quality Control (QC)",
          "None of the above"
        ],
        correctAnswer: 2,
        rationale: "Performing routine tests to check equipment accuracy falls under Quality Control (QC)."
      },
      {
        id: 39,
        question: "Your department is analyzing patient feedback to improve service quality. This activity is part of which quality management component?",
        options: [
          "Quality Control (QC)",
          "Quality Assurance (QA)",
          "Quality Management (QM)",
          "None of the above"
        ],
        correctAnswer: 1,
        rationale: "Patient feedback analysis is part of Quality Assurance (QA) to improve service quality."
      },
      {
        id: 40,
        question: "Which of the following tests is performed to evaluate screen contact?",
        options: [
          "Spinning top test",
          "Wire mesh test",
          "Penetrometer test",
          "Star pattern test"
        ],
        correctAnswer: 1,
        rationale: "The wire mesh test is used to evaluate screen-film contact in radiography."
      },
      {
        id: 41,
        question: "These are equipment with parallel lines with varying spacing, used to measure the spatial resolution of an imaging system:",
        options: [
          "Line Pair Phantom",
          "Bar Phantom",
          "Cheese Phantom",
          "Duke Phantom"
        ],
        correctAnswer: 0,
        rationale: "Line Pair Phantoms are used to measure the spatial resolution of imaging systems."
      },
      {
        id: 42,
        question: "Geometric blur can be evaluated using all the following devices except:",
        options: [
          "Star pattern",
          "Slit camera",
          "Penetrometer",
          "Pinhole camera"
        ],
        correctAnswer: 2,
        rationale: "A penetrometer is used for contrast evaluation, not for measuring geometric blur."
      },
      {
        id: 43,
        question: "In a department, 500 films were processed in one week. During a reject film analysis, it was found that 25 films were rejected. What is the overall reject rate for the week?",
        options: [
          "4%",
          "5%",
          "6%",
          "7%"
        ],
        correctAnswer: 1,
        rationale: "The reject rate is calculated as (25/500) * 100 = 5%."
      },
      {
        id: 44,
        question: "If a radiology department aims to maintain a reject rate below 2%, how many films can be rejected out of 600 processed films to meet this goal?",
        options: [
          "10",
          "12",
          "14",
          "16"
        ],
        correctAnswer: 1,
        rationale: "A 2% reject rate means 12 rejected films out of 600."
      },
      {
        id: 45,
        question: "A department processes 750 films monthly, and their goal is to have a reject rate no higher than 3%. Last month, 28 films were rejected. Did they meet their goal?",
        options: [
          "Yes, because the reject rate is 2.8%",
          "Yes, because the reject rate is 3.2%",
          "No, because the reject rate is 2.8%",
          "No, because the reject rate is 3.2%"
        ],
        correctAnswer: 3,
        rationale: "The reject rate is (28/750) * 100 = 3.73%, which exceeds their 3% goal."
      },
      {
        id: 46,
        question: "A hospital reviews their reject rate quarterly. Over the last quarter, they processed 1800 films and rejected 90 films. What is their quarterly reject rate?",
        options: [
          "4.5%",
          "5%",
          "5.5%",
          "6%"
        ],
        correctAnswer: 1,
        rationale: "The reject rate is calculated as (90/1800) * 100 = 5%."
      },
      {
        id: 47,
        question: "What is the purpose of doing a Shutter efficiency test?",
        options: [
          "Closing the shutters in the collimator fully should allow any radiation from reaching the film.",
          "Useful for testing radiation safety when charging capacitor discharge mobiles or making tube warm up exposures.",
          "Closing the shutters in the collimator fully should prevent any radiation from reaching the film.",
          "Useful for testing radiation safety when discharging capacitor discharge mobiles or making automatic exposures."
        ],
        correctAnswer: 2,
        rationale: "The purpose of the shutter efficiency test is to ensure no radiation leaks through the collimator when closed."
      },
      {
        id: 48,
        question: "In testing the accuracy of kVp, what is the margin for measured exposure?",
        options: [
          "+/- 2",
          "+/- 4",
          "+/- 5",
          "+/- 6"
        ],
        correctAnswer: 2,
        rationale: "The acceptable margin for kVp accuracy is +/- 5."
      },
      {
        id: 49,
        question: "What is the acceptable safelight handling time?",
        options: [
          "4 minutes",
          "2.5 minutes",
          "5 minutes",
          "3.5 minutes"
        ],
        correctAnswer: 3,
        rationale: "The acceptable safelight handling time is 3.5 minutes to avoid film fogging."
      },
      {
        id: 50,
        question: "After performing a white light fogging test inside the darkroom, which of the following should you pay attention to?",
        options: [
          "Black fogging at the edge of the film",
          "Localized blurring.",
          "Densities of uncovered and covered side of the film is unequal",
          "Area of higher density"
        ],
        correctAnswer: 0,
        rationale: "Black fogging at the edge of the film indicates a white light leak in the darkroom."
      }
      
      
]