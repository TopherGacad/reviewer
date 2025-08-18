export const mock_exam_hard = [
  {
    id: 51,
    question: "What is the half-life of a radioisotope if its activity decreases from 800 Bq to 100 Bq in 6 hours?",
    options: ["1 hour", "2 hours", "3 hours", "4 hours"],
    correctAnswer: "3 hours",
    rationale:
      "Use the equation A = A0 * (1/2)^(t/T), where t is the elapsed time and T is the half-life. The half-life is approximately 3 hours.",
  },
  {
    id: 52,
    question: "A patient is to receive 120 mGy of radiation over 20 minutes. What is the average dose rate in mGy/min?",
    options: ["5 mGy/min", "6 mGy/min", "7 mGy/min", "8 mGy/min"],
    correctAnswer: "6 mGy/min",
    rationale: "Divide the total dose by the time: 120 mGy ÷ 20 min = 6 mGy/min.",
  },
  {
    id: 53,
    question:
      "What is the total effective dose (in Sieverts) if a radiologic technologist is exposed to 2 mGy of alpha particles and 4 mGy of gamma radiation? Assume radiation weighting factors of 20 for alpha and 1 for gamma.",
    options: ["0.044 Sv", "0.026 Sv", "0.032 Sv", "0.048 Sv"],
    correctAnswer: "0.044 Sv",
    rationale:
      "Total dose = (2 mGy * 20) + (4 mGy * 1) = 40 + 4 = 44 mGy = 0.044 Sv. However, this is the *equivalent dose*. The effective dose considers tissue weighting factors.",
  },
  {
    id: 54,
    question:
      "A CT scan delivers an absorbed dose of 30 mGy. If the tissue being scanned has a tissue weighting factor of 0.12, what is the equivalent dose in mSv?",
    options: ["2.5 mSv", "3.6 mSv", "4.0 mSv", "6.0 mSv"],
    correctAnswer: "3.6 mSv",
    rationale: "The equivalent dose = absorbed dose * tissue weighting factor. Therefore, 30 mGy * 0.12 = 3.6 mSv.",
  },
  {
    id: 55,
    question:
      "If a radiographer uses an 8:1 grid for an exposure and then switches to a 16:1 grid, what compensation should be made to the mAs to maintain image quality?",
    options: ["Double the mAs", "Triple the mAs", "Increase mAs by 50%", "No change"],
    correctAnswer: "Double the mAs",
    rationale:
      "Moving from an 8:1 to a 16:1 grid requires doubling the mAs to compensate for the increased grid ratio, which absorbs more scatter.",
  },
  {
    id: 56,
    question:
      "During fluoroscopy, a radiologist reduces the pulse rate from 30 pulses per second to 15 pulses per second. How will this affect patient dose?",
    options: ["Dose is reduced by half", "Dose remains the same", "Dose is reduced by one-third", "Dose is doubled"],
    correctAnswer: "Dose is reduced by half",
    rationale:
      "By reducing the pulse rate by half, the patient dose is also reduced by half as fewer x-ray pulses are delivered over time.",
  },
  {
    id: 57,
    question:
      "Calculate the entrance skin dose (ESD) for a chest x-ray that delivers an exposure of 10 mGy at 100 cm SID. If the SID is reduced to 50 cm, what is the new ESD?",
    options: ["20 mGy", "40 mGy", "80 mGy", "160 mGy"],
    correctAnswer: "40 mGy",
    rationale:
      "ESD follows the inverse square law. Halving the distance (100 cm to 50 cm) results in a 4x increase in dose: 10 mGy * 4 = 40 mGy.",
  },
  {
    id: 58,
    question:
      "A technologist must maintain a safe distance from a patient during a fluoroscopic procedure. If the initial exposure rate is 1 mGy/min at 1 meter, what will the exposure rate be at 3 meters?",
    options: ["0.11 mGy/min", "0.22 mGy/min", "0.33 mGy/min", "0.44 mGy/min"],
    correctAnswer: "0.11 mGy/min",
    rationale:
      "According to the inverse square law, tripling the distance reduces exposure by a factor of 9: 1 mGy/min ÷ 9 = 0.11 mGy/min.",
  },
  {
    id: 59,
    question:
      "A radiology department is performing quality control tests. A 2 cm object appears 3 cm in size on the radiograph. What is the magnification factor?",
    options: ["1.5", "1.75", "2.0", "2.5"],
    correctAnswer: "1.5",
    rationale: "The magnification factor is calculated as image size/object size: 3 cm ÷ 2 cm = 1.5.",
  },
  {
    id: 60,
    question: "If the exposure time for a radiograph is 0.25 seconds at 200 mA, what is the mAs for this exposure?",
    options: ["25 mAs", "50 mAs", "75 mAs", "100 mAs"],
    correctAnswer: "50 mAs",
    rationale: "mAs = mA * time. For this problem: 200 mA * 0.25 seconds = 50 mAs.",
  },
  {
    id: 61,
    question:
      "A patient receives an effective dose of 2 Sv from a diagnostic procedure. If the tissue weighting factor for the organ exposed is 0.05, what was the absorbed dose (in Gy)?",
    options: ["10 Gy", "20 Gy", "30 Gy", "40 Gy"],
    correctAnswer: "40 Gy",
    rationale:
      "The effective dose is the product of the absorbed dose and the tissue weighting factor. Thus, 2 Sv = absorbed dose * 0.05, giving absorbed dose = 2 Sv / 0.05 = 40 Gy.",
  },
  {
    id: 62,
    question:
      "If an x-ray beam has an original intensity of 400 mGy and passes through a material that reduces its intensity by 50%, what is the remaining intensity after passing through an additional material that reduces intensity by another 50%?",
    options: ["100 mGy", "200 mGy", "50 mGy", "25 mGy"],
    correctAnswer: "100 mGy",
    rationale: "The first 50% reduction leaves 200 mGy. A second 50% reduction leaves 100 mGy.",
  },
  {
    id: 63,
    question:
      "A fluoroscopic examination delivers a dose rate of 0.5 mGy/min. If the procedure takes 12 minutes, what is the total dose delivered?",
    options: ["6 mGy", "12 mGy", "3 mGy", "18 mGy"],
    correctAnswer: "6 mGy",
    rationale: "Total dose = dose rate * time. Therefore, 0.5 mGy/min * 12 min = 6 mGy.",
  },
  {
    id: 64,
    question:
      "For a barium enema, a technologist uses an exposure time of 0.1 seconds with a tube current of 300 mA. What is the resulting mAs?",
    options: ["30 mAs", "60 mAs", "90 mAs", "120 mAs"],
    correctAnswer: "30 mAs",
    rationale: "mAs = mA * time. So, 300 mA * 0.1 s = 30 mAs.",
  },
  {
    id: 65,
    question:
      "If a technologist increases the SID from 100 cm to 150 cm, how must the mAs be adjusted to maintain the same exposure?",
    options: ["Increase mAs by 2.25x", "Increase mAs by 1.5x", "Increase mAs by 2x", "Increase mAs by 3x"],
    correctAnswer: "Increase mAs by 2.25x",
    rationale:
      "Use the inverse square law. (150/100)^2 = 2.25. The mAs must be increased by 2.25x to compensate for the increased SID.",
  },
  {
    id: 66,
    question:
      "A computed tomography (CT) scanner delivers an effective dose of 12 mSv. If the tissue weighting factor for the exposed organ is 0.01, what is the equivalent dose in mSv?",
    options: ["100 mSv", "120 mSv", "240 mSv", "12 mSv"],
    correctAnswer: "120 mSv",
    rationale: "Equivalent dose is calculated as effective dose / tissue weighting factor: 12 mSv ÷ 0.01 = 120 mSv.",
  },
  {
    id: 67,
    question:
      "A portable chest x-ray is performed at 80 kVp, 2 mAs at 180 cm SID. What will the new mAs be if the SID is reduced to 90 cm to maintain the same image exposure?",
    options: ["0.5 mAs", "1 mAs", "4 mAs", "8 mAs"],
    correctAnswer: "0.5 mAs",
    rationale:
      "Using the inverse square law, (180/90)^2 = 4. To maintain exposure, mAs is divided by 4: 2 mAs / 4 = 0.5 mAs.",
  },
  {
    id: 68,
    question:
      "If a radiographer decreases the tube current from 400 mA to 200 mA but doubles the exposure time, how is the image brightness affected?",
    options: ["Increased by 50%", "Decreased by 50%", "Remains the same", "Increased by 100%"],
    correctAnswer: "Remains the same",
    rationale: "The product of mA and time (mAs) remains the same, so the image brightness is unaffected.",
  },
  {
    id: 69,
    question:
      "What is the maximum permissible occupational dose for a radiologic technologist per year according to ICRP recommendations?",
    options: ["10 mSv", "20 mSv", "50 mSv", "100 mSv"],
    correctAnswer: "50 mSv",
    rationale:
      "The maximum permissible occupational dose for radiologic technologists is 50 mSv per year, according to ICRP guidelines.",
  },
  {
    id: 70,
    question:
      "If the entrance skin exposure (ESE) for a specific procedure is 2 mGy at 100 cm SID, what will the ESE be if the SID is reduced to 50 cm?",
    options: ["8 mGy", "4 mGy", "2 mGy", "16 mGy"],
    correctAnswer: "8 mGy",
    rationale:
      "Using the inverse square law, halving the SID increases the exposure by a factor of 4: 2 mGy * 4 = 8 mGy.",
  },
  {
    id: 71,
    question: "Which of the following radiographic techniques most significantly reduces patient dose?",
    options: ["Increasing SID", "Using a grid", "Increasing kVp and reducing mAs", "Decreasing kVp and increasing mAs"],
    correctAnswer: "Increasing kVp and reducing mAs",
    rationale:
      "Increasing kVp and reducing mAs lowers the patient's overall radiation dose by using higher energy photons and fewer x-rays.",
  },
  {
    id: 72,
    question:
      "A fluoroscopy exam lasts 10 minutes at a dose rate of 4 mGy/min. If the operator steps back from 1 meter to 2 meters from the source, what will the new dose rate be at 2 meters?",
    options: ["1 mGy/min", "2 mGy/min", "0.5 mGy/min", "0.25 mGy/min"],
    correctAnswer: "1 mGy/min",
    rationale:
      "According to the inverse square law, doubling the distance decreases the dose rate by a factor of 4. 4 mGy/min ÷ 4 = 1 mGy/min.",
  },
  {
    id: 73,
    question:
      "In MRI, what parameter should be adjusted to improve the signal-to-noise ratio (SNR) without increasing patient exposure?",
    options: [
      "Increase slice thickness",
      "Decrease repetition time (TR)",
      "Decrease flip angle",
      "Increase matrix size",
    ],
    correctAnswer: "Increase slice thickness",
    rationale:
      "Increasing the slice thickness improves the signal-to-noise ratio (SNR) without affecting patient exposure, as it gathers more signal from a larger volume of tissue.",
  },
  {
    id: 74,
    question:
      "Which type of detector is commonly used in digital radiography to convert x-rays directly into an electrical signal?",
    options: [
      "Photostimulable phosphor",
      "Indirect flat-panel detector",
      "Direct flat-panel detector",
      "Image intensifier",
    ],
    correctAnswer: "Direct flat-panel detector",
    rationale:
      "Direct flat-panel detectors convert x-rays directly into an electrical signal without the use of an intermediate light stage.",
  },
  {
    id: 75,
    question:
      "A radiographic image was acquired using a 12:1 grid and 80 kVp. If the technologist switches to a 5:1 grid while keeping kVp constant, what adjustment should be made to mAs to maintain image density?",
    options: ["Reduce mAs by 50%", "Reduce mAs by 66%", "Increase mAs by 50%", "Increase mAs by 66%"],
    correctAnswer: "Reduce mAs by 66%",
    rationale:
      "The lower grid ratio (5:1) allows more scatter to reach the receptor, so mAs can be reduced by approximately 66% to maintain the same image density.",
  },
  {
    id: 76,
    question:
      "In a lateral skull radiograph, what anatomic structure should be superimposed to ensure proper positioning?",
    options: ["Mandibular rami", "Orbital ridges", "Occipital bone", "Nasal septum"],
    correctAnswer: "Mandibular rami",
    rationale:
      "In a properly positioned lateral skull radiograph, the mandibular rami should be superimposed to ensure no rotation of the head.",
  },
  {
    id: 77,
    question:
      "A digital radiograph was acquired at 90 kVp and 6 mAs. If the technologist increases kVp to 100, what should the new mAs be to maintain image brightness?",
    options: ["3 mAs", "4.5 mAs", "5 mAs", "2.5 mAs"],
    correctAnswer: "4.5 mAs",
    rationale:
      "Using the 15% rule, increasing kVp by 15% requires halving the mAs. Reducing mAs by half gives 3 mAs. The next highest mAs option is 4.5 mAs, typically used in small adjustments.",
  },
  {
    id: 78,
    question:
      "During an abdominal fluoroscopy, the patient receives a dose of 5 mGy/min. If the procedure lasts 8 minutes, what is the total dose received?",
    options: ["10 mGy", "25 mGy", "40 mGy", "35 mGy"],
    correctAnswer: "40 mGy",
    rationale: "Total dose = dose rate * time. So, 5 mGy/min * 8 min = 40 mGy.",
  },
  {
    id: 79,
    question:
      "A radiograph was taken at 120 kVp, 5 mAs, and a SID of 180 cm. To achieve the same exposure at a SID of 90 cm, what should the new mAs be?",
    options: ["0.75 mAs", "1.25 mAs", "1.5 mAs", "2.0 mAs"],
    correctAnswer: "1.25 mAs",
    rationale:
      "According to the inverse square law: (180/90)^2 = 4. To compensate for halving the SID, reduce the mAs by a factor of 4. 5 mAs / 4 = 1.25 mAs.",
  },
  {
    id: 80,
    question:
      "A radiographer exposes a chest x-ray at 110 kVp, 2.5 mAs, and 100 cm SID. If the exposure is repeated at 200 cm SID, what should the new mAs be to maintain the same exposure?",
    options: ["5 mAs", "7.5 mAs", "10 mAs", "12.5 mAs"],
    correctAnswer: "10 mAs",
    rationale:
      "Doubling the SID from 100 cm to 200 cm increases the exposure area by a factor of 4. To maintain the same exposure, mAs must also increase by a factor of 4, so 2.5 mAs * 4 = 10 mAs.",
  },
  {
    id: 81,
    question:
      "A technologist is performing an AP projection of the lumbar spine at 85 kVp and 20 mAs. If the kVp is increased by 15%, what should the new mAs be to maintain the same exposure?",
    options: ["10 mAs", "12 mAs", "15 mAs", "20 mAs"],
    correctAnswer: "10 mAs",
    rationale:
      "The 15% rule suggests that increasing kVp by 15% allows a reduction in mAs by half. Therefore, the new mAs should be 20 mAs ÷ 2 = 10 mAs.",
  },
  {
    id: 82,
    question:
      "A patient is exposed to a fluoroscopic procedure for 15 minutes with a dose rate of 3 mGy/min. If the procedure continues for another 5 minutes at a reduced dose rate of 1.5 mGy/min, what is the total dose received?",
    options: ["52.5 mGy", "45 mGy", "67.5 mGy", "75 mGy"],
    correctAnswer: "52.5 mGy",
    rationale: "Total dose = (15 min * 3 mGy/min) + (5 min * 1.5 mGy/min) = 45 mGy + 7.5 mGy = 52.5 mGy.",
  },
  {
    id: 83,
    question:
      "What adjustment should be made if a technologist reduces SID from 150 cm to 100 cm to maintain the same image brightness?",
    options: ["Decrease mAs by 1/3", "Decrease mAs by 1/2", "Decrease mAs by 2/3", "No change in mAs"],
    correctAnswer: "Decrease mAs by 1/2",
    rationale: "Reducing SID from 150 cm to 100 cm reduces the distance by 1/3, so the mAs should be reduced by 1/2.",
  },
  {
    id: 84,
    question: "In MRI, how does decreasing the echo time (TE) affect image contrast?",
    options: ["Improves T1 contrast", "Reduces T2 weighting", "Increases scan time", "Enhances tissue detail"],
    correctAnswer: "Reduces T2 weighting",
    rationale: "Decreasing the echo time (TE) reduces T2 weighting, as less time is allowed for transverse relaxation.",
  },
  {
    id: 85,
    question:
      "A CT scan delivers an absorbed dose of 50 mGy. The tissue weighting factor for the organ exposed is 0.05. What is the equivalent dose in mSv?",
    options: ["5 mSv", "2.5 mSv", "10 mSv", "20 mSv"],
    correctAnswer: "2.5 mSv",
    rationale: "Equivalent dose = absorbed dose * tissue weighting factor. Therefore, 50 mGy * 0.05 = 2.5 mSv.",
  },
  {
    id: 86,
    question: "Which factor has the most significant impact on increasing spatial resolution in digital radiography?",
    options: ["Increasing mAs", "Increasing SID", "Decreasing focal spot size", "Using a higher kVp"],
    correctAnswer: "Decreasing focal spot size",
    rationale:
      "Decreasing focal spot size improves spatial resolution by reducing penumbra, which sharpens the edges of the image.",
  },
  {
    id: 87,
    question:
      "What is the result of increasing collimation (narrowing the x-ray beam) during a radiographic procedure?",
    options: [
      "Decreased patient dose",
      "Increased patient dose",
      "Decreased image contrast",
      "Increased scatter radiation",
    ],
    correctAnswer: "Decreased patient dose",
    rationale:
      "Increasing collimation reduces the amount of tissue exposed, which decreases patient dose and improves image contrast by reducing scatter.",
  },
  {
    id: 88,
    question:
      "A radiologic technologist stands 2 meters away from the x-ray source during an exposure and receives 0.2 mGy. If the technologist moves to 4 meters away from the source, what will be their new exposure?",
    options: ["0.05 mGy", "0.1 mGy", "0.4 mGy", "0.8 mGy"],
    correctAnswer: "0.05 mGy",
    rationale:
      "Using the inverse square law, doubling the distance decreases the exposure by a factor of 4. 0.2 mGy / 4 = 0.05 mGy.",
  },
  {
    id: 89,
    question:
      "If the radiographic technique is changed from 70 kVp and 12 mAs to 85 kVp, what should the new mAs be to maintain the same exposure?",
    options: ["6 mAs", "9 mAs", "10 mAs", "8 mAs"],
    correctAnswer: "6 mAs",
    rationale: "Increasing kVp by 15% allows the mAs to be halved. Therefore, 12 mAs / 2 = 6 mAs.",
  },
  {
    id: 90,
    question: "In fluoroscopy, what is the purpose of the last image hold (LIH) feature?",
    options: [
      "Reduces image noise",
      "Decreases patient dose",
      "Increases image brightness",
      "Decreases image contrast",
    ],
    correctAnswer: "Decreases patient dose",
    rationale:
      "The last image hold (LIH) feature reduces patient dose by displaying the last captured image without requiring continuous x-ray exposure.",
  },
  {
    id: 91,
    question: "In digital radiography, what is the main benefit of using a higher matrix size in an image acquisition?",
    options: [
      "Reduced image file size",
      "Increased spatial resolution",
      "Increased patient dose",
      "Decreased image contrast",
    ],
    correctAnswer: "Increased spatial resolution",
    rationale:
      "A higher matrix size increases spatial resolution by providing more pixels to capture finer details in the image.",
  },
  {
    id: 92,
    question:
      "If a radiologic technologist performs a portable chest x-ray at 100 kVp and 4 mAs at a SID of 100 cm, how should the mAs be adjusted to maintain the same exposure at a SID of 150 cm?",
    options: ["6 mAs", "8 mAs", "9 mAs", "12 mAs"],
    correctAnswer: "9 mAs",
    rationale:
      "Using the inverse square law: (150/100)^2 = 2.25. The mAs must be multiplied by 2.25. 4 mAs * 2.25 = 9 mAs.",
  },
  {
    id: 93,
    question:
      "A technologist performs a radiographic exposure at 80 kVp and 10 mAs. If the kVp is increased to 92, what should the new mAs be to maintain the same image brightness?",
    options: ["5 mAs", "7 mAs", "9 mAs", "4 mAs"],
    correctAnswer: "5 mAs",
    rationale:
      "The 15% rule indicates that increasing the kVp by 15% allows the mAs to be halved. Therefore, 10 mAs / 2 = 5 mAs.",
  },
  {
    id: 94,
    question: "What is the primary advantage of using a smaller focal spot in radiography?",
    options: [
      "Decreased patient dose",
      "Increased image sharpness",
      "Reduced exposure time",
      "Decreased scatter radiation",
    ],
    correctAnswer: "Increased image sharpness",
    rationale: "A smaller focal spot size decreases penumbra, resulting in sharper, more detailed images.",
  },
  {
    id: 95,
    question:
      "A patient receives a dose of 4 mGy during a CT scan. If the tissue weighting factor for the organ exposed is 0.1, what is the effective dose in mSv?",
    options: ["0.4 mSv", "1.0 mSv", "2.5 mSv", "4.0 mSv"],
    correctAnswer: "0.4 mSv",
    rationale: "Effective dose = absorbed dose * tissue weighting factor. Therefore, 4 mGy * 0.1 = 0.4 mSv.",
  },
  {
    id: 96,
    question:
      "A radiographic exam was taken with 200 mA and 0.5 seconds at 90 kVp. To reduce motion blur, the technologist decreases the exposure time to 0.25 seconds. What should the new mA be to maintain the same exposure?",
    options: ["100 mA", "200 mA", "400 mA", "800 mA"],
    correctAnswer: "400 mA",
    rationale:
      "mAs (exposure) = mA * time. To maintain the same exposure, doubling the mA is necessary when cutting the time in half: 200 mA * 0.5 s = 100 mAs, so the new mA should be 400 mA * 0.25 s = 100 mAs.",
  },
  {
    id: 97,
    question:
      "During a fluoroscopy procedure, the exposure rate at 1 meter from the source is 2 mGy/min. What will the exposure rate be at 0.5 meters from the source?",
    options: ["4 mGy/min", "6 mGy/min", "8 mGy/min", "16 mGy/min"],
    correctAnswer: "8 mGy/min",
    rationale:
      "According to the inverse square law, halving the distance increases the exposure rate by a factor of 4. 2 mGy/min * 4 = 8 mGy/min.",
  },
  {
    id: 98,
    question:
      "A radiograph was taken using 8:1 grid and 60 mAs at 85 kVp. If the grid is changed to 12:1, what should the new mAs be to maintain image quality?",
    options: ["30 mAs", "45 mAs", "75 mAs", "90 mAs"],
    correctAnswer: "75 mAs",
    rationale:
      "Switching from an 8:1 to a 12:1 grid requires approximately a 25% increase in mAs to compensate for the increased scatter absorption. Therefore, 60 mAs * 1.25 = 75 mAs.",
  },
  {
    id: 99,
    question:
      "If a technologist reduces the mAs from 10 mAs to 5 mAs, what will happen to the patient dose and image brightness?",
    options: [
      "Both dose and brightness will increase",
      "Both dose and brightness will decrease",
      "Dose will decrease, brightness will increase",
      "Dose will increase, brightness will decrease",
    ],
    correctAnswer: "Both dose and brightness will decrease",
    rationale: "Reducing mAs reduces both patient dose and image brightness because fewer x-rays are produced.",
  },
  {
    id: 100,
    question: "What is the primary function of the Automatic Exposure Control (AEC) in radiography?",
    options: [
      "Reduce scatter radiation",
      "Terminate exposure when sufficient radiation reaches the image receptor",
      "Increase image contrast",
      "Control the focal spot size",
    ],
    correctAnswer: "Terminate exposure when sufficient radiation reaches the image receptor",
    rationale:
      "AEC automatically terminates the exposure when the image receptor has received the correct amount of radiation, ensuring optimal exposure.",
  },
];
