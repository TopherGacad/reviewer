export const cluster_5 = [
  {
    id: 1,
    question: "Which MRI contrast parameter is crucial for determining the length of longitudinal relaxation time?",
    options: ["T1", "T2", "TR", "TE"],
    correctAnswer: 0, // was 1
    rationale:
      "T1 relaxation time, also known as spin-lattice relaxation time, represents the time for 63% of the longitudinal magnetization to recover.",
  },
  {
    id: 2,
    question: "What is the typical gyromagnetic ratio for hydrogen protons in a 1 Tesla magnetic field?",
    options: ["21 MHz", "42.58 MHz", "63.87 MHz", "85 MHz"],
    correctAnswer: 1, // was 2
    rationale:
      "The gyromagnetic ratio for hydrogen is 42.58 MHz/Tesla, so at 1 Tesla, the precessional frequency of hydrogen protons is 42.58 MHz.",
  },
  {
    id: 3,
    question: "Which method is used to correct magnetic field inhomogeneities in MRI?",
    options: ["Resonance", "Shimming", "Quenching", "Saturation"],
    correctAnswer: 1, // was 2
    rationale:
      "Shimming is the process of making adjustments to improve magnetic field homogeneity, either through electromagnetic coils (active shimming) or mechanical adjustments (passive shimming).",
  },
  {
    id: 4,
    question:
      "Which type of coil is typically used for localizing specific small areas in MRI and improving signal-to-noise ratio (SNR)?",
    options: ["Body coil", "Surface coil", "Gradient coil", "RF coil"],
    correctAnswer: 1, // was 2
    rationale:
      "Surface coils are used to receive signals from a small, localized area and provide a high signal-to-noise ratio (SNR) due to their proximity to the region of interest.",
  },
  {
    id: 5,
    question: "Which MRI sequence is best for highlighting water content and pathologies in tissue?",
    options: ["T1-weighted imaging", "Proton density-weighted imaging", "T2-weighted imaging", "Gradient echo imaging"],
    correctAnswer: 2, // was 3
    rationale:
      "T2-weighted imaging is used to emphasize differences in water content, making it ideal for identifying pathologies that involve water accumulation, such as edema or inflammation.",
  },
  {
    id: 6,
    question: "What is the primary advantage of using superconducting magnets in MRI scanners?",
    options: [
      "Low operating cost",
      "No cooling requirements",
      "No fringe field effects",
      "Uses electromagnetic induction",
    ],
    correctAnswer: 0, // was 1
    rationale:
      "Superconducting magnets provide high magnetic field strength with low operating cost, and they require cryogens like liquid helium for cooling to maintain superconductivity.",
  },
  {
    id: 7,
    question: "What is the cause of the loud acoustic noise heard during an MRI scan?",
    options: ["RF coil", "Shim coil", "Gradient coil", "Magnet coil"],
    correctAnswer: 2, // was 3
    rationale:
      "The gradient coils produce loud acoustic noise during the MRI scan as they rapidly switch on and off to create spatial encoding of the MR signal.",
  },
  {
    id: 8,
    question: "Which artifact occurs when anatomy outside the field of view is incorrectly wrapped into the image?",
    options: ["Chemical shift", "Aliasing", "Zipper artifact", "Motion artifact"],
    correctAnswer: 1, // was 2
    rationale:
      "Aliasing, also known as wrap-around artifact, occurs when anatomy outside the field of view is improperly included in the reconstructed image due to insufficient spatial coverage.",
  },
  {
    id: 9,
    question: "Which factor is most effective for improving signal-to-noise ratio (SNR) in MRI?",
    options: [
      "Decreasing slice thickness",
      "Using a smaller field of view (FOV)",
      "Increasing the number of signal averages (NSA)",
      "Reducing repetition time (TR)",
    ],
    correctAnswer: 2, // was 3
    rationale:
      "Increasing the number of signal averages (NSA) improves SNR by reducing noise through signal averaging, although it may also increase scan time.",
  },
  {
    id: 10,
    question:
      "What is the term for the rapid switching of the magnetic field in MRI, responsible for spatial encoding?",
    options: ["Gradient fields", "RF pulses", "Shim fields", "Precession"],
    correctAnswer: 0, // was 1
    rationale:
      "Gradient fields are responsible for spatial encoding in MRI, as they create localized variations in the magnetic field strength.",
  },
  {
    id: 11,
    question: "What is the precessional frequency of hydrogen protons at 1.5 Tesla?",
    options: ["21.29 MHz", "42.58 MHz", "63.87 MHz", "84 MHz"],
    correctAnswer: 2, // was 3
    rationale:
      "At 1.5 Tesla, the precessional frequency of hydrogen protons is approximately 63.87 MHz, based on the gyromagnetic ratio of 42.58 MHz/T.",
  },
  {
    id: 12,
    question: "Which MRI weighting is typically used for detecting pathology due to high water content?",
    options: ["T1-weighted", "T2-weighted", "Proton density-weighted", "Gradient echo"],
    correctAnswer: 1, // was 2
    rationale:
      "T2-weighted images are used to highlight water content, making them ideal for detecting pathology such as edema or inflammation.",
  },
  {
    id: 13,
    question: "What is the most common cause of motion artifacts in MRI?",
    options: [
      "Magnetic field inhomogeneity",
      "Respiration or heartbeats",
      "Chemical shift",
      "Gradient coil malfunction",
    ],
    correctAnswer: 1, // was 2
    rationale:
      "Motion artifacts in MRI are typically caused by involuntary movements such as breathing or heartbeats, leading to ghosting or blurring of the image.",
  },
  {
    id: 14,
    question: "What is the role of the RF coil in MRI?",
    options: [
      "Creating the static magnetic field",
      "Producing the gradient fields",
      "Transmitting and receiving RF signals",
      "Correcting magnetic field inhomogeneities",
    ],
    correctAnswer: 2, // was 3
    rationale:
      "The RF coil in MRI is responsible for transmitting radiofrequency pulses and receiving the MR signal from the patient.",
  },
  {
    id: 15,
    question: "Which of the following factors will reduce the scan time in MRI?",
    options: [
      "Decreasing TR (repetition time)",
      "Increasing the number of signal averages (NSA)",
      "Decreasing the matrix size",
      "Using a smaller slice thickness",
    ],
    correctAnswer: 0, // was 1
    rationale:
      "Decreasing the repetition time (TR) allows for quicker data acquisition, thus reducing the overall scan time.",
  },
  {
    id: 16,
    question: "Which type of artifact is caused by the presence of metallic implants in a patient?",
    options: ["Zipper artifact", "Chemical shift", "Magnetic susceptibility artifact", "Aliasing"],
    correctAnswer: 2, // was 3
    rationale:
      "Magnetic susceptibility artifacts are caused by variations in the magnetic field near metallic objects, leading to distortions in the MRI image.",
  },
  {
    id: 17,
    question: "What is the main advantage of using gadolinium as a contrast agent in MRI?",
    options: [
      "It shortens T2 relaxation time",
      "It produces brighter images on T2-weighted scans",
      "It shortens T1 relaxation time",
      "It eliminates all artifacts",
    ],
    correctAnswer: 2, // was 3
    rationale: "Gadolinium shortens T1 relaxation time, enhancing the contrast between tissues in T1-weighted images.",
  },
  {
    id: 18,
    question: "Which of the following is an intrinsic contrast parameter in MRI?",
    options: ["TR (repetition time)", "TE (echo time)", "Flip angle", "Proton density"],
    correctAnswer: 3, // was 4
    rationale:
      "Proton density is an intrinsic contrast parameter because it is a property of the tissue itself and cannot be adjusted by the MRI technologist.",
  },
  {
    id: 19,
    question: "Which MRI artifact is caused by the difference in resonant frequencies between fat and water?",
    options: ["Chemical shift", "Magnetic susceptibility", "Motion artifact", "Aliasing"],
    correctAnswer: 0, // was 1
    rationale:
      "Chemical shift artifact occurs due to the differences in resonant frequencies between fat and water, leading to displacement of tissues in the image.",
  },
  {
    id: 20,
    question: "Which of the following will increase the spatial resolution in an MRI scan?",
    options: [
      "Increasing the field of view (FOV)",
      "Decreasing the matrix size",
      "Increasing the slice thickness",
      "Decreasing the voxel size",
    ],
    correctAnswer: 3, // was 4
    rationale:
      "Decreasing the voxel size (smaller pixel and thinner slices) increases spatial resolution, allowing for better distinction between small structures.",
  },
  {
    id: 21,
    question: "Which type of MRI coil is typically used for both transmitting RF pulses and receiving the MR signal?",
    options: ["Gradient coil", "Surface coil", "Transceiver coil", "Shim coil"],
    correctAnswer: 2, // was 3
    rationale:
      "Transceiver coils are designed to both transmit RF pulses and receive MR signals, making them essential for head and body imaging in MRI.",
  },
  {
    id: 22,
    question:
      "Which of the following artifacts is commonly observed when scanning tissues near air or bone interfaces due to differences in magnetic susceptibility?",
    options: ["Chemical shift artifact", "Susceptibility artifact", "Motion artifact", "Zipper artifact"],
    correctAnswer: 1, // was 2
    rationale:
      "Susceptibility artifacts occur at interfaces between tissues with different magnetic susceptibilities, such as bone and air, and cause image distortion.",
  },
  {
    id: 23,
    question:
      "Which of the following sequences is most likely to be used for detecting brain abnormalities following a stroke?",
    options: [
      "T1-weighted imaging",
      "T2-weighted imaging",
      "Diffusion-weighted imaging (DWI)",
      "Proton density-weighted imaging",
    ],
    correctAnswer: 2, // was 3
    rationale:
      "Diffusion-weighted imaging (DWI) is particularly useful for detecting brain abnormalities, especially following an acute stroke, as it highlights restricted water movement in ischemic tissues.",
  },
  {
    id: 24,
    question: "In which direction do hydrogen protons precess when exposed to a magnetic field in MRI?",
    options: [
      "In the direction of the magnetic field",
      "Perpendicular to the magnetic field",
      "Opposite to the magnetic field",
      "In a random direction",
    ],
    correctAnswer: 0, // was 1
    rationale:
      "When hydrogen protons are exposed to a magnetic field, they precess in the same direction as the magnetic field, aligning either parallel or anti-parallel to it.",
  },
  {
    id: 25,
    question:
      "Which MRI sequence provides the best differentiation between normal and abnormal tissues by using water content to highlight pathologies?",
    options: ["T1-weighted", "T2-weighted", "Proton density-weighted", "Gradient echo"],
    correctAnswer: 1, // was 2
    rationale:
      "T2-weighted images provide excellent differentiation between normal and abnormal tissues due to their sensitivity to water content, which is often increased in pathological tissues.",
  },
  {
    id: 26,
    question: "Which parameter primarily determines the contrast between different tissues in T1-weighted images?",
    options: ["T1 relaxation time", "T2 relaxation time", "Proton density", "Slice thickness"],
    correctAnswer: 0, // was 1
    rationale:
      "The contrast in T1-weighted images is primarily influenced by T1 relaxation time, which measures how quickly tissues recover longitudinal magnetization.",
  },
  {
    id: 27,
    question: "Which process describes the loss of coherence of proton spins, leading to signal decay in MRI?",
    options: ["Precession", "Dephasing", "Rephasing", "Inversion"],
    correctAnswer: 1, // was 2
    rationale:
      "Dephasing refers to the process in which proton spins lose coherence, leading to signal decay and reduced signal-to-noise ratio (SNR) in MRI.",
  },
  {
    id: 28,
    question: "Which of the following factors increases contrast-to-noise ratio (CNR) in MRI?",
    options: [
      "Using a short echo time (TE)",
      "Using a long repetition time (TR)",
      "Administering gadolinium contrast",
      "Decreasing slice thickness",
    ],
    correctAnswer: 2, // was 3
    rationale:
      "Administering gadolinium contrast increases CNR by enhancing the differences between normal and abnormal tissues, making it easier to visualize lesions.",
  },
  {
    id: 29,
    question:
      "Which of the following MRI artifacts is caused by the difference in precessional frequencies of fat and water?",
    options: ["Zipper artifact", "Aliasing", "Chemical shift artifact", "Susceptibility artifact"],
    correctAnswer: 2, // was 3
    rationale:
      "Chemical shift artifact is caused by the difference in precessional frequencies between fat and water, which can result in misalignment of tissues in the image.",
  },
  {
    id: 30,
    question: "In MRI, what effect does increasing the field of view (FOV) have on the image?",
    options: ["Increases spatial resolution", "Decreases spatial resolution", "Increases noise", "Decreases contrast"],
    correctAnswer: 1, // was 2
    rationale:
      "Increasing the field of view (FOV) decreases spatial resolution because it results in larger pixel sizes, which reduces the ability to distinguish small structures in the image.",
  },

  {
    id: 31,
    question: "What is the effect of decreasing the repetition time (TR) in an MRI sequence?",
    options: ["Increases scan time", "Improves T2 weighting", "Reduces scan time", "Increases T1 weighting"],
    correctAnswer: 2, // was 3
    rationale:
      "Decreasing the repetition time (TR) reduces scan time because it allows for quicker acquisition of data.",
  },
  {
    id: 32,
    question: "Which of the following techniques is used to reduce motion artifacts during an MRI scan?",
    options: [
      "Increasing the slice thickness",
      "Using fast imaging techniques",
      "Decreasing the field of view (FOV)",
      "Increasing the number of signal averages (NSA)",
    ],
    correctAnswer: 1, // was 2
    rationale:
      "Using fast imaging techniques, such as echo planar imaging (EPI), helps reduce motion artifacts by shortening scan time and minimizing patient movement.",
  },
  {
    id: 33,
    question: "Which parameter is responsible for controlling the amount of transverse magnetization in MRI?",
    options: ["TE (echo time)", "TR (repetition time)", "Flip angle", "Voxel size"],
    correctAnswer: 2, // was 3
    rationale:
      "The flip angle controls the amount of transverse magnetization in MRI by determining how much of the longitudinal magnetization is converted into transverse magnetization.",
  },
  {
    id: 34,
    question: "Which artifact results from incomplete sampling of k-space data in MRI?",
    options: ["Chemical shift artifact", "Truncation artifact", "Motion artifact", "Zipper artifact"],
    correctAnswer: 1, // was 2
    rationale:
      "Truncation artifact occurs due to incomplete sampling of k-space data, leading to ringing or ghosting near high-contrast boundaries.",
  },
  {
    id: 35,
    question: "What effect does increasing the number of signal averages (NSA) have on an MRI image?",
    options: ["Increases noise", "Reduces signal-to-noise ratio (SNR)", "Increases scan time", "Decreases contrast"],
    correctAnswer: 2, // was 3
    rationale:
      "Increasing the number of signal averages (NSA) improves the signal-to-noise ratio (SNR) but also increases the scan time.",
  },
  {
    id: 36,
    question: "Which sequence is commonly used in MRI for evaluating flow-related phenomena such as blood flow?",
    options: [
      "T2-weighted imaging",
      "Time-of-flight (TOF) imaging",
      "Proton density-weighted imaging",
      "Inversion recovery",
    ],
    correctAnswer: 1, // was 2
    rationale:
      "Time-of-flight (TOF) imaging is commonly used to evaluate flow-related phenomena, such as blood flow in vessels, by capturing the signal from moving spins.",
  },
  {
    id: 37,
    question: "Which of the following strategies can help reduce chemical shift artifacts in MRI?",
    options: [
      "Increasing the field of view (FOV)",
      "Using a wider receive bandwidth",
      "Decreasing the slice thickness",
      "Increasing the repetition time (TR)",
    ],
    correctAnswer: 1, // was 2
    rationale:
      "Using a wider receive bandwidth reduces the effect of chemical shift artifacts by decreasing the difference in precessional frequencies between fat and water.",
  },
  {
    id: 38,
    question:
      "Which parameter in MRI affects the time between the application of an RF pulse and the peak of the signal received?",
    options: ["TR (repetition time)", "TE (echo time)", "Flip angle", "T1 relaxation time"],
    correctAnswer: 1, // was 2
    rationale:
      "TE (echo time) is the time between the application of an RF pulse and the peak of the signal received in MRI.",
  },
  {
    id: 39,
    question: "Which of the following MRI artifacts is caused by external RF interference?",
    options: ["Chemical shift", "Zipper artifact", "Motion artifact", "Aliasing"],
    correctAnswer: 1, // was 2
    rationale:
      "Zipper artifacts are caused by external RF interference, resulting in a characteristic bright line across the image.",
  },
  {
    id: 40,
    question: "Which of the following MRI techniques is used to suppress fat signals in the image?",
    options: [
      "Inversion recovery",
      "Proton density-weighted imaging",
      "T1-weighted imaging",
      "STIR (Short TI Inversion Recovery)",
    ],
    correctAnswer: 3, // was 4
    rationale:
      "STIR (Short TI Inversion Recovery) is used to suppress fat signals in MRI, allowing for better visualization of water-based tissues and pathologies.",
  },
  {
    id: 41,
    question: "What is the purpose of using a shim coil in an MRI scanner?",
    options: [
      "To transmit RF signals",
      "To correct magnetic field inhomogeneities",
      "To produce gradient fields",
      "To measure the proton density",
    ],
    correctAnswer: 1, // was 2
    rationale:
      "Shim coils are used in MRI to correct magnetic field inhomogeneities, improving the uniformity of the magnetic field across the imaging area.",
  },
  {
    id: 42,
    question:
      "Which MRI sequence uses an additional 180-degree refocusing pulse after the initial 90-degree excitation pulse?",
    options: ["Gradient echo", "Spin echo", "Time-of-flight (TOF)", "Proton density-weighted"],
    correctAnswer: 1, // was 2
    rationale:
      "Spin echo sequences use a 180-degree refocusing pulse after the initial 90-degree excitation pulse to eliminate dephasing caused by magnetic field inhomogeneities.",
  },
  {
    id: 43,
    question: "Which MRI parameter is adjusted to optimize contrast in T2-weighted images?",
    options: ["TR (repetition time)", "TE (echo time)", "Flip angle", "Voxel size"],
    correctAnswer: 1, // was 2
    rationale:
      "TE (echo time) is adjusted to optimize contrast in T2-weighted images, as it affects the amount of transverse relaxation in tissues.",
  },
  {
    id: 44,
    question: "Which MRI technique allows imaging of metabolic processes by analyzing chemical compounds in tissues?",
    options: [
      "Diffusion-weighted imaging",
      "Proton density imaging",
      "Magnetic resonance spectroscopy (MRS)",
      "Time-of-flight (TOF)",
    ],
    correctAnswer: 2, // was 3
    rationale:
      "Magnetic resonance spectroscopy (MRS) allows imaging of metabolic processes by analyzing chemical compounds in tissues, such as metabolites in the brain.",
  },
  {
    id: 45,
    question: "Which of the following factors contributes to increased signal-to-noise ratio (SNR) in MRI?",
    options: [
      "Increasing matrix size",
      "Decreasing repetition time (TR)",
      "Using a larger voxel size",
      "Increasing the echo time (TE)",
    ],
    correctAnswer: 2, // was 3
    rationale:
      "Using a larger voxel size increases signal-to-noise ratio (SNR) because it allows more signal to be collected from a larger tissue volume.",
  },
  {
    id: 46,
    question: "Which MRI parameter is directly related to the signal loss due to dephasing in tissues?",
    options: ["T1 relaxation", "T2 relaxation", "Repetition time", "Proton density"],
    correctAnswer: 1, // was 2
    rationale:
      "T2 relaxation is related to the signal loss due to dephasing of proton spins in tissues, which occurs as the protons interact with each other.",
  },
  {
    id: 47,
    question: "Which factor is adjusted to increase the spatial resolution of an MRI scan?",
    options: [
      "Increasing slice thickness",
      "Decreasing matrix size",
      "Decreasing voxel size",
      "Increasing field of view (FOV)",
    ],
    correctAnswer: 2, // was 3
    rationale:
      "Decreasing the voxel size increases spatial resolution by improving the ability to distinguish small structures in the MRI scan.",
  },
  {
    id: 48,
    question: "What is the function of a gradient coil in MRI?",
    options: [
      "Correcting magnetic field inhomogeneities",
      "Generating the primary magnetic field",
      "Producing spatial encoding",
      "Receiving RF signals",
    ],
    correctAnswer: 2, // was 3
    rationale:
      "Gradient coils produce spatial encoding in MRI by creating small variations in the magnetic field, allowing for the localization of signals in three dimensions.",
  },
  {
    id: 49,
    question: "Which of the following is a key advantage of using T1-weighted imaging in MRI?",
    options: [
      "Excellent contrast for detecting fluid-based pathologies",
      "Shorter scan time compared to T2-weighted imaging",
      "Better visualization of inflammation",
      "Superior spatial resolution for bony anatomy",
    ],
    correctAnswer: 1, // was 2
    rationale:
      "T1-weighted imaging generally has shorter scan times compared to T2-weighted imaging and provides good contrast for anatomical detail, particularly for tissues with fat.",
  },
  {
    id: 50,
    question: "Which technique is used to selectively suppress signals from either fat or water in MRI?",
    options: [
      "Diffusion-weighted imaging",
      "Inversion recovery",
      "Chemical shift imaging",
      "Fat-saturation techniques",
    ],
    correctAnswer: 3, // was 4
    rationale:
      "Fat-saturation techniques are commonly used in MRI to selectively suppress fat signals, allowing for better visualization of water-based tissues and pathology.",
  },
  {
    id: 51,
    question:
      "Which MRI sequence is typically used to detect restricted diffusion of water molecules, such as in cases of stroke?",
    options: [
      "Gradient echo",
      "Diffusion-weighted imaging (DWI)",
      "Proton density-weighted imaging",
      "Inversion recovery",
    ],
    correctAnswer: 1, // was 2
    rationale:
      "Diffusion-weighted imaging (DWI) is commonly used to detect areas of restricted diffusion, such as in cases of acute stroke where water movement is restricted in affected tissues.",
  },
  {
    id: 52,
    question: "What is the effect of increasing the matrix size while keeping the field of view constant in MRI?",
    options: [
      "Increases spatial resolution",
      "Decreases spatial resolution",
      "Increases voxel size",
      "Reduces scan time",
    ],
    correctAnswer: 0, // was 1
    rationale:
      "Increasing the matrix size while keeping the field of view constant increases spatial resolution by reducing the size of individual pixels, leading to finer image detail.",
  },
  {
    id: 53,
    question: "Which MRI parameter is primarily adjusted to reduce image blurring caused by patient motion?",
    options: ["TE (echo time)", "NSA (number of signal averages)", "TR (repetition time)", "Slice thickness"],
    correctAnswer: 1, // was 2
    rationale:
      "Increasing the number of signal averages (NSA) helps reduce image blurring caused by patient motion by improving the signal-to-noise ratio and averaging out motion effects.",
  },
  {
    id: 54,
    question:
      "Which phenomenon occurs when hydrogen protons are exposed to an external magnetic field and align parallel to it?",
    options: ["Dephasing", "Precession", "Resonance", "Inversion"],
    correctAnswer: 1, // was 2
    rationale:
      "Precession refers to the wobbling motion of hydrogen protons as they align parallel to the external magnetic field in MRI.",
  },
  {
    id: 55,
    question: "Which of the following is a disadvantage of using T2-weighted imaging in MRI?",
    options: [
      "Longer scan time",
      "Poor contrast resolution",
      "Inability to visualize fluid-based pathologies",
      "Limited use for brain imaging",
    ],
    correctAnswer: 0, // was 1
    rationale:
      "T2-weighted imaging has longer scan times compared to T1-weighted imaging, which can be a disadvantage in time-sensitive clinical situations.",
  },
  {
    id: 56,
    question: "What does a short echo time (TE) in MRI typically result in?",
    options: ["T2-weighting", "Proton density-weighting", "T1-weighting", "Longer scan time"],
    correctAnswer: 2, // was 3
    rationale:
      "A short echo time (TE) typically results in T1-weighted images, which provide good contrast for anatomical structures and shorter scan times.",
  },
  {
    id: 57,
    question: "Which MRI artifact is commonly caused by patient breathing during the scan?",
    options: ["Magnetic susceptibility artifact", "Chemical shift artifact", "Motion artifact", "Zipper artifact"],
    correctAnswer: 2, // was 3
    rationale:
      "Motion artifact is often caused by involuntary movements such as patient breathing, leading to blurring or ghosting in the MRI image.",
  },
  {
    id: 58,
    question:
      "Which type of MRI imaging sequence is best for differentiating between normal and abnormal tissues with high water content?",
    options: ["T1-weighted", "T2-weighted", "Proton density-weighted", "Gradient echo"],
    correctAnswer: 1, // was 2
    rationale:
      "T2-weighted imaging is highly sensitive to water content and is ideal for differentiating between normal and abnormal tissues, especially in cases of edema or inflammation.",
  },
  {
    id: 59,
    question: "Which factor primarily determines the amount of longitudinal magnetization in an MRI scan?",
    options: ["TE (echo time)", "Flip angle", "TR (repetition time)", "Voxel size"],
    correctAnswer: 2, // was 3
    rationale:
      "TR (repetition time) primarily determines the amount of longitudinal magnetization by controlling the time allowed for longitudinal recovery between successive RF pulses.",
  },
  {
    id: 60,
    question: "What is the effect of using a smaller voxel size in MRI?",
    options: [
      "Increases signal-to-noise ratio (SNR)",
      "Reduces spatial resolution",
      "Increases spatial resolution",
      "Decreases scan time",
    ],
    correctAnswer: 2, // was 3
    rationale:
      "Using a smaller voxel size increases spatial resolution by allowing for finer detail in the image, though it may decrease the signal-to-noise ratio (SNR).",
  },
];
